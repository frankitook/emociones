import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true, 
  imports: [
    CommonModule,
    IonicModule,
    AddComponent
  ]
})
export class HomePage implements OnInit {
  emocionGuardada: any = null;
  emocionSeleccionada: string = ''; // Variable para almacenar la emoción seleccionada

  constructor() {}

  ngOnInit() {
    const emocionData = localStorage.getItem('emocionGuardada');
    if (emocionData) {
      this.emocionGuardada = JSON.parse(emocionData);
    }
  }

  // Método para seleccionar la emoción
  seleccionarEmocion(emocion: string) {
    this.emocionSeleccionada = emocion;
  }

  // Método para guardar la emoción
  guardarEmocion() {
    if (this.emocionSeleccionada) {
      const hoy = new Date();
      const fechaHoy = hoy.toISOString().split('T')[0]; // Formato YYYY-MM-DD
      const emocionData = {
        emocion: this.emocionSeleccionada,
        fecha: fechaHoy
      };

      // Almacena en localStorage
      localStorage.setItem('emocionGuardada', JSON.stringify(emocionData));
      
      
    }
  }
}