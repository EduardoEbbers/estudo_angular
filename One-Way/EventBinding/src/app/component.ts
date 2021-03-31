import { Product } from './product.model';
import { Model } from './repository.model';
import { Component } from "@angular/core";

@Component({
    selector: "app",
    templateUrl: "./template.html"
})
export class ProductComponent {
    model: Model = new Model();
    
    selectedProduct: Product;

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }
}