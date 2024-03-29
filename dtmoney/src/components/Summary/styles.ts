import styled from "styled-components";

export const Conteiner = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
	margin-top: -10rem;

	div {
		background: var(--shape);
		padding: 1.5rem;
		border-radius: 0.25rem;
		color: var(--text-title);

		header {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		strong {
			margin-top: 1rem;
			font-size: 2rem;
			font-weight: normal;
			line-height: 3rem;
		}
	}
`