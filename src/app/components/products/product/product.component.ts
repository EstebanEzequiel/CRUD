import { Component, OnInit } from '@angular/core';

//servicio
import { ProductService } from '../../../services/product.service'
import { NgForm } from '@angular/forms';

// Product Class
import { Product } from 'src/app/models/product';

// font-awesome
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

@Component
({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit 
{

  agregar = faPlusCircle;
  limpiar = faSyncAlt;
  
  constructor(private productService: ProductService) {}

  ngOnInit() 
  {
    this.productService.getProducts();
    this.resetForm();
  }

  onSubmit(productForm: NgForm)
  {
    this.productService.insertProduct(productForm.value)
    this.resetForm(productForm);
  }

  resetForm(productForm?: NgForm)
  {
    if(productForm != null)
      productForm.reset();
      this.productService.selectedProduct = new Product();
  }
}
