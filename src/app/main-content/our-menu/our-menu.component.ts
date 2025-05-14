import { Component } from '@angular/core';
import { DishesComponent } from './dishes/dishes.component';


@Component({
  selector: 'app-our-menu',
  standalone: true,
  imports: [DishesComponent],
  templateUrl: './our-menu.component.html',
  styleUrl: './our-menu.component.scss'
})
export class OurMenuComponent {

}
