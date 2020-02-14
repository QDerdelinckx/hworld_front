import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private secService: UserService,
    private router: Router,
    private dialogService: NbDialogService
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'nickname': new FormControl(),
      'password': new FormControl()
    })
  }

  login() {
    //envoyer les datas à l'api
    let json = this.loginForm.value;
    this.secService.login(json).subscribe(
      (token) => { 
        localStorage.setItem('TOKEN', token);
        this.router.navigateByUrl('home');
      },
      (error) => {
        console.log(error);
      },
      () => {
      }
    );
  }

}
