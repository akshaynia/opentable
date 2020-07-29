import React from "react";
import { connect } from "react-redux";
import { addCity } from "../redux/actions";
import axios from "axios";
import Table from "./table";


class AddCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        input: "",
        per_page:10,
        loadRestaurant:false,
        current_page:1
     };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddCity = () => {
      
      this.setState({
        loadRestaurant:true,
    })

    this.props.addCity(this.state.input);
    
  };

  fetchRestaurants = ()=>{
    axios("http://opentable.herokuapp.com/api/restaurants?city="+ this.state.input+ "&&per_page=" +this.state.per_page +"&&current_page=2")
    .then(res => {
        const restaurants = res.data.restaurants;
        console.log(restaurants);
        this.setState({
            restaurants: restaurants,
            count:res.data.total_entries,
            
        })
        
    })
  }          

  componentDidMount(){
      if(this.state.loadRestaurant){
      this.fetchRestaurants();
  }
};

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button  onClick={this.handleAddCity}>
          Search Restaurants
        </button>
        { this.state.restaurants?(
        <div>
        <Table restaurants={ this.state.restaurants}/>
        {/* <PageList count={this.state.count}/> */}
        </div>
        ):null}
        
      </div>
    );
  }
}

export default connect(
  null,
  { addCity }
)(AddCity);
// export default AddTodo;