import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  name="Ali";
  addToCart:any = 0;
  products = ["IPhone 14 Pro Max","Samsung Galaxy S23 Ultra", "Google Pixel 9 Pro"];
            

           
}
