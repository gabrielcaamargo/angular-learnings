import { Component, OnInit, OnChanges, DoCheck, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  @Input() valorInicial: number = 0

  constructor() {
    this.log('constructor')
   }

  ngOnChanges(): void {
     this.log('ngOnChanges')
   }

  ngOnInit(): void {
    this.log('ngOnInit')
  }

  ngDoCheck(): void {
    this.log('ngDoCheck')
  }

  ngOnDestroy(): void {
    this.log('ngOnDestroy')
  }

  private log(hook: string){
    console.log(hook)
  }
}
