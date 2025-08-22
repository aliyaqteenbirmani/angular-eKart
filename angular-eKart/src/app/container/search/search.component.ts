import { Component, EventEmitter,Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText: string = '';

  // To pass data from one component to another, we pass data from search component to parent component using an event emitter.
  // @Output() decorator is used to create an event emitter. Then from parent component we transfer data to child component using @Input decorator.
  
  // 1. Create an event handler for the search input
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  // 2. raise that event when the search text changes using emit method
  // Parent component will listen to this event and update the search text in the

  @ViewChild('searchInput') searchInputEl: ElementRef;
  // Template Reference Variable
  updateSearchText()
  {
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChanged.emit(this.searchText);

    console.log(`Search text updated: ${this.searchText}`);

  }

  
}
