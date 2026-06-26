import { Component, inject, Inject } from '@angular/core';
import { BoasVindasComponent } from "../../components/boas-vindas/boas-vindas.component";

@Component({
  selector: 'app-home',
  imports: [BoasVindasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
