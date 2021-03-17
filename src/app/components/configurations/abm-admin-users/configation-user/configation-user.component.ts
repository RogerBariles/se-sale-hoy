import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BranchOffice } from 'src/app/models/branch_office.model';
import { Lugar } from 'src/app/models/lugares.model';
import { User } from 'src/app/models/user.model';
import { UserPlaceBranchOffice } from 'src/app/models/user_place_branchOffice.model';
import { LugaresService } from 'src/app/services/lugares.service';
import { UserPlaceBranchOfficeService } from 'src/app/services/userPlaceBranchOffice.service';
import { usersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-configation-user',
  templateUrl: './configation-user.component.html',
  styleUrls: ['./configation-user.component.scss']
})
export class ConfigationUserComponent implements OnInit {


  idUser: number;
  idUserLoguin: number;
  idPlaceSelect: number;
  idBranchOffice: number;

  user: User;

  listPlaceBranchOfficeByUser: UserPlaceBranchOffice[];
  listPlaces: Lugar[];
  listBranchOffice: BranchOffice[];

  constructor(
    private userPlaceBranchOfficeService: UserPlaceBranchOfficeService,
    private userService: usersService,
    private lugaresService: LugaresService,
    private paramsUrl: ActivatedRoute
  ) {
    this.idUser = this.paramsUrl.snapshot.params.idUser;
    this.listPlaceBranchOfficeByUser = [];
    this.idUserLoguin = +localStorage.getItem("token_id");
  }

  ngOnInit(): void {
    this.getInfoUsers();
  }

  //------------------------------------
  // TRAEMOS DATOS DEL USAURIO ELEGIDO
  //------------------------------------
  getInfoUsers(): void {
    this.userService.getDataUsers(this.idUser).subscribe(
      dataUser => {
        this.user = dataUser;
        this.getBranchOfficeList()
      }, error => {

      });
  };

  //----------------------------------------------------------------
  // TRAEMOS LA LISTA DE LUGARES Y SUCURSALES QUE TIENE ESTE USUARIO
  //----------------------------------------------------------------
  getBranchOfficeList(): void {
    this.userPlaceBranchOfficeService.getListPlaceBranchOfficeByIdUser(this.idUser).subscribe
      (resp => {
        this.idPlaceSelect = 0;
        this.idBranchOffice = 0;
        this.listPlaceBranchOfficeByUser = resp;
        this.getListPlace();
      }, error => {

      });
  };

  //----------------------------------------
  // OBTENEMOS LISTADO DE LOCALES
  //----------------------------------------
  getListPlace(): void {
    this.lugaresService.getListLugares().subscribe(
      listLugares => {
        this.listPlaces = listLugares;
      }, error => {

      });
  };

  //-------------------------------------------
  // CAPTURAMOS EL VALOR DEL LOCAL SELECCIONADO
  //-------------------------------------------
  selectPlace(event): void {
    this.idPlaceSelect = event;

    this.lugaresService.getListBranchOfficeByIdPlace(this.idUserLoguin, this.idPlaceSelect).subscribe(
      listBranchOffice => {
        this.listBranchOffice = listBranchOffice;
      }, error => {

      });
  };

  //------------------------------------------------
  // CAPTURAMOS EL VALOR DE LA SUCURSAL SELECCIONADA
  //------------------------------------------------
  selectBranchOffice(event): void {
    this.idBranchOffice = event;
  };

  //------------------------------------------------
  // ASIGNAMOS LOS DATOS SELECCIONADO AL USUARIO
  //------------------------------------------------
  asignarToUser(): void {
    let JSON_NEW = {
      userId: this.idUser,
      lugar: {
        id: this.idPlaceSelect,
      },
      sucursal: {
        id: this.idBranchOffice
      }
    };

    this.userPlaceBranchOfficeService.savePlaceBranchOfficeByUser(JSON_NEW).subscribe(
      relationSave => {
        this.getBranchOfficeList();
      }, error => {

      });
  };

}
