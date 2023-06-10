import { useContext } from 'react';

import FavouritesContext from '../store/favourite-context';

import Meetuplist from '../components/meetups/Meetuplist';

function FavouritePage() {
    const favouriteCtx = useContext(FavouritesContext);

    let content;

    if (favouriteCtx.totalFavourite === 0) {
        content = <p>You've got no favourites  yet. Start adding some?</p>;
    } else {
        content = <Meetuplist meetups={favouriteCtx.favourite} />;
    }
    return (
        <section>
            <h1>My Favourites</h1>
            {content}
        </section>
    );
}

export default FavouritePage;