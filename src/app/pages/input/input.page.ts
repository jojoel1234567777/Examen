import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string = 'Anthony cedeño';
  usuario = {
    email: '',
    telefono: '',
    fechaNacimiento: null
  };

  @ViewChild('fechaNacimientoCtrl', { static: false })
fechaNacimientoCtrl: any;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formulario: NgForm) {
    console.log('submit');
    console.log(this.usuario);
    console.log(formulario);
  }

}
