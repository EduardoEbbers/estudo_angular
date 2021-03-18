import { Model } from './repository.model';
import { Component } from '@angular/core';

@Component({
    // selector é o nome que forma a tag <app></app>
    // templateUrl é o caminho em que esta o template.html
    selector: "app",
    templateUrl: "./template.html"
})
export class ProductComponent {
    // cria o objeto Model que é o repositorio para poder acessar variaveis e/ou metodos
    model = new Model();
}