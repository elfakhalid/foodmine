import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cartQuantity = 0;
  constructor(private cartService: CartService) {
    this.cartService
      .getCartObservable()
      .subscribe((cart) => (this.cartQuantity = cart.totalCount));
  }

  ngOnInit(): void {}
}
