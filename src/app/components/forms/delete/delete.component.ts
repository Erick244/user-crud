import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-delete',
	templateUrl: './delete.component.html',
	styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
	
	userId!: number;

	constructor(private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.userId = +params['id'];
		})
	}

}
