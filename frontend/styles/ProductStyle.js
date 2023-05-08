import styled from "styled-components";


export const ProductStyle  = styled.div`
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    border: black;
    border-radius: 20px;
    
    img{
        border-radius: 15px;
        width: 100%;
        cursor: pointer;
        margin-bottom: 1rem;
    }h2{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 400;
        padding: 0.5rem;
    }
    h3{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 350;
        padding: 0.5rem 0.5rem;
    }

    .hover-underline-animation {
        display: inline-block;
        position: relative;
        color: #2d2d2d;
      }
      
      .hover-underline-animation::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #2d2d2d;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }
      
      .hover-underline-animation:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
`;
