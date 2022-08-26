import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() sidebarToggled = new EventEmitter<boolean>();
  menuStatus:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  sidebarToggle() {
    console.log('');
    
    this.menuStatus=!this.menuStatus;
    this.sidebarToggled.emit(this.menuStatus);
  }

}
