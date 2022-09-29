import { userTransaction } from './userTransaction'
export const userTransactions = (num) => [...Array(num).fill('')].map(() => userTransaction())