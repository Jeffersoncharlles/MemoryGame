import {
    Container,
    Label,
    Value,
} from './styles';

interface IInfoItem {
    label: string;
    value: string
}

export const InfoItem = ({ label, value }: IInfoItem) => {

    return (
        <Container>
            <Label>{label}</Label>
            <Value>{value}</Value>

        </Container>
    );
}