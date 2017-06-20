import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MdButtonModule, MdCardModule, MdGridListModule, MdIconModule, MdToolbarModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdCardModule,
    MdGridListModule,
    MdToolbarModule,
    MdIconModule
  ],
  exports: [
    MdButtonModule,
    MdCardModule,
    MdGridListModule,
    MdToolbarModule,
    MdIconModule
  ],
  declarations: []
})
export class MaterialModule { }
