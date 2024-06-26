import { Component } from '@angular/core';
import { MouseResponseDTO } from '../models/mouse-responseDTO.interface';
import { MouseService } from '../service/mouse.service';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrl: './mouse.component.css'
})
export class MouseComponent {
  public mouse: MouseResponseDTO[] = [];
  public czyTabela: boolean = true;
  constructor(private service: MouseService){
    this.getData();
    console.log(this.mouse);
  }
  private getData():any{
    this.service.get().subscribe({
      next: (res) => {
        this.mouse=res;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  public deleteMouse(id: number): any {
    this.service.delete(id).subscribe({
      next: () => {
        this.getData();
      },
      error: (err) => {
        console.log(err);
      }

    })
  }
  public onSubmit():any{
    this.czyTabela=true;
    this.getData();
  }
  public onDataStyleChange(): any {
    this.czyTabela = !this.czyTabela;
  }

}
