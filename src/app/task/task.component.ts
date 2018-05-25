import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  // task_id = null;
  task = null; // task.id

  constructor(private _route: ActivatedRoute) {
    // console.log("snapshot: ",_route.snapshot.params.id);

    this._route.paramMap.subscribe( params => {
      console.log('observable: ', params.get('id'));
      this.httpService.getTask(params.get('id'))
      .subscribe( taskReturned => {
        this.task = taskReturned;
      })
    });


  }

  ngOnInit() {
  }

}
