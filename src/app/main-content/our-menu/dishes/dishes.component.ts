import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dishes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dishes.component.html',
  styleUrl: './dishes.component.scss'
})
export class DishesComponent {

  dishBlocks = [
  {
    description: 'Tonkotsu Ramen',
    imageUrl: 'assets/img/3_section_our_menu/Png/R1.png'
  },
  {
    description: 'Spicy Miso Ramen',
    imageUrl: 'assets/img/3_section_our_menu/Png/R2.png'
  },
  {
    description: 'Shio Ramen',
    imageUrl: 'assets/img/3_section_our_menu/Png/R3.png'
  }
];
}

