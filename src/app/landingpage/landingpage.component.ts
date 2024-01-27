import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
constructor(private router: Router){}

navigateToHomePage(): void{
  this.router.navigate(['/homepage']);
}

}
