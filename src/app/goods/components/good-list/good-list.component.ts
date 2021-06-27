import {ChangeDetectionStrategy, Component, Input, OnInit, Output} from '@angular/core';
import {Good} from "../../../shared/models/good.model";
import { EventEmitter } from "@angular/core";


@Component({
  selector: 'app-good-list',
  templateUrl: './good-list.component.html',
  styleUrls: ['./good-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodListComponent implements OnInit {
  @Output() onGoodSelect = new EventEmitter<Good>()
  @Input() goods!: Good[];

  constructor() { }

  ngOnInit(): void {}

  onSelect(good: Good) {
    this.onGoodSelect.emit(good);
  }
}
