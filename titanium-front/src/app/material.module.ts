import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MdButtonModule, MdCardModule, MdGridListModule, MdToolbarModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCardModule,
    MdGridListModule,
    MdToolbarModule
  ],
  exports: [
    MdButtonModule,
    MdCardModule,
    MdGridListModule,
    MdToolbarModule
  ],
  declarations: []
})
export class MaterialModule { }
