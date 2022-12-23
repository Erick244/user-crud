import { MessageService } from './../../../services/message.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import User from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	searchOption!: string;
	textSeach!: string;
	usersFiltered!: User[];
	pagedUsers: User[] = [];
	limit = 10;
	totalUsers!: number;

	constructor(
		private router: Router,
		private userService: UserService,
		private message: MessageService
	) { }

	ngOnInit(): void {
		this.filterUsersBySearch();
	}

	renderAddForm() {
		this.router.navigate(['/addUser']);
	}

	getOption(e: any) {
		this.searchOption = e.target.value;
	}

	filterUsersBySearch() {
		this.userService.get().subscribe(users => {
			if (this.textSeach && this.searchOption) {
				this.usersFiltered = users.filter(user => {
					if (this.searchOption == "id") {
						return user.id == +this.textSeach;
					}
					const userAtribute = (user as any)[this.searchOption].toLowerCase();
					return userAtribute.includes(this.textSeach.toLowerCase());
				})
			} else {
				this.usersFiltered = users;
			}

			this.totalUsers = this.usersFiltered.length;

			if (!this.totalUsers) {
				this.message.config.msg = "User not found.";
				this.message.config.title = "Problem";
				this.message.config.mainColor = "#ffd900";
				this.message.config.icon = "fa-solid fa-user-slash";
				this.message.showMessage();

				this.usersFiltered = users;
				this.totalUsers = this.usersFiltered.length;
			}

			this.pagedUsers = [];
			this.pagination();
		})
	}

	pagination(): void {
		if (this.totalUsers > 10) {
			if (this.totalUsers < this.limit) this.limit = this.totalUsers
			for (let i = this.pagedUsers.length; i < this.limit; i++) {
				this.pagedUsers.push(this.usersFiltered[i]);
			}
		} else {
			this.pagedUsers = this.usersFiltered;
		}
	}

	thereUsersAfterLimit(): boolean {
		if (this.totalUsers == this.limit) {
			return false;
		} else {
			return true;
		}
	}

	showMore(): void {
		this.limit += 10;
		this.pagination();
	}
}
