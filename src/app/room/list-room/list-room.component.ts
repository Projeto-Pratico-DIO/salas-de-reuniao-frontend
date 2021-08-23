import { Component, OnInit, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RoomService } from '../room.service';
import { Room } from '../models/room';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css'],
  providers: [DatePipe]
})
export class ListRoomComponent implements OnInit {

  rooms$: Observable<Room[]>;
  filter = new FormControl('');
  filteredRooms: Room[] = [];
  _rooms: Room[] = [];
  _filterBy: string;

  constructor(private roomService: RoomService, private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.roomService.getRoomList().subscribe(data => {
      this._rooms = data;
      this.filteredRooms = this._rooms;
    });
  }

  deleteRoom(id: number) {
    this.roomService.deleteRoom(id)
      .subscribe(data => {
        console.log(data)
        this.reloadData();
      },
        error => console.log(error));
  }

  roomDetails(id: number) {
    this.router.navigate(['details', id])
  }

  updateRoom(id: number) {
    this.router.navigate(['update', id])
  }

  set filterRoom(value: string) {
    this._filterBy = value;
    this.filteredRooms = this._rooms
      .filter((room: Room) => room.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }
}
