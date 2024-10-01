import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router para la navegación
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonBackButton, 
  IonIcon, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonCard, 
  IonCardContent
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { calendarNumberOutline } from 'ionicons/icons';

@Component({
  selector: 'app-carga-emocion',
  templateUrl: './carga-emocion.page.html',
  styleUrls: ['./carga-emocion.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonBackButton, 
    IonIcon, 
    IonGrid, 
    IonRow, 
    IonCol, 
    IonCard, 
    IonCardContent, 
    CommonModule, 
    FormsModule
  ]
})
export class CargaEmocionPage implements OnInit {
  fechaHoy: string = '';
  emociones: { texto: string, icon: string, seleccionada: boolean }[] = [];
  emocionSeleccionada: any = null; // Almacena la emoción seleccionada

  constructor(private router: Router) { 
    addIcons({ calendarNumberOutline });
  }

  ngOnInit() {
    this.fechaHoy = this.obtenerFechaHoy();
    this.emociones = [
      { texto: 'Feliz', icon: '😊', seleccionada: false },
      { texto: 'Triste', icon: '😢', seleccionada: false },
      { texto: 'Enojado', icon: '😡', seleccionada: false }, 
      { texto: 'Sorprendido', icon: '😲', seleccionada: false },
      { texto: 'Neutral', icon: '😐', seleccionada: false },
      { texto: 'Ansioso', icon: '😰', seleccionada: false },
      { texto: 'Emocionado', icon: '😁', seleccionada: false }, 
      { texto: 'Cansado', icon: '😴', seleccionada: false },
      { texto: 'Relajado', icon: '😌', seleccionada: false }, 
      { texto: 'Frustrado', icon: '😩', seleccionada: false },
      { texto: 'Agradecido', icon: '🙏', seleccionada: false },
      { texto: 'Confundido', icon: '😕', seleccionada: false },
    ];
  }

  obtenerFechaHoy(): string {
    const opciones: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('es-ES', opciones);
  }

  seleccionarEmocion(emocion: any) {
    this.emociones.forEach(e => e.seleccionada = false); // Deseleccionar todas
    emocion.seleccionada = true; // Seleccionar la emoción actual
    this.emocionSeleccionada = emocion; // Guardar la emoción seleccionada
  }

  guardarEmocion() {
    if (this.emocionSeleccionada) {
      // Guardar la emoción seleccionada y la fecha de hoy
      const emocionGuardada = {
        emocion: this.emocionSeleccionada,
        fecha: this.fechaHoy
      };
      
      // Almacena la emoción y fecha en localStorage (o podrías usar un servicio para manejar los datos)
      localStorage.setItem('emocionGuardada', JSON.stringify(emocionGuardada));
      
      // Navegar de vuelta a la página home
      this.router.navigate(['/home']);
    }
  }
}