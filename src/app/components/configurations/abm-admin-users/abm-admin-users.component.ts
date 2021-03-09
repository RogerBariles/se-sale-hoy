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
  @ViewChild('modalUserClosed', { static: false }) modalUserClosed: ElementRef;
  listUser: User[];
  roles: any[];
  accion: string;
  dataUser: User;

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
      id: [''],
      nameUser: ['', Validators.required],
      nombre: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      email: ['', [Validators.required]],
      ROLE_ADMIN: [false],
      ROLE_EMPLEADO: [false],
      ROLE_SUPER_ADMIN: [false]
    });
  }

  //--------------------
  // Abrimos modal
  //--------------------
  openUsers(user: User) {
    this.accion = 'Editar';
    this.setRoles(user);

    this.formUser.get("id").setValue(user.id);
    this.formUser.get("nameUser").setValue(user.nameUser);
    this.formUser.get("nombre").setValue(user.nombre);
    this.formUser.get("email").setValue(user.email);
    this.formUser.get("numero").setValue(user.numero);
    this.formUser.get("ROLE_EMPLEADO").setValue(this.roles[0]);
    this.formUser.get("ROLE_ADMIN").setValue(this.roles[1]);
    this.formUser.get("ROLE_SUPER_ADMIN").setValue(this.roles[2]);

    this.dataUser = this.formUser.value;


    this.modalUser.nativeElement.click();
  };

  //-------
  // Roles
  //-------
  setRoles(user: User) {
    let auxRoles = [];
    this.roles = [];
    let roles = {
      ROLE_EMPLEADO: false,
      ROLE_ADMIN: false,
      ROLE_SUPER_ADMIN: false
    }

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
    this.roles.push(roles.ROLE_EMPLEADO);
    this.roles.push(roles.ROLE_ADMIN);
    this.roles.push(roles.ROLE_SUPER_ADMIN);
  };

  //------------------------------
  // Actualizamos datos
  //------------------------------
  guardarDatos(): void {
    let roles: any[] = [];
    if (this.formUser.get("ROLE_EMPLEADO").value) {
      roles.push("ROLE_EMPLEADO");
    }

    if (this.formUser.get("ROLE_ADMIN").value) {
      roles.push("ROLE_ADMIN");
    }

    if (this.formUser.get("ROLE_SUPER_ADMIN").value) {
      roles.push("ROLE_SUPER_ADMIN");
    }


    const USER_UPDATE = {
      email: this.formUser.get("email").value,
      id: this.formUser.get("id").value,
      nameUser: this.formUser.get("nameUser").value,
      nombre: this.formUser.get("nombre").value,
      numero: this.formUser.get("numero").value,
      roles: roles
    }
    this.usersService.updateUsers(USER_UPDATE).subscribe(
      list_users => {
        this.listUser = list_users;
        this.modalUserClosed.nativeElement.click();
      }, error => {

      });
  }

  //---------------------------------------
  // Validamos que los datos hayan cambiado
  //---------------------------------------
  validUpdateData(): boolean {
    if (this.dataUser != this.formUser.value) {
      return false;
    } else {
      return true;
    }
  }


}
