import { Component, EventEmitter, Output, inject  } from '@angular/core';
import { MouseRequestDTO } from '../models/mouse-requestDTO.interface';
import { MouseService } from '../service/mouse.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() submit = new EventEmitter<any>();
  public object: MouseRequestDTO = {
    model: null!,
    dpi: null!
  }
  private readonly api = inject(MouseService);
  public onSubmit(event: any):any{
    this.api.post(this.object).subscribe({
      next: () => {
        console.log('Dodano');
        this.submit.emit();
      },
      error: (err) => console.error(err)
    })
  }
}
