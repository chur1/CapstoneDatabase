import styled from 'styled-components'

export const Input = styled.nav`
    margin-top: 5rem;
    h1{
        font-weight: 500;
    }
    input{
        background-color: white;
        text-align: center;
        padding: 5px 2.5rem;
        border-radius: 10px;
        border: 2.0x solid rgba(0, 0, 0, 0.5);
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 14px;
        caret-color:blue; 
    }
    h1{
        padding-bottom: 10px;
        text-align: center;
    }

`;

export const Form = styled.div`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 400;
    padding: 0.5rem;

    button{

        padding: 0.5rem 0.5rem;
        border-radius: 20px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 14px;
        color: #f1f1f1;
        background-color: #535353;
        margin-right: -0.2rem;
        border: 1.25px solid rgba(0, 0, 0, 0.5);

    }
    button:hover{
        background-color: rgba(0, 0, 0, 0.08);
        border-color: #f1f1f1
        // color: white

    }
    form {
		margin: 0 auto;
		width: 210px;
	}

	form label{
		display: inline-block;
		text-align: right;

        margin-bottom: 4px;
	}

	form input{
        margin-bottom: 0.5rem;
		display: inline-block;
		text-align: left;

	}
`;

export default Input; Form;
