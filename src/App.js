import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavouritePage from './pages/Favourites';
import Layout from './components/layouts/Layout';

function App() {
    return (
        <Layout >
            <Routes>
                <Route path='/' element={<AllMeetupsPage />}>
                </Route>
                <Route path='/new-meetup-page' element={<NewMeetupPage />}>
                </Route>
                <Route path='/favourite-page' element={<FavouritePage />}>
                </Route>
            </Routes>
        </Layout>
    );
}

export default App;


// Custom elems are made using caps as default elems are wriiten in small letters. this is imp to diff b/w custom elems and def elems. They accept custom attrs.

//react hook are called in comp func and custom hooks. An element that has no content could be written as a self-closing tag.

//Props: is where all the attr added are available as key/value pairs. In Js we use an Imperative app to describe what happens but in React we use a declartive approach. In order to change what is visible on the screen you need to change the state. Props are imp for building reusable comp, states for changing what we see on the screen.