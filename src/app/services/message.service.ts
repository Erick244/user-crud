import MessageConfig from 'src/app/models/Message.model';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class MessageService {

	config: MessageConfig = {
		hidden: true,
		title: "",
		msg: "",
		icon: "",
		mainColor: "#fff"
	}


	constructor() { }

	showMessage() {
		this.config.hidden = false;
		setTimeout(() => {
			this.config.hidden = true;
		}, 3000)
	}

}
