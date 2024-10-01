import { Component, OnInit } from '@angular/core';
import { IonFab, IonFabButton, IonIcon, AlertController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { NavController } from '@ionic/angular'; // Mantener solo aquí
import { CargaEmocionPage } from '../carga-emocion/carga-emocion.page';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  standalone: true,
  imports: [IonFab, IonFabButton, IonIcon], // Retiramos NavController y CargaEmocionPage de aquí
})
export class AddComponent implements OnInit {

  constructor(private navCtrl: NavController) {
    addIcons({ add });
  }

  ngOnInit() {}

  irACargaEmocion() {
    this.navCtrl.navigateForward('/carga-emocion');
  }
}
