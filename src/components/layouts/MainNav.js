import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNav.module.css';
import FavouritesContext from '../../store/favourite-context';

function MainNav() {
    const favouriteCtx = useContext(FavouritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                React Meetups
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup-page'>New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favourite-page'>My Favourite
                            <span className={classes.badge}>
                                {favouriteCtx.totalFavourite}</span> </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNav;