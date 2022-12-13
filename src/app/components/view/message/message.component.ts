import { Component, Input, OnInit } from '@angular/core';
import MessageConfig from 'src/app/models/Message.model';
import { MessageService } from 'src/app/services/message.service';

@Component({
	selector: 'app-message',
	templateUrl: './message.component.html',
	styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

	messageConfig!: MessageConfig;

	constructor(private message: MessageService) {
	}

	ngOnInit(): void {
		this.messageConfig = this.message.config;
	}

	closeMessage() {
		this.messageConfig.hidden = true;
	}
}
