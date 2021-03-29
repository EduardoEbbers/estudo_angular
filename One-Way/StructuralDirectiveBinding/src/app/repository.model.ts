import { Product } from './product.model';
import { DataSource } from './datasource.model';

export class Model {
    private data: DataSource;
    private products: Product[];
    private locator = (p: Product, id: number) => p.id == id;
    
    constructor() {
        this.data = new DataSource();
        this.products = new Array<Product>();

        this.data.getData()
            .forEach(p => this.products.push(p));
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number): Product {
        
        return this.products.find(p => this.locator(p, id));
    }

    saveProduct(product: Product) {
        if(product.id == 0 || product.id == null) {
            product.id = this.generateID();
            this.products.push(product);
        } else {
            let index = this.products.findIndex(p => this.locator(p, product.id));
            this.products.splice(index, 1, product);
        }
    }

    deleteProduct(id: number) {
        let index = this.products.findIndex(p => this.locator(p, id));
        if(index > -1) {
            this.products.splice(index, 1);
        }
    }

    swapProduct() {
        let p = this.products.shift();
        this.products.push(new Product(p.id, p.name, p.category, p.price));
    }

    private generateID(): number {
        let candidate: number = 100;
        while(this.getProduct(candidate) != null) {
            candidate++;
        }
        return candidate;
    }
}