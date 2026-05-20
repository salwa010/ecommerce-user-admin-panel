import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserFooterComponent } from '../user-footer/user-footer.component';
import { UserHeaderComponent } from '../user-header/user-header.component';

@Component({
  selector: 'app-user-layout',
  imports: [RouterOutlet, UserFooterComponent, UserHeaderComponent],
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent {

}
