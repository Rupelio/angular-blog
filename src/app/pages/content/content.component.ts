import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/datafake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  photoImage:string = "https://s4.static.brasilescola.uol.com.br/img/2019/09/panda.jpg";
  @Input()
  contentTitle:string = "";
  @Input()
  contentDescription:string = "Olá Mundo";
  private id:string | null = "0" 

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
        this.id = value.get("id")
      )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string|null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescription = result.description
    this.photoImage = result.photo
  }

}
