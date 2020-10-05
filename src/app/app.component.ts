import { Component , OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { APIService} from './API.service';
import { Product } from '../types/product';


@Component({
  selector: "app",
  templateUrl: "app.component.html",
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit{

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


