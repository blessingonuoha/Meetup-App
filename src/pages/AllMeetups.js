import { useState, useEffect } from 'react';

import Meetuplist from "../components/meetups/Meetuplist";

// const DUMMY_DATA = [
//     {
//         id: "m1",
//         title: "This is my first meetup",
//         image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg',
//         address: "Meetupstreet 5, 123 Meetup city",
//         desc: "This is an amazing place you shold def not miss!"
//     },
//     {
//         id: "m2",
//         title: "This is my second meetup",
//         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg",
//         address: "Meetupstreet 5, 123 Meetup city",
//         desc: "This is an amazing place you shold def not miss!"
//     },
//     {
//         id: "m3",
//         title: "This is my third meetup",
//         image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg",
//         address: "Meetupstreet 5, 123 Meetup city",
//         desc: "This is an amazing place you shold def not miss!"
//     }
// ];

function AllMeetupsPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-getting-started-ed320-default-rtdb.firebaseio.com/meetups.json'
        ).then((response) => {
            return response.json();
        }
        ).then((data) => {
            const meetups = [];

            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                };

                meetups.push(meetup);
            }

            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }
    return (
        <section>
            <div>All Meetups</div>
            <Meetuplist meetups={loadedMeetups} />
        </section>
    );
}

export default AllMeetupsPage;