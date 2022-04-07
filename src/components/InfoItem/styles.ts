import styled from 'styled-components';

export const Container = styled.div`
    margin: 20px 0;
`;

export const Label = styled.div`
    font-size: 15px;
    color: ${({ theme }) => theme.color.primary2};
`
export const Value = styled.div`
    font-size: 37px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.primary};
`