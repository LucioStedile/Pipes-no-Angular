import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Lúcio Stedile';
  imageUrl = 'http://picsum.photos/300/300';
  imageDesc ='essa é uma imagem';
  buttonText = 'Clique aqui';
  textRed = true;
  bgColor = 'green';
  fonteSize = '20px';
  textInput = '';
  number = 0;
  destroy = false;

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome(){
    return this.text;
  }

  clicou(){
    this.text = 'Lúcio Gentil';
    console.log('clicou aqui');
  }
  clicou_2(value: any){
    console.log('clicou aqui',value);
  }

  clicouNoFilho(text: any){
    console.log(text);
  }

  incremento(){
    this.number++;
  }

  destroiComponent(){
    this.destroy = true;
  }
}
