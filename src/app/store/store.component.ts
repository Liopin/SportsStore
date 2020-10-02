import { Component , OnInit} from "@angular/core";
// import { Product } from "../model/product.model";
// import { ProductRepository } from "../model/product.repository";

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { APIService} from '../API.service';
import { Product } from '../../types/product';

@Component({
    selector:"store",
    templateUrl: "store.component.html"
})

/* export class StoreComponent{
    public selectedCategory = null
    public productsPerPage = 4
    public selectedPage = 1;

    constructor(private repository: ProductRepository){}

    get products(): Product[]{
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage
        return this.repository.getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories(): string[]{
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string){
        this.selectedCategory = newCategory
    }

    changePage(newPage: number){
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number){
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }

    get pageNumbers(): number[]{
        return Array(Math.ceil(this.repository
                .getProducts(this.selectedCategory).length / this.productsPerPage))
                    .fill(0).map((x, i) => i + 1);
    }

    

} */
/** AMPLIFY */

export class StoreComponent implements OnInit{
  
    title = 'amplify-angular-app';
  
    public createForm: FormGroup;
  
    /* declare restaurants variable */
    products: Array<Product>;


    constructor(private api: APIService, private fb: FormBuilder){}
  
    async ngOnInit(){
      this.createForm = this.fb.group({
        'name':['', Validators.required],
        'description':['', Validators.required],
        'price':['', Validators.required]
      });     

       /* fetch restaurants when app loads */
        this.api.ListProducts().then(event => {
        this.products = event.items;
      });

      /* subscribe to new restaurants being created */
        this.api.OnCreateProductListener.subscribe( (event: any) => {
        const newProduct = event.value.data.onCreateProduct;
        this.products = [newProduct, ...this.products];
        });

    }

    // queryProduct(id: string) {
    //   this.api.GetProduct(id).then((product: GetProductQuery) => {
    //     this.createForm.patchValue({
    //       id: product.id,
    //       name: product.name,
    //       description: product.description,
    //       price: product.price,
    //     })
    //   });
    // }
  
  
    public onCreate(product: Product) {
      this.api.CreateProduct(product).then(event => {
        console.log('item created');
        this.createForm.reset();
      })
      .catch(e => {
        console.log('error creating product...', e);
      })
    }
  
  }