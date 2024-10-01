import { Component, OnInit } from '@angular/core';
import { IonTabs, IonTab, IonHeader, IonToolbar, IonTitle, IonIcon, IonContent, IonTabButton, IonTabBar, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendarNumberOutline, analyticsOutline, settingsOutline, clipboardOutline } from 'ionicons/icons';
import { AjustesPage } from '../ajustes/ajustes.page';
import { CalendarioPage } from '../calendario/calendario.page';
import { EstadisticasPage } from '../estadisticas/estadisticas.page';
import { RouterModule } from '@angular/router';  // Importa RouterModule

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  standalone: true,
  imports: [
    IonTabs, 
    IonTab, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonIcon, 
    IonContent, 
    IonTabButton, 
    IonLabel, 
    IonTabBar,
    AjustesPage, 
    CalendarioPage, 
    EstadisticasPage,
    RouterModule  
  ],
})
export class TabComponent implements OnInit {
  constructor() { 
    addIcons({ calendarNumberOutline,analyticsOutline, settingsOutline, clipboardOutline });
  }

  ngOnInit() {}
}
