import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { usersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-abm-admin-users',
  templateUrl: './abm-admin-users.component.html',
  styleUrls: ['./abm-admin-users.component.scss']
})
export class AbmAdminUsersComponent implements OnInit {

  @ViewChild('modalUser', { static: false }) modalUser: ElementRef;
  listUser: User[];
  roles: any;
  accion: string;

  formUser: FormGroup;

  constructor(
    private usersService: usersService,
    private fb: FormBuilder,
    private renderer: Renderer2
  ) {
    this.roles = [];

  }

  ngOnInit(): void {
    this.initForm();

    // obtenemos lista de usuarios
    this.usersService.getUsersList().subscribe(
      listUsers => {
        this.listUser = listUsers;
      }, error => {

      });
  };

  //------------------------
  //Inicializamos formulario
  //------------------------
  initForm() {
    this.formUser = this.fb.group({
      nameUser: ['', Validators.required],
      nombre: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      email: ['', [Validators.required]],
      roles: [[], [Validators.required]]
    });
  }

  //--------------------
  // Abrimos modal
  //--------------------
  openUsers(user: User) {
    this.accion = 'Editar';
    let auxRoles = [];
    let roles = {
      ROLE_EMPLEADO: false,
      ROLE_ADMIN: false,
      ROLE_SUPER_ADMIN: false
    }

    this.formUser.get("nameUser").setValue(user.nameUser);
    this.formUser.get("nombre").setValue(user.nombre);
    this.formUser.get("email").setValue(user.email);
    this.formUser.get("numero").setValue(user.numero);

    user.roles.forEach(unRol => {
      auxRoles.push(unRol.rol);

      switch (unRol.rol) {
        case 'ROLE_EMPLEADO':
          roles.ROLE_EMPLEADO = true;
          break;
        case 'ROLE_ADMIN':
          roles.ROLE_ADMIN = true;
          break;
        case 'ROLE_SUPER_ADMIN':
          roles.ROLE_SUPER_ADMIN = true;
          break;
      };
    })
    this.roles = roles;
    this.formUser.get("roles").setValue(auxRoles);

    this.modalUser.nativeElement.click();
  };



}
