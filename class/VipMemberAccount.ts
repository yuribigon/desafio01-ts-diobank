import { DioAccount } from "./DioAccount"

export class VipMemberAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (valorDep : number): void => {
    if(this.validateStatus()){
      let newDep = valorDep + 10
      this.balance += newDep
      console.log(`Voce realizou um empréstimo de R$ ${valorDep}. Seu saldo atual é de R$ ${this.balance}`)
    }
  }
}
