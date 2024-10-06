import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AutoDetailComponent } from "../../components/auto-detail/auto-detail.component";
import { AutoFilterComponent } from "../../components/auto-filter/auto-filter.component";
import { AutoFormComponent } from "../../components/auto-form/auto-form.component";
import { AutoListComponent } from "../../components/auto-list/auto-list.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AutoDetailComponent, AutoFilterComponent, AutoFormComponent, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
