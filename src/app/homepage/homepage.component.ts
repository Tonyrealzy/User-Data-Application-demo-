import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'app-view-list',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
    imports: [CommonModule, RouterLink, CardComponent, FormsModule]
})
export class HomepageComponent implements OnInit {
  users: User[] = [];
  searchUsers: User[] = [];
  searchTerm: string ='';

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

  onSearchChange(searchTerm: string): void {
    // console.log('Search term', searchTerm);
    
    searchTerm = searchTerm.toLowerCase();
    // console.log('Lowercased search term:', searchTerm);

    this.searchUsers = this.users.filter(user => 
      (user && user.name && user.name.toLowerCase().includes(searchTerm)) || 
      (user && user.nickname && user.nickname.toLowerCase().includes(searchTerm))
    );
    // console.log('Search results:', this.searchUsers);
    
  }
}
