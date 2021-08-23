import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './models/room';


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'http://localhost:8080/api/v1/room';

  constructor(private http: HttpClient) { }

  getRoom(id: number): Observable<Room> {
    return this.http.get<Room>(`${this.baseUrl}/${id}`);
  }

  createRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(`${this.baseUrl}`, room);
  }

  updateRoom(id: number, value: any): Observable<Room> {
    return this.http.put<Room>(`${this.baseUrl}`, value)
  }

  deleteRoom(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  getRoomList(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.baseUrl}`);
  }
}
