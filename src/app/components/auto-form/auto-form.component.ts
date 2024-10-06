import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AutoService } from '../../services/auto.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-auto-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './auto-form.component.html',
  styleUrl: './auto-form.component.css'
})
export class AutoFormComponent implements OnInit {
  auto: any = {
    nombre: '',
    marca: '',
    modelo: '',
    anio: '',
    precio: 0, 
    duenos: [] 
  };
  isEdit: boolean = false;

  constructor(private autoService: AutoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true; // Cambia el estado a editar
      this.autoService.getAutoById(+id).subscribe(data => {
        this.auto = data; // Carga los datos del auto
      }, error => {
        console.error('Error al cargar el auto:', error);
        // Maneja el error adecuadamente (por ejemplo, redirigiendo o mostrando un mensaje)
      });
    }
  }

  saveAuto() {
    if (this.isEdit) {
      // Asegúrate de que 'this.auto.id' tenga un valor válido
      this.autoService.updateAuto(this.auto).subscribe(() => {
        this.router.navigate(['/productos']); // Navegar a la lista de autos
      }, error => {
        console.error('Error al actualizar el auto:', error);
        // Maneja el error adecuadamente
      });
    } else {
      this.autoService.addAuto(this.auto).subscribe(() => {
        this.router.navigate(['/productos']);
      }, error => {
        console.error('Error al agregar el auto:', error);
        // Maneja el error adecuadamente
      });
    }
  }

  deleteAuto() {
    this.autoService.deleteAuto(this.auto.id).subscribe(() => {
      this.router.navigate(['/productos']);
    });
  }
}