import { Injectable } from "@angular/core";
import { merge, Observable, of, Subject } from "rxjs";
import { Good } from "../../shared/models/good.model";
import {reduce, scan, startWith} from "rxjs/operators";
import { StorageService } from "./storage.service";

@Injectable({
  providedIn: "root"
})
export class CartService {
  private goods: Good[] = [];

  private addToCart: Subject<Good> = new Subject<Good>();
  addToCartAction$ = this.addToCart.asObservable();

  constructor(
    private storageService: StorageService
  ) {}

  setGood(value: Good): void {
    let goods: Good[] | null = this.getGoods();
    if (goods === null) {
      this.goods.push(value);
      this.storageService.setItem('cart', this.goods);
    } else {
      this.storageService.setItem('cart', [...goods, value]);
    }
  }

  calculateCost(goods: Good[]): number {
    let cost = 0;
    goods.forEach(item => {
      cost = cost + item.price;
    });
    return cost;
  }

  getGoods(): Good[] | null{
    let goods = this.storageService.getItem('cart');

    if (!goods) {
      return null;
    }

    return goods as Good[];
  }

}

