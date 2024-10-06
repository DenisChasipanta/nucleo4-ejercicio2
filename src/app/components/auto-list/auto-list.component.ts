import { Component, OnInit } from '@angular/core';
import { AutoService } from '../../services/auto.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-auto-list',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './auto-list.component.html',
  styleUrl: './auto-list.component.css'
})
export class AutoListComponent implements OnInit {
  autos: any[] = [];
  selectedAuto: any = null;
  priceRange = { min: 0, max: 100000 }; 

  constructor(private autoService: AutoService) { }

  ngOnInit(): void {
    this.loadAutos();
  }

  loadAutos() {
    this.autoService.getAutos().subscribe(data => {
      this.autos = data;
    });
  }

  deleteAuto(id: number) {
    this.autoService.deleteAuto(id).subscribe(() => {
      this.loadAutos();
    });
  }

  viewDetails(auto: any) {
    this.selectedAuto = auto; 
  }

  filterByPrice() {
    this.autoService.getAutos().subscribe(data => {
      this.autos = data.filter(auto => auto.precio >= this.priceRange.min && auto.precio <= this.priceRange.max);
    });
  }
}
