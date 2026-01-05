import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonToggle } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { ConfigService } from 'src/app/servicios/config.service';

@Component({
  selector: 'app-configuraciones',
  templateUrl: './configuraciones.page.html',
  styleUrls: ['./configuraciones.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonToggle],
})
export class ConfiguracionesPage implements OnInit {
  private configService = inject(ConfigService);

  canDeleteFromHome = false;

  constructor() { 
    addIcons({ arrowBackOutline });
  }

  ngOnInit() {
    const config = this.configService.getCanDeleteFromHome();
    this.canDeleteFromHome = config.canDeleteFromHome;
  }

  saveConfiguracion() {
    this.configService.setCanDeleteFromHome(this.canDeleteFromHome);
  }

}
