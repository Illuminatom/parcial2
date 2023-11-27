import { Component, OnInit } from '@angular/core';
import { Conferencias } from '../conferencias';
import { ConferenciasService } from '../conferencias.service';

@Component({
  selector: 'app-conferencias-list',
  templateUrl: './conferencias-list.component.html',
  styleUrls: ['./conferencias-list.component.css']
})
export class ConferenciasListComponent implements OnInit {

  selected: Boolean = false;
  conferencias: Array<Conferencias> = [];
  upcoming: Array<Conferencias> = [];
  currentDate: Date = new Date();
  selectedConferencia!: Conferencias;
  constructor(private conferenciasService: ConferenciasService) { }

  onSelected(conferencias: Conferencias): void {
    this.selected = true;
    this.selectedConferencia = conferencias;
  }

  getConferencias(): void {
    this.conferenciasService.getConferencias().subscribe(conferencias => {
      this.conferencias = conferencias;
    });
  }


  ngOnInit() {
    this.getConferencias();
  }
}