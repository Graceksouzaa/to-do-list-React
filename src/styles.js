import styled from 'styled-components';


export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(145deg, hsla(154, 100%, 76%, 1) 0%, hsla(234, 100%, 83%, 1) 50%, hsla(288, 100%, 81%, 1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ToDoList = styled.div`
    background: #e4e4e4;
    padding: 20px;
    border-radius: 5px;
`;

export const List = styled.ul`
    padding: 0;
    margin-top: 30px;
`;

export const Item = styled.li`
    color: #000000;
    font-weight: 400;
    font-size: 15px;
    background: #e4e4e4;
    box-shadow:  1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    height: 60px;
    list-style-type: none;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.input`
    border: 2px solid #eca0ff;
    background-color: #e4e4e4;
    border-radius: 5px;
    height: 40px;
    width: 200px;
    font-size: 15px;
    font-weight: 400;
    outline: none;
    padding-left: 10px;
`;

export const Button = styled.button`
    background: #aab2ff;
    border-radius: 5px;
    height: 40px;
    width: 90px;
    border: none;
    color: #ffffff;
    cursor: pointer;
    margin-left: 20px;
    font-size: 15px;

    &:hover{
        opacity: 0.8;
    }

    :active{
        opacity: 0.6;
    }

`;
