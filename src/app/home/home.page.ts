import { Component } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { DadosService} from '../services/dados.service';
import { contatos} from '../models/contatos.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,RouterModule, RouterLink],
})
export class HomePage {

  listaContatos: contatos[] = [
    {
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-94yygW2iQoT4wD5SXEt3xP7u2nkZld585Q&usqp=CAU',
      nome: 'Sans',
      email: 'sansesqueleto@gmail.com',
      id: 1
    },
    {
      foto: 'https://m.media-amazon.com/images/I/61xFztjXk4S._AC_SL1500_.jpg',
      nome: 'Sally',
      email: 'SalFisher@gmail.com',
      id: 2
    },
    {
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPSrTn6Kd9Lr-R4XJEV16195jhGoVIpLIpvdhdXW8DTRrI9lj-wnQOpMyN-XVe-jvyc5M&usqp=CAU',
      nome: 'Papyrus',
      email: 'Papyrusmagnifico@gmail.com',
      id: 3
    },
    {
      foto: 'https://pbs.twimg.com/media/E45NQMDXEAU-Z3v.jpg:large',
      nome: 'Gradient',
      email: 'GradientSans@gmail.com',
      id: 4

    },
    {
      foto: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/597a6aa6-c9ba-4b7b-86f3-bc62e8d1113a/de092k8-6a2eb408-3c34-4368-9870-4b59c36b497d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU5N2E2YWE2LWM5YmEtNGI3Yi04NmYzLWJjNjJlOGQxMTEzYVwvZGUwOTJrOC02YTJlYjQwOC0zYzM0LTQzNjgtOTg3MC00YjU5YzM2YjQ5N2QuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nA21sTXD-xHxlAmTmW5zSobKrbgHMT6-aP57lMXqXYU',
      nome: 'Golden',
      email: 'Christopher@gmail.com',
      id: 5

    }
  ];


  constructor(public dadosService: DadosService, public route: Router) {}

  exibirContato(contato: contatos){
    this.dadosService.guardarDados('contato', contato);
    this.route.navigateByUrl('/contato1')
  }


}
