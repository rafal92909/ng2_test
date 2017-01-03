import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {NgFor} from 'angular2/common';
//import {Product} from './product';
import {Article} from './article';
import {ArticleComponent} from './article.component';
import {ArticleService} from './article.service';


@Component({
    selector: 'articles',
    directives: [ArticleComponent], // komponent zewnetrzny (AppComponent) moze kozystac z komponentu wewnetrzenego ArticleComponent
    providers: [ArticleService],
    templateUrl: 'app/app.component.html'
})

export class AppComponent implements OnInit {
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
    constructor(private _articleService: ArticleService) {        
        console.log('constructor')
    }
    
    getArticles() {
        this.articles = this._articleService.getArticles();
    }

    ngOnInit() {
        console.log('on init')
        this.getArticles()
    }

} 

// var product = new Product(123, "tytul", 69.69);
// product.showProduct();

