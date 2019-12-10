import { Component, OnInit } from '@angular/core';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pag-error',
  templateUrl: './pag-error.component.html',
  styleUrls: ['./pag-error.component.css']
})
export class PagErrorComponent implements OnInit {

  triste = faFrown;

  constructor() { }

  ngOnInit() {
  }

}
