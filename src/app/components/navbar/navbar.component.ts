import { Component, OnInit, OnChanges, Input,  SimpleChanges } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { User } from '../../user';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  picture: string;
  nickname: string;
  profile: any;
  sidebar = false;


  constructor(private auth: AuthService) {
    auth.handleAuthentication();
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

  isUserLoggedIn() {
    return this.auth.isLoggedInCache();
  }

  public showSidebar() {
    this.sidebar = !this.sidebar;
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(res => {
      this.profile = <User>res;
    });
  }

}
