import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  currentUser$: Observable<User>;

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/members')
    },
    error => {
      console.log(error);
    })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/')
  }
}