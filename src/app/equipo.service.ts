import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EquipoService {

  equipo:any[] = [

    {
      nombre:'Leonel Messi',
      especialidad:'Front End',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero atque enim veritatis excepturi impedit facere eius a, quos, omnis itaque aliquam fugiat recusandae error aperiam ratione. Assumenda at saepe eveniet!Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      foto:"assets/messi.jpg"
    },
    {
      nombre:'Angelica Lorenz',
      especialidad:'Back End',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero atque enim veritatis excepturi impedit facere eius a, quos, omnis itaque aliquam fugiat recusandae error aperiam ratione. Assumenda at saepe eveniet!Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      foto:"assets/bombon.jpg"
    },
    {
      nombre:'Alberto Fernandez',
      especialidad:'Full Stack',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero atque enim veritatis excepturi impedit facere eius a, quos, omnis itaque aliquam fugiat recusandae error aperiam ratione. Assumenda at saepe eveniet!Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero atque enim veritatis excepturi impedit facere eius a, quos, omnis itaque aliquam fugiat recusandae error aperiam ratione. Assumenda at saepe eveniet!',
      foto:"assets/viejo-meme.jpg"
    }

  ]

  constructor() {}

   obtenerEquipo(){
    return this.equipo;
   }
}
