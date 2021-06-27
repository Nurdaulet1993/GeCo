import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Good } from "../../shared/models/good.model";
import { environment } from "@env";

@Injectable({
  providedIn: "root"
})
export class GoodsApiService {
  baseUrl = environment.baseApi;

  constructor(
    private http: HttpClient
  ) {}

  getGoods(): Observable<Good[]> {
    return this.http.get<Good[]>(`${this.baseUrl}/goods`)
  }

  getGoodById(id: number): Observable<Good> {
    return this.http.get<Good>(`${this.baseUrl}/goods/${id}`);
  }
}
