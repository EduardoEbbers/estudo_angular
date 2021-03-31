import { Product } from './product.model';
import { Model } from './repository.model';
import { Component } from "@angular/core";

@Component({
    selector: "app",
    templateUrl: "./template.html"
})
export class ProductComponent {
    model: Model = new Model();
    
    selectedProduct: string;

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    getSelected(product: Product): boolean {
        return product.name == this.selectedProduct;
    }
}