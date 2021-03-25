import { Product } from './product.model';
import { DataSource } from './datasource.model';
export class Model {
    private dataSource: DataSource;
    private products: Product[];
    private location = (p: Product, id: number) => p.id == id;

    constructor() {
        this.dataSource = new DataSource();
        this.products = new Array<Product>();

        this.dataSource.getData().forEach(product => this.products.push(product));
    }

    // retorna a variavel products que é um Array<Product>
    getProducts(): Product[] {
        return this.products;
    }

    // retorna um produto através to metodo find() que retorna o primeiro valor do array em que o predicado seja true
    getProduct(id: number): Product {
        return this.products.find(p => this.location(p, id));
    }

    // salva o produto, se o id for 0 ou indefinido, com ID gerado pela funcao generatedID do qual atribui ao product.id;
    // ou atualiza o produto, se o produto ja tiver id, procurando o index pela funcao findIndex que retorna o index do produto em que o predicado seja true  
    saveProduct(product: Product) {
        if(product.id == 0 || product.id == undefined) {
            product.id = this.generateID();
            this.products.push(product);
        } else {
            let index = this.products.findIndex(p => this.location(p, product.id));
            this.products.splice(index, 1, product);
        }   
    }

    // deleta o produto, procurando o index do produto em que o predicado for true, tendo como condicional para deletar o index > -1
    deleteProduct(id: number) {
        let index = this.products.findIndex(p => this.location(p, id));
        if(index > -1) { 
            this.products.splice(index, 1);
        }
    }

    // gera ID caso o id do produto seja igual a 0 ou indefinido
    private generateID(): number {
        let candidate: number = 100;
        while(this.getProduct(candidate) != null) {
            candidate++;
        }
        return candidate;
    }

    swapProduct() {
        let p = this.products.shift();
        this.products.push(new Product(p.id, p.name, p.category, p.price));
    }
}