import { Model } from './repository.model';
import { Component } from "@angular/core";

@Component({
    selector: "app",
    templateUrl: "./template.html"
})
export class ProductComponent {
    model: Model = new Model();

    fontSizeComUnidades: string = "30px";
    fontSizeSemUnidades: string = "30";

    getClass(): string {
        return this.model.getProducts().length == 5 ? "bg-info" : "bg-warning";
    }

    getClasses(key: number): string {
        let product = this.model.getProduct(key);
        return "p-2 " + (product.price < 50 ? "bg-danger" : "bg-warning");
    }
}