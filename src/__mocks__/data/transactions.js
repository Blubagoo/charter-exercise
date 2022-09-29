import { userTransactions, userTransaction } from '../generators'

export const transactions = [
  {
    ...userTransaction(),
    amount: 120
  }, 
  ...userTransactions(29)
]
