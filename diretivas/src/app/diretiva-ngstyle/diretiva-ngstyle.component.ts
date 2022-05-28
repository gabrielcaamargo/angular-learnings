import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-diretiva-ngstyle',
  templateUrl: './diretiva-ngstyle.component.html',
  styleUrls: ['./diretiva-ngstyle.component.css']
})
export class DiretivaNgstyleComponent implements OnInit {

  ativo: boolean = false
  tamanhoDaFonte: number = 10

  changeAttr(){
    this.ativo = !this.ativo
  }

  constructor() { }

  ngOnInit(): void {
  }


}
