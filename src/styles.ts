import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 750px;
    margin: auto;
    display: flex;
    padding: 50px 0;

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

export const Section = styled.section`
    display:  flex;
    flex-direction: column;
    width: auto;

    @media (max-width: 750px){
        margin-bottom: 50px;
        align-items: center;
    }
`

export const LogoLink = styled.a`
    
    display: block;
    span{
        font-size: 3rem;
        
        &::before{
            content: "";
            border: 2px solid ${({ theme }) => theme.color.success};
            display: inline-block;
        }
    }
`

export const InfoContainer = styled.div`
    width: 100%;
    margin: 10px 0;

    @media (max-width: 750px){
        display: flex;
        justify-content: space-around;//disponível igualmente
        text-align: center;
    }
`

export const SectionGrid = styled.section`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 750px){
        justify-content: center;
        margin: 0 20px;
    }
`




