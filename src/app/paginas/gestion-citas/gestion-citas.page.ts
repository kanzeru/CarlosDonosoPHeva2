import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonIcon, IonList, IonItemSliding, IonItemOptions, IonItemOption, AlertController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, addOutline, trash } from 'ionicons/icons';
import { CitaService } from 'src/app/servicios/cita.service'; 
import { Cita } from 'src/app/modelo/cita.modelo';

@Component({
  selector: 'app-gestion-citas',
  standalone: true,
  imports: [ CommonModule, RouterModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonIcon, IonList, IonItemSliding, IonItemOptions, IonItemOption ],
  templateUrl: './gestion-citas.page.html',
  styleUrls: ['./gestion-citas.page.scss']
})
export class GestionPage implements OnInit {
  private alertController = inject(AlertController);
  private citaService = inject(CitaService);

  citas: Cita[] = [];
  newTexto = '';
  newAutor = '';

  constructor() {
    addIcons({ arrowBackOutline, addOutline, trash });
  }

  ngOnInit() {
    this.loadCitas();
  }

  loadCitas() {
    this.citas = this.citaService.getAllCitas();
  }

  addCita() {
    if (!this.newTexto.trim() || !this.newAutor.trim()) {
      this.mostrarError('Por favor completa todos los campos');
      return;
    }

    if (this.newTexto.length < 5) {
      this.mostrarError('La frase debe tener al menos 5 caracteres');
      return;
    }

    if (this.newAutor.length < 2) {
      this.mostrarError('El autor debe tener al menos 2 caracteres');
      return;
    }

    if (this.citaService.existeCita(this.newTexto, this.newAutor)) {
      this.mostrarError('Esta cita ya existe en la lista');
      return;
    }

    this.citaService.addCita(this.newTexto, this.newAutor);
    this.loadCitas();
    this.newTexto = '';
    this.newAutor = '';
  }

  async deleteCita(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de eliminar esta cita?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          handler: () => {
            this.citaService.deleteCita(id);
            this.loadCitas();
          }
        }
      ]
    });

    await alert.present();
  }

  private async mostrarError(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
}