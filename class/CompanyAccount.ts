import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (valorEmpr : number): void => {
    if(this.validateStatus()){
      this.balance += valorEmpr
      console.log(`Voce realizou um empréstimo de R$ ${valorEmpr}. Seu saldo atual é de R$ ${this.balance}`)
    }
  }
}
