import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommonSerivice } from 'src/app/services/common.service';

@Component({
  selector: 'app-authentications',
  templateUrl: './authentications.component.html',
  styleUrls: ['./authentications.component.scss']
})
export class AuthenticationsComponent implements OnInit {

  formLogin: FormGroup;
  error: string;

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router,
    private commonService: CommonSerivice
  ) {
    this.error = null;
  }

  ngOnInit(): void {
    this.initForm();
  }

  //-----------------------------------------------
  // Inicializamos formulario para inputs del login
  //-----------------------------------------------
  initForm(): void {
    this.formLogin = this.fb.group({
      nameuser: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  };

  //---------------------
  // Logueamos al usuario
  //---------------------
  loguin() {
    if (!this.formLogin.invalid) {
      this.auth.login(this.formLogin).subscribe(
        logueado => {
          localStorage.setItem("token", logueado.token);
          this.commonService.setRole(this.userRol(logueado.authorities));
          this.router.navigate(['/configurations']);
        }, error => {
          this.error = "Usuarios incorrecto";
        });
    }
  };

  userRol(roles: any[]): string {
    let rol: string;

    switch (roles.length) {
      case 1:
        rol = "ROLE_EMPLEADO";
        break;
      case 2:
        rol = "ROLE_ADMIN";
        break;
      case 3:
        rol = "ROLE_SUPER_ADMIN";
        break
    };

    return rol;
  }


}
