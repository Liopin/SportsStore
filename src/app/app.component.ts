import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { APIService } from './API.service';
import { Product } from '../types/product';

@Component({
  selector: 'app',
  template: "<store></store>",
})

export class AppComponent implements OnInit{
  title = 'amplify-angular-app';
  public createForm: FormGroup;

  constructor(private api: APIService, private fb: FormBuilder){}

  async ngOnInit(){
    this.createForm = this.fb.group({
      'name':['', Validators.required],
      'description':['', Validators.required],
      'price':['', Validators.required]
    });
  }

  public onCreat(product: Product){
    this.api.CreateProduct(product).then(event => {
      console.log('item created');
      this.createForm.reset();
    })
    .catch(e => {
      console.log('error creating product...', e);
    })
  }

}


