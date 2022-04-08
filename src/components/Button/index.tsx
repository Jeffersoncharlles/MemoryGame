import {
    Container,
    Icon,
} from './styles';
import { } from 'react-icons'

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
    title: string;
    icon?: string;
}

export const Button = ({ title, icon, onClick, }: IButton) => {

    return (
        <Container onClick={onClick} >
            {/* <Icon name={icon} /> */}
            {title}
        </Container>
    );
}