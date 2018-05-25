import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { NotesComponent } from './notes/notes.component';
import { PrivateNotesComponent } from './notes/private-notes/private-notes.component';
import { PublicNotesComponent } from './notes/public-notes/public-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskComponent,
    TaskDetailsComponent,
    NotesComponent,
    PrivateNotesComponent,
    PublicNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
