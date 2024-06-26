import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { api } from '../services/api';

// interface TransactionInput {
// 	title: string;
// 	amount: number;
// 	type: string;
// 	category: string;
// }
// or
// type TransactionInput = Pick<Transaction, 'title' | 'amount' | 'type' | 'category'>;
// or
type TransactionInput = Omit<Transaction, 'id' | 'createAt'>;

interface Transaction {
	id: number;
	title: string;
	amount: number;
	type: string;
	category: string;
	createAt: string;
}


interface TransactionsProviderProps {
	children: ReactNode;
}

interface TransactionsContextData{
	transactions: Transaction[];
	createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
	{} as TransactionsContextData
);


export function TransactionsProvider({children}: TransactionsProviderProps) {
	const [ transactions, setTransactions ] = useState<Transaction[]>([]);

	useEffect(() => {
		api.get('transactions')
			.then(response => setTransactions(response.data.transactions));
	}, []);

	async function createTransaction(transactionInput: TransactionInput) {
		const response = await api.post('/transactions', {
			...transactionInput,
			createAt: new Date(),
		});
		const { transaction } = response.data;
		setTransactions([
			...transactions, 
			transaction
		]);
	}

	return (
		<TransactionsContext.Provider value={{transactions, createTransaction}}>
			{children}
		</TransactionsContext.Provider>
	)

}


export function useTransitions() {
	const context = useContext(TransactionsContext);
	return context;
}