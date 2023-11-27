import { Component, Input, OnInit } from '@angular/core';
import { Conferencias } from '../conferencias';

@Component({
  selector: 'app-conferencias-detail',
  templateUrl: './conferencias-detail.component.html',
  styleUrls: ['./conferencias-detail.component.css']
})
export class ConferenciasDetailComponent implements OnInit {

  @Input() confereciaDetail!: Conferencias;

  constructor() { }

  ngOnInit() {
  }

}
