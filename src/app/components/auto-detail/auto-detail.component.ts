import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutoService } from '../../services/auto.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-auto-detail',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './auto-detail.component.html',
  styleUrl: './auto-detail.component.css'
})
export class AutoDetailComponent implements OnInit {
  auto: any;

  constructor(private route: ActivatedRoute, private autoService: AutoService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.autoService.getAutos().subscribe(autos => {
      this.auto = autos.find((a: any) => a.id === id);
    });
  }
}
