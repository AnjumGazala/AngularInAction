import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText : string = ''

  UpdateSearchText(event : any){
    this.searchText = event.target.value

  }
 @Output()
  searchTextChanged : EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.searchText)
  }

  // refrence variable example
  setSearchText(inputEl : HTMLInputElement){
    this.searchText =inputEl.value;
    this.searchTextChanged.emit(this.searchText)
    //this.searchText = event.target.value
  }
}
