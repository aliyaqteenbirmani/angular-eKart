import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  name="Ali Yaqteen";
  product = {name: 'iPhone 14 Pro Max',
            price: 1099,
            color: 'Space Black',
            discount: 8.5,
            inStock: 5,
            pImage: 'assets/images/phone.jpeg',
            description: 'The latest iPhone with advanced features and performance.'}

            getDiscountedPrice()
            {
              return this.product.price - (this.product.price * this.product.discount / 100);
            }
}
