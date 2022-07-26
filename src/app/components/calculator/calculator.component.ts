import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  constructor() {}

  currentNumber = '0';

  ngOnInit(): void {}

  getNumber(value: string) {
    console.log(value);
	this.currentNumber = value;
  }

  getOperator(operator: string) {
    console.log(operator);
  }
}
