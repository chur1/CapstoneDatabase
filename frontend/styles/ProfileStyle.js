import styled from "styled-components";


export const Background = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.227),rgba(0, 0, 0, 0.0)), url('https://codetheweb.blog/assets/img/posts/css-advanced-background-images/mountains.jpg');
    background-size: cover;
    background-attachment: fixed;
    overflow: auto;
`

export const PreUpload = styled.div`
    background-color: #2d2d2d;
    margin: auto;
    width: 30rem;
    h4{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 350;
        padding: 0rem 0.3rem;
        margin-bottom: 1rem;
        text-align: center;
        color: white;
    }

    a{    
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 350;
        padding: 0rem 0.3rem;
        margin-bottom: 1rem;
        text-align: center;
    }
    button{
        border-radius: 20px;
        padding: 10px;
        border-color: 3px black;
    }
    input{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 350;
        padding: 10px;
        color: white;
    }
`


export const ProfileStyle  = styled.div`

    background-color: white;
    border: black;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin: auto;
    width: 30rem;
    padding: 40px;
    text-align: center;
    // margin-bottom: 10rem;
    
    h2{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 400;
        padding: 0.5rem 0.3rem;
        margin-top: 1rem;
        text-align: center;
    }
    h3{
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 350;
        padding: 0rem 0.3rem;
        margin-bottom: 1rem;
        text-align: center;
    }
    p{
        text-align: left;
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

export const TopDiv  = styled.div`
    background-color: white;
    border: black;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin: auto;
    width: 30rem;
    text-align: left;

    h5{
        color: Black;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 350;
        padding: 1rem 1rem;
        font-size: 20px;
        padding-left: 30px;
    }

`

export const Image  = styled.div`
    img{
        width: 30rem;
        height: auto;
        text-align: center;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: -2.5rem;
    }

`

export const WholeCard = styled.div`
    margin: 7rem;
`