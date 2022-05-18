import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-biding';

  valor: number = 5;

  mudarValor(){
    this.valor++
  }

  deleteCycle: boolean = false

  destroy(){
    this.deleteCycle = true
  }
}
