import { Component, OnInit } from '@angular/core';
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'app-dinamic-tempate',
  templateUrl: './dinamic-tempate.component.html',
  styleUrls: ['./dinamic-tempate.component.scss']
})
export class DinamicTempateComponent implements OnInit {

  dinamicComponent = ButtonComponent;

  constructor() { }

  ngOnInit(): void {
  }

}
