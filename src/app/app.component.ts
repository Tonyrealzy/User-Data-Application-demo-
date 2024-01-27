import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, NavBarComponent]
})
export class AppComponent {
  title = 'view-gallery';

  constructor(){}

}
