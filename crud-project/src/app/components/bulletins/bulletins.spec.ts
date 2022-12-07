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
  console.log("First: ", bulletinBoard.bulletins);
  bulletinBoard.deleteBulletin(0);
  console.log("Second: ", bulletinBoard.bulletins);
  console.log(bulletinBoard.bulletins.length);
  it("Deletes a bulletin when deleteBulletin is invoked", () => {
    expect(bulletinBoard.bulletins.length).toBe(0);
  })

})

describe("Set urgency", ()=> {
  const notUrgentBulletin:Bulletin = {
    title: "Title 3 ",
    content: 'Not urgent bulletin',
    isUrgent: false,
    id: 3

  }

  const urgentBulletin:Bulletin = {...notUrgentBulletin, isUrgent: true, id: 4}

  it("Changes bulletin to urgent", () => {
  })

  it("Changes bulletin to not urgent", () => {
  })

})
