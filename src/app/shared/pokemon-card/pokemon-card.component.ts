import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonI } from 'src/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  constructor(private router: Router) {}

  @Input()
  pokemon: PokemonI;

  async ngOnInit() {}

  onClickShowDetails(id: number) {
    this.router.navigate([`tabs/home/${id}`]);
  }
}
