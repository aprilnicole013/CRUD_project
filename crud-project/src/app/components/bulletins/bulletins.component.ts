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

  constructor() { }

  ngOnInit(): void {
    this.bulletins = [];
  }

  deleteBulletin(id:number) {
    //Filtering items not matching given id. Giving back all bulletins excpet for one that is being deleted
    this.bulletins = this.bulletins.filter((v, i) => i !== id);
  }

  addBulletin () {
    if(!this.inputTitle || !this.inputBulletin) {
      alert("Please complete your bulletin post")
    }
      this.bulletins.push({
        title: this.inputTitle,
        content: this.inputBulletin,
        isUrgent: false,
        id: this.bulletins[this.bulletins.length]?.id || 0 + 1
      });

      this.inputBulletin = '';
      this.inputTitle ='';
    }

 toggleUrgency (id:number) {
   this.bulletins[id].isUrgent = !this.bulletins[id].isUrgent;
 }

}
