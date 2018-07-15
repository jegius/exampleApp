import {MessageService} from "./message.service";
import {Message} from "./message.model";
import {Component} from "@angular/core";

@Component({selector: "paMessages", moduleId: module.id, templateUrl: "message.component.html",})
export class MessageComponent {
    lastMessage: Message;

    constructor(messageService: MessageService) {
        messageService.registerMessageHandler(m => this.lastMessage = m);
    }
}