import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../../../interfaces/film";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Film;
  @Input() url: string;

  constructor() {
  }

  ngOnInit() {
  }

}
