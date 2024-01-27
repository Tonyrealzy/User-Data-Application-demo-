import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.css'
})
export class ViewDetailsComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      const userId = +params['id'];
      this.userService.getUserById(userId).subscribe(
        (data) =>{
          this.user = data;
        },
        (error) =>{
          console.error('Error fetching user details: ', error);
        }
      )
    });
  }

}
