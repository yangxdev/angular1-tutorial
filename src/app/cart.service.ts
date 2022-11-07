import { HttpClient } from "@angular/common/http";
import { Product } from "./products";
import { Injectable } from "@angular/core";
import { stringify } from "querystring";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor(private http: HttpClient) {}
}
