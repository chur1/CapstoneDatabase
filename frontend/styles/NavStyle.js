import styled from "styled-components"

export const NavStyles = styled.div`
    
    min-height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 1.70);
    a {
        margin-left: 2rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1.45rem;
        font-weight: 320;
    }
    h2{
        color: white;
        margin-left: 2rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1.45rem;
        font-weight: 320;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }
    // img{
    //     margin: 0.4rem;
    //     margin-top: 0.7rem;
    //     max-width: 4rem;
    //     // margin: 0.5rem;
    //     // max-width: 7rem;
    // }

    form{
        margin-left: 2rem;
        display: flex;
    }
    input{
        margin-left:0.5rem;
        margin-right: 0.5rem;
        text-align: center;
        padding: 0px 2.5rem;
        border-radius: 10px;
        border: 2.0x solid rgba(0, 0, 0, 0.5);
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 14px;
        caret-color:blue; 
    }

    button{
        margin-left: 0.5rem;
        padding: 0.5rem 0.5rem;
        border-radius: 20px;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 14px;
        color: #f1f1f1;
        background-color: #535353;
        margin-right: -0.2rem;
        border: 1.25px solid rgba(0, 0, 0, 0.5);
        font-weight: 300;

    }
    button:hover{
        background-color: rgba(0, 0, 0, 0.01);
        border-color: #f1f1f1
        // color: white
        font-weight: 300;

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