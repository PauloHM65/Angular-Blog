import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  
  photoCover:string = "https://designconceitual.com.br/wp-content/uploads/2023/12/Angular-novo-logotipo-2023-1000x600.jpg"

  @Input()
  cardTitle:string = ""

  cardDescription:string = "A equipe do Angular não está medindo esforços para trazer grandes novidades a cada versão lançada. Foi assim nas versões 14, 15 e 16. Agora com a versão 17 não é diferente. O Angular progrediu muito em pouquíssimo tempo."
  

  constructor() { }

  ngOnInit(): void {
  }

}
