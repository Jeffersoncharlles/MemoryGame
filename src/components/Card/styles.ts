import styled from 'styled-components';

interface ContainerProps {
    showBackground: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: ${({ showBackground, theme }) =>
        showBackground ? theme.color.success : theme.color.info};
    height: 100px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: ease filter .3s;

    &:hover{
        filter: ${({ showBackground }) => showBackground ? `` : `brightness(.9)`};
    }

    svg{
        color:${({ theme }) => theme.color.tertiary} ;
    }
`;

export const Icons = styled.div`

    svg{
        font-size: 40px;
        font-weight: bold;
        color:${({ theme }) => theme.color.white};
    }

`;
export const DivS = styled.div``;