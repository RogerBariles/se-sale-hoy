import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

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
    private router: Router
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

          this.router.navigate(['/configurations']);
        }, error => {
          this.error = "Usuarios incorrecto";
        });
    }
  }


}
