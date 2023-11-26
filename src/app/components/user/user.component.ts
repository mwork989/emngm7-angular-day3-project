import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {


  //variable declaration area usaually arranged in alphabetical order
  // basic primitive types
  public title:string;
  public subTitle:string;
  public count :number;
  public isValid:boolean;
  public message:null;
  public name:string;

  public selectedFruit:string;

  public result:number;


  // non primitive data type
  public date:Date;

  constructor() {
     this.title = '';
     this.subTitle = '';
     this.name='';
     this.count= 0;
     this.isValid = false;
     this.date = new Date();
     this.message = null;
     this.result = 0;
  
    this.selectedFruit = '';
  }

  public ngOnInit(): void {
    this.title = 'User Component Title section';
    this.subTitle = 'Data binding';
    this.count = 1;
    this.isValid = true;
    this.result =this.generateRandomNumber();
  }

  public generateRandomNumber():number{
   return Math.random();
  }

  public incrementCount(){
  this.count= this.count+1;
  }

  public decrementCount(){
    this.count= this.count-1;
  }

  public sendMessage(value:string){
      console.log(value)
  } 

  public onFruitSelection(event:any):void{
    this.selectedFruit = event.target.value
    //console.log(event)
  }
}
