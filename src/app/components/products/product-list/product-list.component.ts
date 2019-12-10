import { Component, OnInit } from '@angular/core';

// nos conectamos con el servicio; requerimos el servicio traemos la clase ProductService
import { ProductService } from '../../../services/product.service'
// requerimos clase
import { Product } from 'src/app/models/product';
import { NgForm } from '@angular/forms';

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';


@Component
({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit 
{
  trash = faTrashAlt;
  edit = faEdit;
  close = faWindowClose;
  limpiar = faSyncAlt;
  
  productList: Product[]; // arreglo de tipo producto, atributo de la clase

  constructor
  (
    private productService: ProductService,
    
  ){}

  // traemos la clase y la importamos, creando una variable private del tipo de la clase. esto es lo que traeremos desde firebase, todos los datos de las entidades
  p: number = 1;

  ngOnInit() 
  { //  aqui esta el metodo que se encarga de traernos todos los datos ..   desde aqui nos trae los datos desde firebase
    this.productService.getProducts().snapshotChanges().subscribe(item =>
      // snapshotChanges trae los cambios dentro de la base de datos
      // subscribe escuchamos los cambios que suceden en la base de datos
      // items los propios datos, podemos recorrerlos y modificarlos
      // necesitamos un arreglo para esto
      {
        this.productList = []; //inicializar
        // como el arreglo esta en blanco ahora lo comienzo a llenar recorriendo 
        // recorro cada item y para cada elemento de este item
        item.forEach(element =>
          {
            let abc = element.payload.toJSON();// selecciono cada campo y al contenido del elemento lo convierto en Json
            abc["$key"] = element.key; // almaceno id del elemento
            this.productList.push(abc as Product); // lo asignamos a la lista
              // arreglo ya lleno.. a listarlo
          })
      }
    ) 
  }

  onSubmit(productForm: NgForm)
  {
    if(productForm.value.$key == null){
      this.productService.insertProduct(productForm.value);      
    }else{
       this.productService.updateProduct(productForm.value);
    }
  }

  onEdit(product: Product)
  {
    this.productService.selectedProduct = Object.assign({},product);// mantiene los elementos de la base de datos en el modal
  }

  onDelete($key: string)
  { 
    this.productService.deleteProduct($key);
  }

}
