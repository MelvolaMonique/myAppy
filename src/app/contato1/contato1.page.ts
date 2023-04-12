import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {RouterLink} from '@angular/router';
import { DadosService } from '../services/dados.service';
import { contatos } from '../models/contatos.model';

@Component({
  selector: 'app-contato1',
  templateUrl: './contato1.page.html',
  styleUrls: ['./contato1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class Contato1Page implements OnInit {
  contato: contatos | undefined

  constructor(public DadosService: DadosService) { }

  ngOnInit() {
    this.contato = this.DadosService.pegarDados('contato');
    console.log('Contato enviado', this.contato)
  }

}
