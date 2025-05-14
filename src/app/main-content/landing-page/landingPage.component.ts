import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector : 'app-landingPage',
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    template:` 
    <section>
        <app-navbar class="font-raleway"></app-navbar>
        <h1 class="font-raleway">SAKURA RAMEN</h1>
        <h2 class="font-raleway">BEST RAMEN IN TOWN</h2>
    </section>
    `,
    styleUrls:['./landingPage.component.scss']
})
export class LandingPageComponent {

}