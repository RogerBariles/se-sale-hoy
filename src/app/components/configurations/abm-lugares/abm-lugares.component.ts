import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BranchOffice } from 'src/app/models/branch_office.model';
import { Lugar } from 'src/app/models/lugares.model';
import { BranchOfficeService } from 'src/app/services/branchOffice.service';
import { LugaresService } from 'src/app/services/lugares.service';

@Component({
  selector: 'app-abm-lugares',
  templateUrl: './abm-lugares.component.html',
  styleUrls: ['./abm-lugares.component.scss']
})
export class AbmLugaresComponent implements OnInit {

  @ViewChild('modalPlace', { static: false }) modalPlace: ElementRef;
  @ViewChild('modalPlaceClosed', { static: false }) modalPlaceClosed: ElementRef
  @ViewChild('modalPlaceBranchOffice', { static: false }) modalPlaceBranchOffice: ElementRef;
  @ViewChild('modalPlaceBranchOfficeClosed', { static: false }) modalPlaceBranchOfficeClosed: ElementRef

  list_place: Lugar[];
  list_branchOffice: BranchOffice[];

  accion: string;
  place: Lugar;

  idUser: number;

  addBranchOfficeValid: boolean;

  formPlace: FormGroup;
  formPlaceUpdate: FormGroup;
  formBranchOffice: FormGroup;

  constructor(
    private fb: FormBuilder,
    private lugaresService: LugaresService,
    private branchOfficeService: BranchOfficeService
  ) {
    this.list_place = [];
    this.list_branchOffice = [];
    this.addBranchOfficeValid = false;
  }

  ngOnInit(): void {
    this.formPlace = this.fb.group({
      id: [''],
      nombre: ['', [Validators.required]]
    });

    this.formPlaceUpdate = this.fb.group({
      id: [''],
      nombre: ['', [Validators.required]]
    });

    this.formBranchOffice = this.fb.group({
      direccion: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      orden: [''],
      lugarId: ['', [Validators.required]]
    });
    this.loadPlace();
    this.idUser = +localStorage.getItem('token_id');
  }

  //----------------------------
  // Traemos eventos disponibles
  //----------------------------
  loadPlace(): void {
    this.lugaresService.getListLugares().subscribe(
      lugares => {
        this.list_place = lugares;
      }, error => {

      }
    )
  };

  //----------------
  // Editamos lugar 
  //----------------
  openPlace(anPlace: Lugar): void {
    this.accion = "Editar";
    this.formPlaceUpdate.setValue({
      id: anPlace.id,
      nombre: anPlace.nombre
    });
    this.formPlace.setValue({
      id: anPlace.id,
      nombre: anPlace.nombre
    });

    this.modalPlace.nativeElement.click();
  };

  //----------------------------------------------------
  // Validamos que al menos algun campo se haya cambiado
  //----------------------------------------------------
  validUpdateData(formEdit: FormGroup): boolean {
    return formEdit.value != this.formPlace.value ? false : true;
  }

  //-----------------------
  // Actualizamos lugar
  //-----------------------
  updatePlace(): void {
    if (this.accion == 'Nuevo') {
      this.lugaresService.createLugar(this.formPlaceUpdate.value).subscribe(
        placesUpdated => {
          this.modalPlaceClosed.nativeElement.click();
          this.list_place = placesUpdated;
        }, error => {

        });

    } else {
      this.lugaresService.updatePlace(this.formPlaceUpdate.value).subscribe(
        placesUpdated => {
          this.modalPlaceClosed.nativeElement.click();
          this.list_place = placesUpdated;
        }, error => {

        });
    }
  };

  //--------------------------
  // Agregamos nuevo lugar
  //--------------------------
  addPlace(): void {
    this.formPlaceUpdate.setValue({
      id: '',
      nombre: ''
    });

    this.accion = 'Nuevo';
    this.modalPlace.nativeElement.click();
  };

  //-------------------------
  // add enable branch office 
  //--------------------------
  addBranchOfficeValidators(): void {
    this.addBranchOfficeValid = !this.addBranchOfficeValid;
  };

  //-------------------------
  // add enable branch office 
  //--------------------------
  getListBranchOffice(idPlace): void {
    this.lugaresService.getListBranchOfficeByIdPlace(this.idUser, idPlace).subscribe(
      list_resp => {
        this.list_branchOffice = list_resp;
      }, error => {

      })
  };
  //--------------------------
  // Edit branch office
  //--------------------------
  openBranchOffice(anPlace: Lugar): void {
    this.place = anPlace;
    this.formBranchOffice.get('lugarId').setValue(anPlace.id);

    this.getListBranchOffice(anPlace.id);

    this.modalPlaceBranchOffice.nativeElement.click();
  };

  //--------------------------
  // Add new branch office
  //--------------------------
  addBranchOffice(): void {
    this.addBranchOfficeValid = false;
    this.lugaresService.addBranchOfficeByIdPlace(this.formBranchOffice.value, this.place).subscribe(
      resp => {
      }, error => {
        this.getListBranchOffice(this.place.id);
        this.formBranchOffice.reset();
      });
  };
}
