import { Bulletin } from '../models/bulletin.model';
import { BulletinAction, BulletinActionType } from '../models/actions/bulletins.actions';

//dummy initial state
const initialState: Array<Bulletin> = [
  {
    title: "Title One",
    content: "This is a bulletin post",
    isUrgent: true,
    id: 1
  },
];

export function BulletinReducer(
   state: Array<Bulletin> = initialState,
   action: BulletinAction
) {
   switch (action.type) {
     case BulletinActionType.ADD_BULLETIN:
       return [...state, action.payload];
     default:
       return state;
   }
}
