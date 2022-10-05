import { Component, OnInit } from '@angular/core';
import { Bulletin } from "src/app/store/models/bulletin.model";

@Component({
  selector: 'app-bulletins',
  templateUrl: './bulletins.component.html',
  styleUrls: ['./bulletins.component.css']
})
export class BulletinsComponent implements OnInit {

  bulletins:Bulletin[]

  inputTitle:string = "";

  inputBulletin:string = "";

  urgencyVal = "Set to Urgent"

  constructor() { }

  ngOnInit(): void {
    this.bulletins = [
      {
        title: "Title 2 ",
        content: 'First bulletin',
        completed: false,
        isUrgent: false
      },
      {
        title: "Title 1",
        content: 'Second bulletin',
        completed: true,
        isUrgent: false
      }
    ]
  }

  deleteBulletin(id:number) {
    this.bulletins = this.bulletins.filter((v, i) => i !== id);
  }

  addBulletin () {
    if(this.bulletins){
      this.bulletins.push({
        title: this.inputTitle,
        content: this.inputBulletin,
        completed: false,
        isUrgent: false
      });

      this.inputBulletin = '';
      this.inputTitle ='';
    }
    }

//  toggleUrgency () {
//   if(this.bulletins){
//     this.bulletins.push({
//       isUrgent: true
//     });

//  }

}
