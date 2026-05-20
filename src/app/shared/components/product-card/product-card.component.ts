import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product: any;
  onImageError(event: any) {
    event.target.src = 'assets/images/no-data.jpg';
  }
  getOriginalPrice(price: number, discount: number): number {
  return (price * 100) / (100 - discount);
}
}
