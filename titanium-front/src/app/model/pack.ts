import {Equipment} from "./equipment";
export class Pack {
  equipments: Array<Equipment>;
  mustHave: number; // minimum quantity
  alertQuantity: number; // if below this number, send alert.
}
