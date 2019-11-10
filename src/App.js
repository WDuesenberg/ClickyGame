import React, { useState, Component } from "react"; // importing 'useState' to give us the hooks functionality
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friendList from "./friends.json"; // renamed to 'friendList' so there's no conflict w/our friends const below
import "./App.css";
// import Counter from "./components/Counter";

class App extends Component {
    // creating a React state value 'friends' and specifying the method we'll use to alter that state, 'updateFriends'
    // we set these values up in the form of an array (order matters!) and then set the initial value for the state
    // value ('friends', in this case) by calling the React method 'useState()' and passing it the initial value for
    // that state...    
    // const [friends, updateFriends] = useState(friendList);


    // class Counter extends React.Component {
    state = {
        count: 0,
        friends: friendList,
        highScore: 0,
        userClicks: []
    };

    handleIncrement = (event) => {
        this.setState({ count: this.state.count + 1 });
        console.log(event.target.dataset)
    };

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
    };

    render() {
        return (
            <Wrapper>
                <h1 className="title">Friends List | Score: {this.state.count} </h1>
                {this.state.friends.map(friend => (
                    <FriendCard
                        name={friend.name}
                        image={friend.image}
                        occupation={friend.occupation}
                        location={friend.location}
                        key={friend.id}
                        // removeFriend={() => removeFriend(friend.id)}
                    // count={this.state.count}
                        handleIncrement={this.handleIncrement}
                        // handleDecrement={this.handleDecrement}   
                    />
                ))}
            </Wrapper>
        );
    }
}
export default App;
