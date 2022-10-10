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

  bulletinId:number;

  constructor() { }

  ngOnInit(): void {
    this.bulletins = [
      {
        title: "Title 2 ",
        content: 'First bulletin',
        completed: false,
        isUrgent: false,
        id: 2
      },
      {
        title: "Title 1",
        content: 'Second bulletin',
        completed: true,
        isUrgent: false,
        id: 1
      }
    ]
  }

  deleteBulletin(id:number) {
    //Filtering items not matching given id. Giving back all bulletins excpet for one that is being deleted
    this.bulletins = this.bulletins.filter((v, i) => i !== id);
  }

  addBulletin () {
    if(this.bulletins){
      this.bulletins.push({
        title: this.inputTitle,
        content: this.inputBulletin,
        completed: false,
        isUrgent: false,
        id: this.bulletinId
      });

      this.inputBulletin = '';
      this.inputTitle ='';
    }
    }

 toggleUrgency (id:number) {
   this.bulletins[id].isUrgent = !this.bulletins[id].isUrgent;
   console.log(this.bulletins[id].isUrgent)
 }

}
