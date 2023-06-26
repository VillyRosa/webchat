import { Component } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  private socket: Socket;
  messages: string[] = [];
  message: string = '';

  constructor() {
    this.socket = io('http://localhost:3000');
    this.socket.on('chat message', (message: string) => {
      console.log(message)
      this.messages.push(message);
    });
  }

  sendMessage() {
    this.socket.emit('chat message', this.message);
    this.message = '';
  }

}
