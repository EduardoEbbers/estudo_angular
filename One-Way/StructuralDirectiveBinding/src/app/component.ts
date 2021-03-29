import { Product } from './product.model';
import { Model } from './repository.model';
import { ApplicationRef, Component } from "@angular/core";

@Component({
    selector: "app",
    templateUrl: "./template.html"
})
export class ProductComponent {
    model: Model = new Model();

    targetName: string = "Kayak";

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;
    }
    
    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }

    getClassesByPosition(position: number): string {
        let product = this.getProductByPosition(position);
        return "p-2 " + (product.price < 50 ? "bg-danger" : "bg-success");
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProductCount(): number {
        return this.getProducts().length;
    }

    getKey(index: number, product: Product) {
        return product.id;
    }
}