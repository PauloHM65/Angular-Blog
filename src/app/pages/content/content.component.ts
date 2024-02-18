import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = 'https://repository-images.githubusercontent.com/24195339/d4194dc2-d880-43f7-960c-ea30e05c6531'
  contentTittle: string = 'Nova logo Angular'
  contentDescription: string = 'Equipe de design da Google compartilha nova logo do framework Angular'
  private id: string | null = "0"

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => this.id = value.get("id"))
      


    this.setValuesToComponent(this.id);
    
  }
  setValuesToComponent(id: string| null): void {
    const result = dataFake.filter(article => article.id.toString() == id)[0]

    this.contentTittle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photo
  }

}
