import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
@Component({
  selector: 'app-user-header',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.scss'
})
export class UserHeaderComponent {
selectedCountry = 'IN';
getSelectedCountry() {
  return this.countries.find(c => c.code === this.selectedCountry);
}
countries = [
  {
    name: 'India',
    code: 'IN',
    flag: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg'
  },
  {
    name: 'United States',
    code: 'US',
    flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg'
  }
]
}
