import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  number = 0;
  multiplo = 0;
  resultado = 0;
  text = 'hello World!';
  date = new Date;
  pessoa = {
    nome: 'Lúcio',
    idade: '52',
    profissao: 'Aluno'
  };
  nomes = ['Lúcio']
  constructor(private upperCasePipe: UpperCasePipe) { }

  ngOnInit(): void {
    this.text = this.upperCasePipe.transform(this.text)
  }

  Calcular(){
    this.resultado = this.number * this.multiplo;
  }

  add(text: string){
    this.nomes.push(text)
  }

}
