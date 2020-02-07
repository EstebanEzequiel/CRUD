import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';

//firebase
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2'
import { environment} from '../environments/environment';

import { NavegacionComponent } from './navegacion/navegacion.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PagErrorComponent } from './pag-error/pag-error.component';

//servicios
import { ProductService } from './services/product.service'

//componentes
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductComponent } from './components/products/product/product.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { HistoriaComponent } from './historia/historia.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { ConozcaMasComponent } from './conozca-mas/conozca-mas.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    InicioComponent,
    NosotrosComponent,
    ContactoComponent,
    PagErrorComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    PiePaginaComponent,
    HistoriaComponent,
    ObjetivosComponent,
    ConozcaMasComponent,
    EncabezadoComponent
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [ ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
