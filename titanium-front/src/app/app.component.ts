import { Component } from '@angular/core';
import {Stock} from "./model/stock";
import {TitaniumService} from "./titanium.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private titaniumService: TitaniumService){}

  stock: Stock;

  enter(stockName: string){
    this.titaniumService.getStock(stockName);
  }
}
