import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StorageService {

  setItem(name: string, value: any): void {
    localStorage.setItem(name, JSON.stringify(value));
  }

  getItem(name: string) {
    const value = localStorage.getItem(name);

    if (!value) {
      return null;
    }

    return JSON.parse(value);
  }
}
