import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output()
  enterApp: EventEmitter<string> = new EventEmitter();

  enter(stockName: string){
    this.enterApp.emit(stockName);
  }

}
