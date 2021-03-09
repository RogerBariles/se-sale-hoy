import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lugar } from 'src/app/models/lugares.model';
import { LugaresService } from 'src/app/services/lugares.service';

@Component({
  selector: 'app-abm-lugares',
  templateUrl: './abm-lugares.component.html',
  styleUrls: ['./abm-lugares.component.scss']
})
export class AbmLugaresComponent implements OnInit {

  @ViewChild('modalPlace', { static: false }) modalPlace: ElementRef;
  @ViewChild('modalPlaceClosed', { static: false }) modalPlaceClosed: ElementRef

  list_place: Lugar[];
  accion: string;

  formPlace: FormGroup;
  formPlaceUpdate: FormGroup

  constructor(
    private fb: FormBuilder,
    private lugaresService: LugaresService
  ) {
    this.list_place = [];
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

    this.loadPlace();
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
  validUpdateData(): boolean {
    return this.formPlaceUpdate.value != this.formPlace.value ? false : true;
  }

  //-----------------------
  // Actualizamos lugar
  //-----------------------
  updatePlace(): void {
    this.lugaresService.updatePlace(this.formPlaceUpdate.value).subscribe(
      placesUpdated => {
        this.modalPlaceClosed.nativeElement.click();
        this.list_place = placesUpdated;
      }, error => {

      }
    )
  };

}
