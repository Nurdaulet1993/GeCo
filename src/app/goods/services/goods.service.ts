import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Good } from "../../shared/models/good.model";
import { environment } from "@env";
import { Category } from "../../shared/models/category.model";
import { GoodsApiService } from "./goods-api.service";


@Injectable({
  providedIn: "root"
})
export class GoodsService {

}
