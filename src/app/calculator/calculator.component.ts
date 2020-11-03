import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  text1: number;
  text2: number;
  total: any = 0

  constructor() { }

  ngOnInit(): void {
  }

  add() {

    this.total = (this.convertToInt(this.text1) || 0) + (this.convertToInt(this.text2) || 0);
  }

  sub() {
    this.total = (this.convertToInt(this.text1) || 0) - (this.convertToInt(this.text2) || 0);
  }

  multiply() {
    this.total = (this.convertToInt(this.text1) || 0) * (this.convertToInt(this.text2) || 0);
  }

  divide() {
    this.total = ((this.convertToInt(this.text1) || 0) / (this.convertToInt(this.text2) || 0)).toFixed(2);
  }

  convertToInt(val){
    return parseInt(val);
  }

}
