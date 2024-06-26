import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { MouseResponseDTO } from '../models/mouse-responseDTO.interface';

@Component({
  selector: '[app-mouse-row]',
  templateUrl: './mouse-row.component.html',
  styleUrl: './mouse-row.component.css'
})
export class MouseRowComponent {
  @Input('app-mouse-row') mouse!: MouseResponseDTO;
  @Output() delete = new EventEmitter<number>;
  public onUsunClicked():any{
    this.delete.emit(this.mouse.mouseId);
  }
}

