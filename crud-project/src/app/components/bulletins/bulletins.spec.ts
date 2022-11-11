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

  it("Adds a new bulletin", () => {
    bulletinBoard.inputTitle = 'mock title';
    bulletinBoard.inputBulletin = 'mock bulletin';
    bulletinBoard.addBulletin();
    console.log('bulletin board: ', bulletinBoard);
    expect(true);
  });

})

describe("Delete bulletins", ()=> {
  //data here
  it("Deletes a bulletin when deleteBulletin is invoked", () => {
    //Expectation here
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
