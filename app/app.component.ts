import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Product} from './product';

@Component({
    selector: 'articles',
    templateUrl: 'app/template.html'
})

export class AppComponent {
    days: string[];
    abc: string;    
    constructor() {
        this.days = ['Pon', 'Wt', 'Srd', 'Czw', 'Pt', 'Sb', 'Nd'];

        this.abc = this.showName();
    }
    showName() : string {
        return "ABC";
    }
    
} 

var product = new Product(123, "tytul", 69.69);
product.showProduct();
