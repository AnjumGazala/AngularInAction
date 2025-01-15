import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText : string = 'Mens wear'

  UpdateSearchText(event : any){
    this.searchText = event.target.value

  }
}
