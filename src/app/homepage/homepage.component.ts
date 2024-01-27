import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'app-view-list',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
    imports: [CommonModule, RouterLink, CardComponent]
})
export class HomepageComponent implements OnInit {
  users: User[] = [];

  constructor(private UserService: UserService, private router: Router){}

  ngOnInit(): void {
    this.UserService.getAllUsers().subscribe(
      data => {
    this.users = data;
  },
  (error) => {
    console.error('Error fetching users:', error);
  }
  );
}

viewUser(userId: number) : void {
  this.router.navigate(['/viewUser', userId]);
}

}
