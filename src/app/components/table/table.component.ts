import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/User.model';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
	users!: User[];

	constructor(private userService: UserService) {}

	ngOnInit(): void {
		this.userService.get().subscribe(data => {
			this.users = data;
		})
	}

}
