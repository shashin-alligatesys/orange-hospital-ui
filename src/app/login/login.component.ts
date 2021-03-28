import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
   roles: string ;

  constructor(
    private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    private _router: Router,
    ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      if(this.tokenStorage.getRole() =='ROLE_ADMIN'){
        this.isLoggedIn = true;
      this._router.navigate(['home']);
      }else{
        this.isLoggedIn = true;
        this._router.navigate(['user-board']);
      }
    }

  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;

        // this.reloadPage();
        // this.roles = this.tokenStorage.getUser().roles;
        // console.log("this.roles",this.roles);
            
        this.reloadPage();
        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );

    
  }

  reloadPage(): void {
    window.location.reload();
  }

}
