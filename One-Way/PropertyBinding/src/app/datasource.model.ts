import { Product } from './product.model';

export class DataSource {
    private data: Product[];

    constructor() {
        this.data = new Array<Product>(
            new Product(1, "Kayak", "Esportes Aquatico", 275),
            new Product(2, "Lifejacket", "Esportes Aquatico", 48.95),
            new Product(3, "Soccer Ball", "Futebol", 19.50),
            new Product(4, "Corner Flags", "Futebol", 34.95),
            new Product(5, "Thinking Cap", "Xadrez", 16)
        );
    }

    getData(): Product[] {
        return this.data;
    }
}