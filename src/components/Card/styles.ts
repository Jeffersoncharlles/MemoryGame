import styled from 'styled-components';

export const Container = styled.div`
    background: ${({ theme }) => theme.color.info};
    display: flex;
    justify-content: center;
    align-items: center;


    svg{
        color:${({ theme }) => theme.color.tertiary} ;
    }
`;

export const Icons = styled.div``;
export const DivS = styled.div``;