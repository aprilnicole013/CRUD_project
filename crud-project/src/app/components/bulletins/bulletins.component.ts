import { Component, OnInit } from '@angular/core';
import { Bulletin } from 'src/app/models/Bulletin';

@Component({
  selector: 'app-bulletins',
  templateUrl: './bulletins.component.html',
  styleUrls: ['./bulletins.component.css']
})
export class BulletinsComponent implements OnInit {

  bulletins:Bulletin[]

  inputBulletin:string = "";
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

  deleteBulletin(id:number) {
    this.bulletins = this.bulletins.filter((v, i) => i !== id);
  }

  addBulletin () {
    this.bulletins.push({
      content: this.inputBulletin,
      completed: false
    });

    this.inputBulletin = ''
  }

}
