import { Conteiner } from "./styles";
import { useTransitions } from "../../hooks/useTransactions";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"


export function Summary(){
	const  { transactions } = useTransitions();

	const summary = transactions.reduce((acc, transaction) => {
		if (transaction.type === 'deposit') {
			acc.deposits += transaction.amount;
			acc.total += transaction.amount;
		} else {
			acc.withdraws += transaction.amount;
			acc.total -= transaction.amount;
		}
		return acc;
	}, 
	{
		deposits: 0,
		withdraws: 0,
		total: 0,
	});
	
	return (
		<Conteiner>
			<div>
				<header>
					<p>Entradas</p>
					<img src={incomeImg} alt="Entradas"/>
				</header>
				<strong>
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL'
					}).format(summary.deposits)}
				</strong>
			</div>
			<div>
				<header>
					<p>Saídas</p>
					<img src={outcomeImg} alt="Saídas"/>
				</header>
				<strong>
					-{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL'
					}).format(summary.withdraws)}
				</strong>
			</div>
			<div>
				<header>
					<p>Total</p>
					<img src={totalImg} alt="Total"/>
				</header>
				<strong>
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL'
					}).format(summary.total)}
				</strong>
			</div>
		</Conteiner>
	);
}