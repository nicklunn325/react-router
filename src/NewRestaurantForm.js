import React from 'react'

class NewRestaurantForm extends React.Component{

    state={
        name: "",
        cuisine:""
    }

    onChange = (e) => {
        let obj = {}
        obj[e.target.id] = e.target.value
        this.setState(obj)
    }
    
    
    render(){
        return(
            <form>
                <label>Name:</label>
                <input onChange={this.onChange} type="text" id="name" value={this.state.name}/>
                <br/>
                <label>Cuisine:</label>
                <input onChange={this.onChange} type="text" id="cuisine" value={this.state.cuisine}/>
                <br/>
                <input type="submit" value="New Restaurant"/>
            </form>
        )
    }
}

export default NewRestaurantForm