import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proj-img',
  templateUrl: './proj-img.component.html',
  styleUrls: ['./proj-img.component.css']
})
export class ProjImgComponent {
  @Input()
  primeiraImg:string = ''

  @Input()
  segundaImg:string = ''

  @Input()
  terceiraImg:string = ''

  @Input()
  quartaImg:string = ''

  @Input()
  quintaImg:string = ''

  @Input()
  sextaImg:string = ''
}
