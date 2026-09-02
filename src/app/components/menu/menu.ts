import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  
  mostrarElemento = false;

  mostrar(): void {
    this.mostrarElemento = !this.mostrarElemento;
  }

  constructor(private router: Router) {}


  logout(): void {
    this.router.navigate(['/login']);
  }
}
