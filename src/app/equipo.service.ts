import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EquipoService {

  equipo:any[] = [

    {
      nombre:'Ignacio Perez Gil',
      especialidad:'HTML CSS ',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero atque enim veritatis excepturi impedit facere eius a, quos, omnis itaque aliquam fugiat recusandae error aperiam ratione. Assumenda at saepe eveniet!Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      foto:"assets/messi.jpg"
    },
    {
      nombre:'Maria Angelica Lorenz',
      especialidad:'JQUERY CSS JAVASCRIPT ',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero atque enim veritatis excepturi impedit facere eius a, quos, omnis itaque aliquam fugiat recusandae error aperiam ratione. Assumenda at saepe eveniet!Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      foto:"assets/bombon.jpg"
    },
    {
      nombre:'Alberto Fernandez',
      especialidad:'JQUERY CSS JAVASCRIPT ANGULAR NODE FIREBASE',
      descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero atque enim veritatis excepturi impedit facere eius a, quos, omnis itaque aliquam fugiat recusandae error aperiam ratione. Assumenda at saepe eveniet!Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero atque enim veritatis excepturi impedit facere eius a, quos, omnis itaque aliquam fugiat recusandae error aperiam ratione. Assumenda at saepe eveniet!',
      foto:"assets/viejo-meme.jpg"
    }

  ]

  constructor() {}

   obtenerEquipo(){
    return this.equipo;
   }
}
