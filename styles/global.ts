import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
}

:root{
	--background: #F6F9FB;
	--components: #ffffff;
	--white: #ffff;
	--title: #343434;
	--subtitle: #9396AC;
	--blue: #0575F3;
	--green: #3AA20B;
	--black: #000000;
}

body{ 
	background: var(--background);
}

.modal{
	background: var(--white);
	border-radius: 0.5rem;
	border: 1px solid var(--subtitle);
	margin-top: 12.5vh;
	margin-left: auto;
    margin-right: auto; 
	margin-bottom: 12.5vh;
	width: 45rem;
	height: 70%;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 768px){
		width: 90%;
	}
}
`;
