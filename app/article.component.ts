import {Component} from 'angular2/core';
import {Article} from './article';

@Component({
    selector: 'single-article',
    inputs: ['article'], // za jej pomoca wstrzykujemy dane z ngFor wykonywanego w app.component.html do szablony article.component.html
    host: {
        class: 'singlearticle' // przypisze do kazdego pojedynczego elementu single-article klase
    },
    templateUrl: 'app/article.component.html'
})

export class ArticleComponent {
    article: Article;

    votePlus() : boolean {
        this.article.votePlus();
        return false;
    }
    
    voteMinus() : boolean {
        this.article.voteMinus();
        return false;
    }
}