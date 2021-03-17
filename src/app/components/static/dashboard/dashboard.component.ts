import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { usersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  rolSuper: string;

  idUser: number;

  optionsMenu: boolean;

  user: User;
  constructor(
    private userService: usersService
  ) {
    this.rolSuper = "ROLE_EMPLEADO";
    this.optionsMenu = false;
  }

  ngOnInit(): void {
    this.idUser = +localStorage.getItem("token_id");
    this.userService.getDataUsers(this.idUser).subscribe(
      dataUser => {
        this.user = dataUser;
        this.setDashboard();
      }, error => {

      });
  };

  //-------------------------------------
  // Seteamos opciones del menu segun rol
  //-------------------------------------
  setDashboard() {
    this.user.roles.forEach(unRol => {
      if (unRol.rol != "ROLE_EMPLEADO" && unRol.rol != "ROLE_ADMIN") {
        this.optionsMenu = true;
      };
    });
  };

}
