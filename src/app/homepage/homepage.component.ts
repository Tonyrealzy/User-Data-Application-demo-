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
  activeFilters: string[] = []; // Array to store active filters
  isDropdownOpen: boolean = false;

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
    searchTerm = searchTerm.toLowerCase();

    this.searchUsers = this.users.filter(user => 
      (user && user.name && user.name.toLowerCase().includes(searchTerm)) || 
      (user && user.nickname && user.nickname.toLowerCase().includes(searchTerm))
    );
    // console.log('Search results:', this.searchUsers);
  }

  filterUser(user: User, searchTerm: string): boolean {
    if (this.activeFilters.length === 0) {
      // If no filters are active, include all users
      return (
        user.name.toLowerCase().includes(searchTerm) ||
        user.nickname.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm)
      );
    } else {
      // If filters are active, check against active filters
      return (this.activeFilters.some(filter =>
        (user as any)[filter]?.toLowerCase().includes(searchTerm)
      ));
    }
  }

  toggleFilter(filter: string): void {
    // Toggle the filter on/off
    const index = this.activeFilters.indexOf(filter);
    if (index !== -1) {
      this.activeFilters.splice(index, 1); // Remove filter if it exists
    } else {
      this.activeFilters.push(filter); // Add filter if it doesn't exist
    }

    // Trigger search with the updated filters
    this.onSearchChange(this.searchTerm);

    // Implement your filter logic here
    console.log(`Filter by ${filter}`);
    
    // Close the dropdown after selecting an option
    this.isDropdownOpen = false;
  }


  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

}
