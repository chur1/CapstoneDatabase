import styled from "styled-components"

export const NavStyles = styled.div`
    
    min-height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.70);
    a {
        margin-left: 2rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1.5rem;
        color: #f1f1f1;
    }
    img{
        align-items: center;
        justify-content:space-between;
        margin: 0.5rem;
        max-width: 4rem;
    }
    
`


export const NavItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 2rem;
    h2{
        font-size: 3rem;
    }
    div{
        margin-left: 3rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .hover-underline-animation {
        display: inline-block;
        position: relative;
        color: #f1f1f1;
      }
      
      .hover-underline-animation::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #f1f1f1;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }
      
      .hover-underline-animation:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
`;