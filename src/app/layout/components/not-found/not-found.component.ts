import { Component } from '@angular/core';
import { images } from 'src/app/global/constants';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  readonly images = images;
}
