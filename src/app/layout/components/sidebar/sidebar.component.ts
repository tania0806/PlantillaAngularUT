import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FooterComponent, RouterModule ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  routeName: string | undefined;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const activeRoute = this.router.url;
    this.routeName = activeRoute.split('/').pop();
  }
}
