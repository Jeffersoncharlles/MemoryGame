import styled from 'styled-components';

export const Container = styled.button`
    width: 200px;
    height: 50px;
    background: ${({ theme }) => theme.color.tertiary};
    border-radius: 5px;
    border: 0;
    opacity: 1;
    transition: all ease .3s;

    &:hover{
        opacity: .8;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.color.info};
    font-size: 1rem;
    font-weight: bold;
`;

export const Icon = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255,255,255,.2);
    padding: 0 15px;
`