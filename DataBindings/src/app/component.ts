import { Product } from './product.model';
import { Model } from './repository.model';
import { ApplicationRef, Component } from '@angular/core';

@Component({
    // selector é o nome que forma a tag <app></app>
    // templateUrl é o caminho em que esta o template.html
    selector: "app",
    templateUrl: "./template1.html"
})
export class ProductComponent {
    
    // cria o objeto Model que é o repositorio para poder acessar variaveis e/ou metodos
    model = new Model();
    targetName: string = "Kayak";

    constructor(ref: ApplicationRef) {
        (<any>window).appRef = ref;
        (<any>window).model = this.model;
    }

    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }

    /*
    getClassesByPosition(position: number): string {
        let product = this.getProductByPosition(position);
        return "p-2 " + (product.price < 50 ? "bg-info" : "bg-warning");
    }
    */

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

    /*
    fontSizeWithUnits: string = "30px";
    fontSizeWithoutUnits: string = "30";

    // retorna um string do qual se a quantidade dos produtos for true vai setar "bg-success", se for false vai setar "bg-warning"
    getClasse(): string  {
        return this.model.getProducts().length == 5 ? "bg-success" : "bg-warning";
    }

    getClasses(key: number): string {
        let product = this.model.getProduct(key);
        return "p-2 " + (product.price < 50 ? "bg-info" : "bg-warning");
    }

    getClassesMap(key: number): Object {
        let product = this.model.getProduct(key);
        return {
            "text-center bg-danger": product.name == "Kayak",
            "bg-info": product.price < 50
        };
    }

    getStylesMap(key: number) {
        let product = this.model.getProduct(key);
        return {
            fontSize: "30px",
            "margin.px": 100,
            color: product.price < 50 ? "red" : "green"
        };
    }
    */
}