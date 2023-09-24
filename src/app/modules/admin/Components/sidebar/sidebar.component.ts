import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

declare var openNav: () => void;
declare var closeNav: () => void;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  CallopenNav(){
    openNav();
  }

  CallcloseNav(){
    closeNav();
  }

  constructor(private auth: AuthService) { }

  ngOnInit(): void {}
  logout(): void {
    this.auth.logout();
  }
}
