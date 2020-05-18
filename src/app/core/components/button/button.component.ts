import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  

  @Input() label: string;
  @Input() color: string;
  @Output() onClick = new EventEmitter<MouseEvent>();

  onClickButton(event) {
    this.onClick.emit(event);
    console.log(event);
  }

}
