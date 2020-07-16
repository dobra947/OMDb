import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../../interfaces/film";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() list: Film[];
  @Input() baseUrl: string = '/';


  constructor() {
  }

  ngOnInit() {
  }

}
