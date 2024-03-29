import { Conteiner } from "./styles";
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import totalImg from "../../assets/total.svg"

export function Summary(){
	return (
		<Conteiner>
			<div>
				<header>
					<p>Entradas</p>
					<img src={incomeImg} alt="Entradas"/>
				</header>
				<strong>R$1000,000</strong>
			</div>
			<div>
				<header>
					<p>Saídas</p>
					<img src={outcomeImg} alt="Saídas"/>
				</header>
				<strong>- R$500,000</strong>
			</div>
			<div>
				<header>
					<p>Total</p>
					<img src={totalImg} alt="Total"/>
				</header>
				<strong>R$500,000</strong>
			</div>
		</Conteiner>
	);
}