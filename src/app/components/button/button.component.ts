import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() icon: Boolean = false;
  @Input() secondary: Boolean;
  @Input() disabled: Boolean = false;
  @Input() accent: Boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
