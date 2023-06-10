import { createContext, useState } from "react";

const FavouritesContext = createContext({
    favourite: [],
    totalFavourite: 0,
    addFavourite: (favouriteMeetup) => { },
    removeFavourite: (meetupId) => { },
    itemIsFavourite: (meetupId) => { }
});

export function FavouriteContextProvider(props) {

    const [userFavourites, setUserFavourites] = useState([]);

    function addFavouriteHandle(favouriteMeetup) {
        setUserFavourites((prevUserFavourites) => {
            return prevUserFavourites.concat(favouriteMeetup);
        });
    }

    function removeFavouriteHandler(meetupId) {
        setUserFavourites(prevUserFavourites => {
            return prevUserFavourites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavouriteHandler(meetupId) {
        return userFavourites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favourites: userFavourites,
        totalFavourite: userFavourites.length,
        addFavourite: addFavouriteHandle,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler
    };

    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>;
}

export default FavouritesContext;