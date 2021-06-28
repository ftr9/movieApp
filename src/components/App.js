import { Switch, Route, BrowserRouter as Router } from "react-router-dom"

import Navigation from "./Navigation"
import Popular from '../screens/popular';
import NowPlaying from "../screens/nowPlaying";
import Toprated from '../screens/toprated';
import Upcoming from '../screens/upcoming';
import DetailsPage from "./detailsPage";



const App = () => {
    return (
        <>
            <Router>

                <Navigation />

                <Switch>

                    <Route path="/" component={Popular} exact></Route>
                    <Route path="/upcoming" component={Upcoming}></Route>
                    <Route path="/toprated" component={Toprated}></Route>
                    <Route path="/nowPlaying" component={NowPlaying}></Route>
                    <Route path="/details/:id" component={DetailsPage}></Route>

                </Switch>

            </Router>
        </>



    )
}

export default App
