import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contatos-icons',
  templateUrl: './contatos-icons.component.html',
  styleUrls: ['./contatos-icons.component.css']
})
export class ContatosIconsComponent {

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
}
