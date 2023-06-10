import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './Meetupitem.module.css';
import FavouritesContext from '../../store/favourite-context';

function Meetupitem(props) {
    const favouriteCtx = useContext(FavouritesContext);

    const itemIsFavourite = favouriteCtx.itemIsFavourite(props.id);

    function toggleFavouriteStatusHandler() {
        if (itemIsFavourite) {
            favouriteCtx.removeFavourite(props.id);
        } else {
            favouriteCtx.addFavourite({
                id: props.id,
                title: props.title,
                desc: props.desc,
                image: props.image,
                address: props.address
            });
        }
    }
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.desc}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavouriteStatusHandler}>{itemIsFavourite ? 'Remove from Favourites' : 'To Favourite'}</button>
                </div>
            </Card>
        </li>
    );
}

export default Meetupitem;