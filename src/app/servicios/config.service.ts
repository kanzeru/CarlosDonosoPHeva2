import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private configuracion = {
    canDeleteFromHome: false
  };

  getCanDeleteFromHome() {
    return { ...this.configuracion };
  }

  setCanDeleteFromHome(value: boolean): void {
    this.configuracion.canDeleteFromHome = value;
  }
  
}
