import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { VipMemberAccount } from './class/VipMemberAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(150)
peopleAccount.withdraw(50)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(300)
companyAccount.withdraw(100)
companyAccount.getLoan(800)
console.log(companyAccount)
const vipAccount : VipMemberAccount = new VipMemberAccount('Yuri', 22)
vipAccount.deposit(100);
console.log(vipAccount);
