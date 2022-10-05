import { Action } from "@ngrx/store";
import { Bulletin } from "../bulletin.model";

//Action
export enum BulletinActionType {
  ADD_BULLETIN = '[BULLETIN] Add Bulletin',
}

export class AddBulletinAction implements Action {

  readonly type = BulletinActionType.ADD_BULLETIN;
  constructor(public payload: Bulletin){}
}

export type BulletinAction = AddBulletinAction;
