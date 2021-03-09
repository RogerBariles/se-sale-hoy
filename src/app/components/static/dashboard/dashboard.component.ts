import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { CommonSerivice } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  rolSuper: string;
  optionsMenu: boolean;

  constructor(
    private commonService: CommonSerivice
  ) {
    this.rolSuper = "ROLE_EMPLEADO";
    this.optionsMenu = false;
  }

  ngOnInit(): void {
    this.rolSuper = this.commonService.getRole();

    this.setDashboard();
  };

  //-------------------------------------
  // Seteamos opciones del menu segun rol
  //-------------------------------------
  setDashboard() {
    if (this.rolSuper != "ROLE_EMPLEADO" && this.rolSuper != "ROLE_ADMIN") {
      this.optionsMenu = true;
    }
  }

}
