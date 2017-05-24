import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { NewComponent } from './new/new.component';
import { routing } from './app.routes';
import { FriendService } from './friend.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditComponent,
    ShowComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ FriendService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
