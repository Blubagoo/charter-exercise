import faker from 'faker'
export const userTransaction = () => ({
	date: faker.date.past().toISOString(),
	amount: Math.floor(Math.random() * (1000 - 100) + 100) / 100
})