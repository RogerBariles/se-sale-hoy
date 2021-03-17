import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserPlaceBranchOffice } from 'src/app/models/user_place_branchOffice.model';
import { UserPlaceBranchOfficeService } from '../../../services/userPlaceBranchOffice.service';

@Component({
  selector: 'app-mis-sucursales',
  templateUrl: './mis-sucursales.component.html',
  styleUrls: ['./mis-sucursales.component.scss']
})
export class MisSucursalesComponent implements OnInit {

  idUserLogueado: number;

  formPlace: FormGroup;

  listPlaceBranchOffice: UserPlaceBranchOffice[];

  constructor(
    private fb: FormBuilder,
    private userPlaceBranchOfficeService: UserPlaceBranchOfficeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //INICIALIZAMOS FORMULARIO
    this.formPlace = this.fb.group({
      id: [''],
      nombre: ['', [Validators.required]]
    });

    this.idUserLogueado = +localStorage.getItem("token_id");
    this.getDataByUser();
  }

  //---------------------------------------
  // OBTENEMOS DATOS DE LUGARES DEL USUARIO
  //---------------------------------------
  getDataByUser(): void {
    this.userPlaceBranchOfficeService.getListPlaceBranchOfficeByIdUser(this.idUserLogueado).subscribe(
      listPlaceBranchOffice => {
        this.listPlaceBranchOffice = listPlaceBranchOffice;
      }, error => {

      });
  };

  //--------------------------------------------------------
  // ABRIMOS PARA VISUALIZAR LA CONFIGURACION DE LA SUCURSAL
  //--------------------------------------------------------
  openBranchOffice(idBranchOffice): void {
    this.router.navigate(['configurations/sucursales', idBranchOffice]);
  };



}
