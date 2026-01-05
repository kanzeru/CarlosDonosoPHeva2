import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, AlertController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { listOutline, settingsOutline, refreshOutline, trashOutline } from 'ionicons/icons';
import { CitaService } from 'src/app/servicios/cita.service';
import { ConfigService } from 'src/app/servicios/config.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, RouterModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent],
})
export class HomePage implements OnInit {
  private alertController = inject(AlertController);
  private citaService = inject(CitaService);
  private configService = inject(ConfigService);

  cita: any = {};
  showButtonDelete = false;

  constructor() {
    addIcons({ listOutline, settingsOutline, refreshOutline, trashOutline });
  }

  ngOnInit(): void {
    this.loadRandomCita();
    this.loadConfiguracion();
  }

  loadRandomCita() {
    this.cita = this.citaService.getRandomCita();
  }

  loadConfiguracion() {
    const config = this.configService.getCanDeleteFromHome();
    this.showButtonDelete = config.canDeleteFromHome;
  }

  newCita() {
    this.loadRandomCita();
  }

  async deleteCita() {
    if (!this.showButtonDelete) return;

    const alert = await this.alertController.create({
      header:'Confirmar',
      message:'¿Estas seguro de eliminar esta cita?',
      buttons: [
        {
          text:'Eliminar',
          handler: () => {
            this.citaService.deleteCita(this.cita.id);
            this.loadRandomCita();
          }
        }
      ]
    });
    await alert.present();
  }
}
