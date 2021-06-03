import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

const Restaurant = () => {
    let {restaurantId} = useParams()
    const[restaurant, setRestaurant] = useState({})

    const fetchRestaurant = () => {
        fetch(`http://localhost:3000/restaurants/${restaurantId}`)
        .then(res => res.json())
        .then(data => setRestaurant(data))
    }

    useEffect(fetchRestaurant)

    return(
        <div>
            <h3>{restaurant.name}</h3>
            <h4>{restaurant.cuisine}</h4>
        </div>
    )
}

export default Restaurant