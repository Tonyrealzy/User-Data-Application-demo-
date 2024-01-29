import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from "../homepage/homepage.component";

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
    imports: [CommonModule, RouterLink, HomepageComponent]
})
export class CardComponent implements OnInit {
  router: any;
  ngOnInit(): void {
  }
  users: User[] = [];

viewUser(userId: number) : void {
  this.router.navigate(['/viewUser', userId]);
}


}
