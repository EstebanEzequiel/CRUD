import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PagErrorComponent } from './pag-error/pag-error.component';
import { ProductsComponent } from './components/products/products.component';
import { HistoriaComponent } from './historia/historia.component';
import { ObjetivosComponent } from './objetivos/objetivos.component';
import { ConozcaMasComponent } from './conozca-mas/conozca-mas.component';


const routes: Routes = 
[
  {  path:'inicio', component: InicioComponent  },
  {  path:'', component: InicioComponent  },
  {  path:'presentacion', component: NosotrosComponent  },
  {  path:'contacto', component: ContactoComponent  },
  {  path:'administrar', component: ProductsComponent  },
  {  path:'historia', component: HistoriaComponent  },
  {  path:'objetivos', component: ObjetivosComponent  },
  {  path:'conozca-mas', component: ConozcaMasComponent  },
  {  path:'**', component: PagErrorComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
