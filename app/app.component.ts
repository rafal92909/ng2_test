import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
//import {Product} from './product';
import {Article} from './article';
import {ArticleComponent} from './article.component';


@Component({
    selector: 'articles',
    directives: [ArticleComponent], // komponent zewnetrzny (AppComponent) moze kozystac z komponentu wewnetrzenego ArticleComponent
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    // days: string[];
    // abc: string;    
    // constructor() {
    //     this.days = ['Pon', 'Wt', 'Srd', 'Czw', 'Pt', 'Sb', 'Nd'];

    //     this.abc = this.showName();
    // }
    // showName() : string {
    //     return "ABC";
    // }
    articles: Article[];
    constructor() {
        this.articles = ARTICLES;
    }
    

} 

// var product = new Product(123, "tytul", 69.69);
// product.showProduct();

var ARTICLES: Article[] = [
    new Article('Semantic UI', 'http://semantic-ui.com', 'Semantic empowers designers and developers by creating a shared vocabulary for UI.', 'http://semantic-ui.com/images/logo.png', 3),
    new Article('Angular 2', 'https://angular.io/', 'Headers may be oriented to give the hierarchy of a section in the context of the page.', 'resources/images/ang.png'), 
    new Article('Co to jest Bower?', 'https://github.com/bower/bower', 'A header provides a short summary of content.', 'http://bower.io/img/bower-logo.png')
]