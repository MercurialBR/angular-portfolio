import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tecnologias-icons',
  templateUrl: './tecnologias-icons.component.html',
  styleUrls: ['./tecnologias-icons.component.css']
})
export class TecnologiasIconsComponent {

  @Input()
  icon1:string = ""
  @Input()
  icon2:string = ""
  @Input()
  icon3:string = ""
  @Input()
  icon4:string = ""
  @Input()
  icon5:string = ""
  @Input()
  icon6:string = ""
  @Input()
  icon7:string = ""
  @Input()
  icon8:string = ""
}
