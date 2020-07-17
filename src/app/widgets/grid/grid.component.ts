import {Component, Input, OnInit} from '@angular/core';
import {Filmsearch} from "../../interfaces/filmsearch";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() list: Filmsearch[];
  @Input() callback= () => {};
  @Input() baseUrl: string = '/';


  constructor() {
  }

  ngOnInit() {
  }

}
