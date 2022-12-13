import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-edit',
	templateUrl: './edit.component.html',
	styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

	userId!: number;

	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.userId = +params['id'];
		})
	}

}
