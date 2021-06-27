import { Component, OnInit } from '@angular/core';
import { CartService } from "../core/services/cart.service";
import {merge, Observable} from "rxjs";
import { scan } from "rxjs/operators";
import { Good } from "../shared/models/good.model";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  goods?: Good[] | null;
  totalCost?: number;

  displayedColumns: string[] = ['name', 'price'];

  constructor(
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.goods = this.cartService.getGoods();
    if (this.goods !== null) {
      this.totalCost = this.cartService.calculateCost(this.goods);
    }
  }

}
