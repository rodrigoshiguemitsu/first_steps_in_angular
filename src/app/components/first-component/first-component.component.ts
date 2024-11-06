import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Rodrigo';
  age: number = 30;
  job = 'Programador';
  hobbies = ["Correr", "Jogar", "Estudar"];

  car={
    name: "Polo",
    year: 2019,
  };
  
  carros = {
    nome:["Polo", "gol", "Civic"],
    ano: ["2020", "2021", "2023"]
  }
  ;
  
  


  constructor(){}
  ngOnInit(): void {}
  
}
