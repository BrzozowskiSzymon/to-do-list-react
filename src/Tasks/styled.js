import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Items = styled.li`
    list-style-type: none;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    word-break: break-word;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        word-break: break-word;
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    background-color: green;
    color:white;
    border: none;
    transition: background 0.3s;
    padding: 0;

    ${({toggleDone}) => toggleDone && css`
        background: hsl(120, 61%, 34%);

        &:hover {
            background-color: hsl(120, 61%, 39%);
        }
    `}

    ${({remove}) => remove && css`
        background-color: rgb(212, 19, 19);

        &:hover {
            background-color: rgb(230, 11, 11);
        }
    `}
`;