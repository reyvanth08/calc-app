import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
    constructor() {}

    currentNumber = '0';

    operator: any = null;

    firstOperand: any = null;

    waitForSecondNumber:boolean = false;

    ngOnInit(): void {}

    getNumber(value: string) {
        if (this.waitForSecondNumber === true) {
            this.currentNumber = value;
            this.waitForSecondNumber = false;
        } else {
            if (this.currentNumber == '0') {
                this.currentNumber = value;
            } else {
                this.currentNumber += value;
            }
        }
    }

    getDecimal(value: string) {
        if (this.currentNumber.includes(value)) {
            console.log('decimal already exist');
        } else {
            this.currentNumber += value;
        }
    }

    getOperator(op: string) {
        //this if loop is true after operator is assigned
        if(this.firstOperand == null) {
            this.firstOperand = Number(this.currentNumber)
        } else if (this.operator) {
            const result = this.doCalculation(Number(this.currentNumber), this.operator);
            this.currentNumber = String(result);
            this.firstOperand = result;
            console.log('this is displaying inside if loop')
            console.log(result)
        }

        //assigning operator
        if (op) {
            this.operator = op;
        }
        this.waitForSecondNumber = true;
    }

    doCalculation(firstOp: number, Op: any) {
        switch (Op) {
            case '+':
                return (this.firstOperand += firstOp);
            case '-':
                return (this.firstOperand -= firstOp);
            case '*':
                return (this.firstOperand *= firstOp);
            case '/':
                return (this.firstOperand /= firstOp);
            case '=':
                return firstOp;
            default:
                return 'not recognized';
        }
    }

    getClear() {
        this.currentNumber = '0';
        this.firstOperand = null;
        this.operator = null;
        this.waitForSecondNumber = false;
    }
}
