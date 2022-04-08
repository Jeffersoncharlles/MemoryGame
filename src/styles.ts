import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 750px;
    margin: auto;
    padding: 50px 0;

    display: flex;
    justify-content: center;
    align-items: center;

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
        font-size: 2.5rem;
        font-weight: 600;
        color: ${({ theme }) => theme.color.info};
        position: relative;
        
        &::before{
            position: absolute;
            content: "#";
            left: -12px;
            width: 0.75rem;
            color:${({ theme }) => theme.color.primary2} ;
            z-index: -1; 
            
        }
        /* &::after{
            content: "";
            border: 5px solid ${({ theme }) => theme.color.tertiary};
            border-radius: 50%;
            display: block;
            
        } */
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
        margin: 0;
    }
`

export const Grid = styled.div`
    width: 430px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 10px;
`




