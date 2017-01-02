import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';

@Component({
    selector: 'articles',
    templateUrl: 'app/template.html'
})

export class AppComponent {
    days: string[];
    constructor() {
        this.days = ['Pon', 'Wt', 'Srd', 'Czw', 'Pt', 'Sb', 'Nd2'];
    }
}