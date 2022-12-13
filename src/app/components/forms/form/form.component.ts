import { MessageService } from './../../../services/message.service';
import { ValidationsService } from './../../../services/validations.service';
import { UserService } from './../../../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import User from 'src/app/models/User.model';
import Message from 'src/app/models/Message.model';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
	@Input() title!: string;
	@Input() buttonLabel!: string;
	@Input() buttonColor!: string;
	@Input() disable!: boolean;
	@Input() userId?: number;

	user: User = {
		nickname: '',
		email: '',
		imageUrl: ''
	}

	constructor(
		private router: Router,
		private userService: UserService,
		private validations: ValidationsService,
		private message: MessageService
	) { }

	ngOnInit(): void {
		if (this.userId) {
			this.userService.getById(this.userId)
				.subscribe(user => this.user = user)
		}
	}

	cancel() {
		this.router.navigate(['/users']);
	}

	cancelSubmit(e: Event): void {
		e.preventDefault();
	}

	addUser(): void {
		this.userService.create(this.user).subscribe(() => {
			this.router.navigate(['/users']);
		});
	}

	editUser(): void {
		this.userService.update(this.user).subscribe(() => {
			this.router.navigate(['/users']);
		})
	}

	deleteUser(): void {
		this.userService.remove(this.userId).subscribe(() => {
			this.router.navigate(['/users']);
		})
	}

	submitForm() {
		try {
			this.validations
				.existsOrError(this.user.nickname, "Nickname not informed.");
			this.validations
				.existsOrError(this.user.email, "Email not informed.");
			this.validations
				.existsOrError(this.user.imageUrl, "Image(Url) not informed.");
			this.validations
				.validateUrl(this.user.imageUrl, "Image(Url) does not exist.");

			if (!this.userId) {
				this.addUser();
				this.message.config.msg = "User added successfully.";
				this.message.config.title = "Success";
				this.message.config.mainColor = "green";
				this.message.config.icon = "fa-solid fa-user-plus";
				this.message.showMessage();
			} else if (this.disable) {
				this.deleteUser();
				this.message.config.msg = "User removed successfully.";
				this.message.config.title = "Success";
				this.message.config.mainColor = "green";
				this.message.config.icon = "fa-solid fa-user-minus";
				this.message.showMessage();
			} else {
				this.editUser();
				this.message.config.msg = "User changed successfully.";
				this.message.config.title = "Success";
				this.message.config.mainColor = "green";
				this.message.config.icon = "fa-solid fa-user-pen";
				this.message.showMessage();
			}
		} catch (errorMsg) {
			this.message.config.msg = errorMsg;
			this.message.config.title = "Error";
			this.message.config.mainColor = "crimson";
			this.message.config.icon = "fa-solid fa-circle-exclamation";
			this.message.showMessage();
		}
	}
}
