import { TestBed } from "@angular/core/testing";
import { AppComponent } from "src/app/app.component";
import { Bulletin } from "src/app/store/models/bulletin.model";
import { BulletinsComponent } from "./bulletins.component";

beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [
          AppComponent, BulletinsComponent
        ],
      }).compileComponents();
})

describe("Add bulletins", ()=> {

  let bulletinBoard = new BulletinsComponent();
  bulletinBoard.ngOnInit();
  bulletinBoard.inputTitle = 'mock title';
  bulletinBoard.inputBulletin = 'mock bulletin';
  bulletinBoard.addBulletin();

  it("Adds a new bulletin", () => {
    expect(bulletinBoard.bulletins[0].title).toEqual('mock title');
    expect(bulletinBoard.bulletins[0].content).toEqual('mock bulletin');
  });

})

describe("Delete bulletin", ()=> {
  let bulletinBoard = new BulletinsComponent();
  bulletinBoard.ngOnInit();
  bulletinBoard.inputTitle = 'mock title';
  bulletinBoard.inputBulletin = 'mock bulletin';
  bulletinBoard.addBulletin();
  bulletinBoard.deleteBulletin(1);
  it("Deletes a bulletin when deleteBulletin is invoked", () => {
    expect(bulletinBoard.bulletins.length).toBe(0);
  })

})

describe("Set urgency to true", ()=> {
  let bulletinBoard = new BulletinsComponent();
  bulletinBoard.ngOnInit();
  bulletinBoard.inputTitle = 'Title 3';
  bulletinBoard.inputBulletin = 'Not urgent bulletin';
  bulletinBoard.setUrgency = false;
  bulletinBoard.addBulletin();
  it("Changes non urgent bulletin to urgent when isUrgent is invoked", () => {
    bulletinBoard.toggleUrgency(1);
    expect(bulletinBoard.bulletins[0].isUrgent).toBe(true);
  })

})
  describe("Set urgency to false", ()=> {
    let bulletinBoard = new BulletinsComponent();
    bulletinBoard.ngOnInit();
    bulletinBoard.inputTitle = 'Title 4';
    bulletinBoard.inputBulletin = 'Urgent bulletin';
    bulletinBoard.setUrgency = true;
    bulletinBoard.addBulletin();
    it("Changes urgent bulletin to non urgent when isUrgent is invoked", () => {
      bulletinBoard.toggleUrgency(1);
      expect(bulletinBoard.bulletins[0].isUrgent).toBe(false);
    })

  // .id.urgent {
  //   color: red;

  // }

  // .id.not-urgent {
  //   color: green;
  // }

  // .content.urgent {
  //   color: red;
  // }

  // .content.not-urgent {
  //   color: green;
  // }

describe("Set bulletin id", ()=> {
  let bulletinBoard = new BulletinsComponent();
  bulletinBoard.ngOnInit();
  bulletinBoard.inputTitle = 'Title 3';
  bulletinBoard.inputBulletin = 'Not urgent bulletin';
  bulletinBoard.addBulletin();

  bulletinBoard.inputTitle = 'Title 4';
  bulletinBoard.inputBulletin = 'Urgent bulletin';
  bulletinBoard.addBulletin();

  it("Adding a bulletin increments the id by 1", () => {
    expect(bulletinBoard.bulletins[0].id).toBe(1);
  })

  it("Adding a bulletin increments the id by 1", () => {
    expect(bulletinBoard.bulletins[1].id).toBe(2);
  })
})

})
