import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonList, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonIcon, IonBadge } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trash, personOutline, alertCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.scss'],
  standalone: true,
  imports: [ CommonModule, IonList, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonIcon, IonBadge ],
})
export class ListCitasComponent {
  @Input() citas: any[] = [];
  @Output() delete = new EventEmitter<number>();

  constructor() {
    addIcons({personOutline,trash,alertCircleOutline});
  }

  onDelete(id: number): void {
    this.delete.emit(id);
  }

}
