import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DashboardWebApp-design';
  sidebarStatus:boolean=false;
  @Input() clickStatus:boolean = false;
}
