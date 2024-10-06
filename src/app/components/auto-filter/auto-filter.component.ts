import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AutoService } from '../../services/auto.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-auto-filter',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './auto-filter.component.html',
  styleUrl: './auto-filter.component.css'
})
export class AutoFilterComponent implements OnInit {
  autos: any[] = [];
  filteredAutos: any[] = [];
  filterForm: FormGroup;

  constructor(private autoService: AutoService, private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      minPrice: [''],
      maxPrice: ['']
    });
  }

  ngOnInit(): void {
    this.autoService.getAutos().subscribe((data: any) => {
      this.autos = data;
      this.filteredAutos = data;
    });
  }

  onFilter() {
    const minPrice = this.filterForm.value.minPrice;
    const maxPrice = this.filterForm.value.maxPrice;
    this.filteredAutos = this.autos.filter(auto => auto.price >= minPrice && auto.price <= maxPrice);
  }

}
