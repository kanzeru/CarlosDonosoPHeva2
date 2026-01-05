import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CitaService {
  private citas: any[] = [
    { id: 1, texto: 'La vida es lo que pasa mientras estás ocupado haciendo otros planes.', autor: 'John Lennon' },
    { id: 2, texto: 'Sé el cambio que quieres ver en el mundo.', autor: 'Mahatma Gandhi' },
    { id: 3, texto: 'La única forma de hacer un gran trabajo es amar lo que haces.', autor: 'Steve Jobs' }
  ];

  getRandomCita(): any {
    if (this.citas.length == 0) {
      return { id: 0, texto:'No hasy citas disponibles', autor:'' };
    }
    const randomIndex = Math.floor(Math.random() * this.citas.length);
    return this.citas[randomIndex];
  }

  getAllCitas(): any[] {
    return [...this.citas];
  }

  addCita(texto:string, autor:string): void {
    const newCita = {
      id: this.citas.length + 1,
      texto: texto.trim(),
      autor: autor.trim()
    };
    this.citas.push(newCita);
  }

  deleteCita(id: number): boolean {
    const index = this.citas.findIndex(c => c.id == id);
    if (index !== -1) {
      this.citas.splice(index, 1);
      return true;
    }
    return false;
  }

  existeCita(texto: string, autor: string): boolean {
    return this.citas.some(c => 
      c.texto.toLowerCase() == texto.toLowerCase() && 
      c.autor.toLowerCase() == autor.toLowerCase()
    );
  }
  
}
