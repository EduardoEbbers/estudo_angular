import { Model } from './repository.model';
import { Component } from "@angular/core";

@Component({
    selector: "app",
    templateUrl: "./template.html"
})
export class ProductComponent {
    model: Model = new Model();

    getClassMap(key: number): Object {
        let product = this.model.getProduct(key);
        return {
            "text-center bg-danger": product.name == "Kayak",
            "bg-info": product.price < 50
        };
    }

    getStyleMap(key: number): Object {
        let product = this.model.getProduct(key);
        return {
            fontSize: "30px",
            "margin.px": 100,
            color: product.price < 50 ? "red": "green"
        };
    }
}