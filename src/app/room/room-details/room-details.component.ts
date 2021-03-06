import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from '../models/room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  id: number
  room: Room

  constructor(private roomService: RoomService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.room = new Room();
    this.id = this.activeRoute.snapshot.params['id']

    this.roomService.getRoom(this.id).subscribe(data => {
      console.log(data)
      this.room = data;
    },
      error => console.log(error));
  }

  list() {
    this.router.navigate(['rooms']);
  }
}
