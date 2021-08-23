import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRoomComponent } from './room/create-room/create-room.component';
import { ListRoomComponent } from './room/list-room/list-room.component';
import { RoomDetailsComponent } from './room/room-details/room-details.component';
import { UpdateRoomComponent } from './room/update-room/update-room.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdTableFilteringModule } from './room/table-filtering.module';


@NgModule({
  declarations: [
    AppComponent,
    CreateRoomComponent,
    ListRoomComponent,
    RoomDetailsComponent,
    UpdateRoomComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    NgbdTableFilteringModule,

  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
