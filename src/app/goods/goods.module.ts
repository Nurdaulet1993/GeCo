import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "@shared";
import { GoodsRoutingModule } from "./goods-routing.module";
import { GoodListComponent } from './components/good-list/good-list.component';

@NgModule({
  declarations: [
    GoodsRoutingModule.components,
    GoodListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GoodsRoutingModule
  ]
})
export class GoodsModule { }
