import { Component, Input } from '@angular/core';

@Component({
  selector: 'circle-cell',
  templateUrl: 'circle-cell.html'
})
export class CircleCell {
  @Input() name: String;
  
  constructor() { }
}