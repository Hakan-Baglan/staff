import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() icon: string = '';
  @Input() status: string = '';
  @Input() outlineStatus = false;
  @Input() sizeStatus:any= '';


  constructor() { }

  ngOnInit(): void {
  }

}
