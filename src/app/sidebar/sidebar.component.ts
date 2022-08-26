import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  @Input() sidebarStatus:boolean = false;

@Output() homeclicked = new EventEmitter<boolean>();
clickStatus:boolean = false;
  

  constructor() { }

  ngOnInit(): void {
  }

  display(){
    console.log('hello');
    this.clickStatus=!this.clickStatus;
    this.homeclicked.emit(this.clickStatus);
    
  }

}
