import { Component, OnInit } from '@angular/core';
import { Bulletin } from 'src/app/models/Bulletin';

@Component({
  selector: 'app-bulletins',
  templateUrl: './bulletins.component.html',
  styleUrls: ['./bulletins.component.css']
})
export class BulletinsComponent implements OnInit {

  bulletins:Bulletin[]
  constructor() { }

  ngOnInit(): void {
    this.bulletins = [
      {
        content: 'First bulletin',
        completed: false
      },
      {
        content: 'Second bulletin',
        completed: true
      }
    ]
  }

}
