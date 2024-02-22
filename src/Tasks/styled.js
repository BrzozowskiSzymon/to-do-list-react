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
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
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
    background-color: ${({ theme }) => theme.color.green};
    color:white;
    border: none;
    transition: background 0.3s;
    padding: 0;

    ${({toggleDone}) => toggleDone && css`
        background: ${({ theme }) => theme.color.green};
    `}

    ${({remove}) => remove && css`
        background: ${({ theme }) => theme.color.green};
    `}

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;