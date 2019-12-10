import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})

export class NavegacionComponent implements OnInit{

  avatar = faUserCircle;

  constructor() { }

  ngOnInit() 
  {  // jQuery
    jQuery("#menu-toggle").click(function(e){
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  

}
