import { TaskComponent } from './task/task.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotesComponent } from './notes/notes.component';
import { PrivateNotesComponent } from './notes/private-notes/private-notes.component';
import { PublicNotesComponent } from './notes/public-notes/public-notes.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'task/:id', component: TaskComponent },
  { path: 'notes', component: NotesComponent, children: [
    { path: 'private', component: PrivateNotesComponent },
    { path: 'public' , component: PublicNotesComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
