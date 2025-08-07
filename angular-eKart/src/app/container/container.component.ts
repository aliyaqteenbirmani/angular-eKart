import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
   searchText: string = '';    
   
   setSearchText(value: string) 
   {
    // This method will be called when the search text is changed in the search component
    // It can be used to update the search text in the container component if needed
    this.searchText = value;
    console.log(`Search text in container updated: ${this.searchText}`);
    // You can also perform any additional logic here, such as filtering products based on the search text
   }
}
