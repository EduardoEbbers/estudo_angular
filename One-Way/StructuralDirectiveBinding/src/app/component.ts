import { Product } from './product.model';
import { Model } from './repository.model';
import { ApplicationRef, Component } from "@angular/core";

@Component({
    selector: "app",
    templateUrl: "./template.html"
})
export class ProductComponent {
    model: Model = new Model();

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

    getClass(): string {
        return this.model.getProducts().length == 5 ? "bg-info" : "bg-warning";
    }

    getClasses(key: number): string {
        let product = this.model.getProduct(key);
        return "p-2 " + (product.price < 50 ? "bg-danger" : "bg-warning");
    }
}