import { Component } from '@angular/core';
import { io } from "socket.io-client";

const socket = io("ws://localhost:3000");

socket.on("polls", (data) => {
  console.log(data); // false
});

socket.emit("polls", {
  name: 'Samuel Ogu'
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
}

