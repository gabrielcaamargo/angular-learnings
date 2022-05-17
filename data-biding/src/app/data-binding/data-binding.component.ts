import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  InterpolationTitle:string = 'Interpolation'
  PropertyBindingTitle:string = 'Property Binding'
  url:string = 'http://loiane.com';
  cursoAngular:boolean = true;
  urlImagem:string = 'http://lorempixel.com.br/400/200/'
  valorAtual: string = ''
  valorSalvo: string = ''
  isMouseOver: boolean = false

  getValor(){
    return 1
  }

  getCurtirCurso(){
    return true
  }

  botaoClicado(){
    alert('funfo')
  }


  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor: string){
    this.valorSalvo = valor
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver
  }


  constructor() { }

  ngOnInit(): void {
  }

}
