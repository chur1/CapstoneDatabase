import styled from 'styled-components'

export const DetailsStyle = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 2rem;
    padding: 4rem;
    background-color: rgba(0, 0, 0, 0.7);
    border: black;
    border-radius: 24px;
    text-color: white;
    img{
        width: 40%;
        border-radius: 15px;
    }
    h3{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 400;
        color: #f1f1f1;
        margin-bottom: 1rem;
    }
    p{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 200;
        color: #f1f1f1;
        margin-bottom: 0.5rem;
    }
    h1{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 400;
        color: #f1f1f1;
        margin-bottom: 1rem;
    }

    form{
        display: flex;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 200;
        color: #f1f1f1;
        width: 1000rem;
        margin: 5rem;
    }

`;

export const ProductInfo = styled.div`
    width: 40%;
    div{
        margin: 1rem;
    }
    button{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        font-weight: medium;
        padding: 0.5rem 1rem;
        border-radius: 20px;
    }
`