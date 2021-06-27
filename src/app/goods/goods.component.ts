import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {GoodsApiService} from "./services/goods-api.service";
import {CategoryApiService} from "@core";
import {CartService} from "../core/services/cart.service";
import {BehaviorSubject, combineLatest} from "rxjs";
import {map} from "rxjs/operators";
import {Good} from "../shared/models/good.model";


@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodsComponent implements OnInit {
  categories$ = this.categoryApiService.getCategories();

  private categorySelected = new BehaviorSubject<number>(0);
  categorySelectedAction$ = this.categorySelected.asObservable();

  goods$ = combineLatest([
    this.goodsApiService.getGoods(),
    this.categorySelectedAction$
  ])
    .pipe(
      map(([goods, category]) => {
        if (category !== 0) {
          return goods.filter(good => category ? good.category === category : true)
        }

        return goods;
      })
    )

  constructor(
    private goodsApiService: GoodsApiService,
    private categoryApiService: CategoryApiService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.addToCartAction$.subscribe(console.log);
  }

  onCategorySelect(categoryId: number): void {
    this.categorySelected.next(categoryId);
  }

  onSelect(event: Good) {
    console.log(event);
    this.cartService.setGood(event);
  }
}
