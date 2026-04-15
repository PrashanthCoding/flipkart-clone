import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchText: string = '';

  setSearch(text: string) {
    this.searchText = text.toLowerCase();
  }

  getSearch() {
    return this.searchText;
  }
}
