import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  accessToken: any;
  user?:''
  username?: string;
  public roles: string[] = [];
  isLoggedIn = false;
  currentUser: any;
  constructor(public tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {
    
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      const currentUser = this.tokenStorageService.getUser();
      const accessToken = this.tokenStorageService.getToken();
      this.username = user.username;
    
  }
}
