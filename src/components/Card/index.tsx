import {
    Container,
    Icons,
    DivS,
} from './styles';
import { VscSmiley } from 'react-icons/vsc'
import { items } from '../../utils/items';
import { IconType } from 'react-icons';

interface ICardItem {
    data: {
        item: number | null;
        shown: boolean;
        permanentShow: boolean;
    }
    onClick: () => void
}

export const Card = ({ data, onClick }: ICardItem) => {

    const NameIcon: IconType | any = data.item !== null && items[data?.item].icon;

    return (
        <Container
            onClick={onClick}
            showBackground={data.permanentShow || data.shown}
        >
            {!data.permanentShow && !data.shown && (
                <VscSmiley size={40} />
            )}

            {(data.permanentShow || data.shown) && (
                <Icons>
                    <NameIcon />
                </Icons>
            )}
        </Container>
    );
}