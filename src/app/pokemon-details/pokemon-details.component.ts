import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {}

  async ngOnInit() {
    const params = await lastValueFrom(this.activatedRoute.params);
    console.log(params);
  }

  onClickBackButton() {
    this.location.back();
  }
}
