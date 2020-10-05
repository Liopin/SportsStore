import { Component, OnInit } from "@angular/core";
import { APIService } from '../API.service';
import { Product } from '../../types/product';

@Component({
    templateUrl: "store.component.html"
})

export class StoreComponent implements OnInit{

    products: Array<Product>

    constructor(private api: APIService){}

    async ngOnInit(){
        this.api.ListProducts().then(event => {
            this.products = event.items;
        })
    }
}