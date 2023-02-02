import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent {

  @Input()
  icon1:string = " "
  @Input()
  icon2:string = " "
  @Input()
  icon3:string = " "
  @Input()
  icon4:string = " "
}
