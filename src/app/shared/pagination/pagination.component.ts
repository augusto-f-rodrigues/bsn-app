import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonListResponseI } from 'src/interfaces/pokemonListResponse';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  itemsPerPage: number = 8;
  @Output() offsetChange = new EventEmitter();
  
  @Input() currentPage: number = 0;
  @Input() items: PokemonListResponseI = {
    count: 0,
    next: `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${this.itemsPerPage}`,
    previous: 'null',
    results: [],
  };


  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.emitOffset()
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.emitOffset()
    }
  }

  get totalPages() {
    return Math.ceil(this.items.count / this.itemsPerPage);
  }

  get offset() {
    return this.currentPage * this.itemsPerPage;
  }

  private emitOffset() {
    this.offsetChange.emit(this.offset.toString());
  }
}
