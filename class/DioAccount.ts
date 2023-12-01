export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valorDepo: number): void => {
    if(this.validateStatus()){
      this.balance += valorDepo
      console.log(`Voce depositou R$ ${valorDepo}. Seu saldo atual é de R$ ${this.balance}`)
    }
  }

  withdraw = (valorSaque : number): void => {
    if(this.validateStatus() && this.balance > valorSaque ){
      this.balance -= valorSaque
      console.log(`Voce sacou R$ ${valorSaque}. Seu saldo atual é de R$ ${this.balance}`)
    } else {
      throw new Error('Saldo insuficiente')
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
