import {useRouteMatch, Route, Switch} from 'react-router-dom'
import Restaurant from './Restaurant.js'

const Restaurants = () => {
    const match = useRouteMatch()
    return(
        <div>
            <Switch>
                <Route path={`${match.path}/:restaurantId`}>
                    <Restaurant/>
                </Route>
                <Route path={match.path}>
                    <h3>Restaurants</h3>    
                </Route>
            </Switch>
        </div>
    )
}

export default Restaurants;