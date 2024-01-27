import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
    selector: 'app-landingpage',
    standalone: true,
    templateUrl: './landingpage.component.html',
    styleUrl: './landingpage.component.css',
    imports: [RouterLink, NavBarComponent]
})
export class LandingpageComponent {
constructor(private router: Router){}

navigateToHomePage(): void{
  this.router.navigate(['/homepage']);
}

}
