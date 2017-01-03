export class Product {
    id: number;
    title: string;
    price: number;
    
    constructor(id?: number, title?: string, price?: number) {
        this.id = id && id || 0;
        this.title = title && title || '';
        this.price = price && price || 0;
    }


    showProduct() {
        console.log(this);
    }
}