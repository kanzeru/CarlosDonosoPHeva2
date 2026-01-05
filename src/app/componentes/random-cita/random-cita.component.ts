import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-random-cita',
  templateUrl: './random-cita.component.html',
  styleUrls: ['./random-cita.component.scss'],
  standalone: true,
  imports: [ CommonModule, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonButton, IonIcon ],
})
export class RandomCitaComponent {
  @Input() texto: string = '';
  @Input() autor: string = '';
  @Input() showDeleteButton: boolean = false;
  @Output() deleteCita = new EventEmitter<void>();

  constructor() { 
    addIcons({trashOutline});
  }

  onDeleteCita(): void {
    this.deleteCita.emit();
  }

}
