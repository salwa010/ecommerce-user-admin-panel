import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnInit,
} from '@angular/core';
import Typed from 'typed.js';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HttpClientModule, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('typedElement') typedElement!: ElementRef;

  products: any[] = [];
  categories: string[] = [];
  bestSellingProducts: any[] = [];
  limitedTimeDeals: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://dummyjson.com/products').subscribe((data) => {
      console.log('Fetched products:', data);
      this.products = data.products;
      this.categories = [
        ...new Set(this.products.map((item) => item.category)),
      ];

      console.log(this.categories);
      this.bestSellingProducts = this.products
        .sort((a: any, b: any) => b.rating - a.rating)
        .slice(0, 5);

      console.log(this.bestSellingProducts);
this.limitedTimeDeals = [...this.products]
        .sort((a, b) =>
          b.discountPercentage - a.discountPercentage
        )
        .slice(0, 5);

      console.log(this.limitedTimeDeals);
      
    });

  }

  ngAfterViewInit() {
    new Typed(this.typedElement.nativeElement, {
      strings: ['Up to 50% Off |', 'Free Shipping |', 'Grab Your Deal Now |'],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
      showCursor: true,
    });
  }
  getCategoryImage(category: string): string {
    const product = this.products.find(
      (item: any) => item.category === category,
    );

    return product ? product.thumbnail : '';
  }
  testimonials = [
  {
    name: 'Emily R',
    image: 'assets/images/user1.svg',
    review: '“Fast delivery and fantastic quality! The customer support team was quick to resolve my query.”',
        rating: 4.5

  },
  {
    name: 'John D',
    image: 'assets/images/user2.svg',
    review: 'The support team was quick to resolve my query.',
    rating: 4.0
  },
  {
    name: 'Ahmed M',
    image: 'assets/images/user1.svg',
    review: '“Fast delivery and fantastic quality! The customer support team was quick to resolve my query.”',
    rating: 5.0
  }
];

topTestimonials = [...this.testimonials, ...this.testimonials];

bottomTestimonials = [...this.testimonials, ...this.testimonials];
}
