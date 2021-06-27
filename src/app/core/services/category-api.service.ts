import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "@env";
import { Category } from "../../shared/models/category.model";

@Injectable({
  providedIn: "root"
})
export class CategoryApiService {
  baseUrl = environment.baseApi;

  constructor(
    private http: HttpClient
  ) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/categories`);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/categories/${id}`);
  }
}
