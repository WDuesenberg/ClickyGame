import React, { useState } from "react"; // importing 'useState' to give us the hooks functionality
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friendList from "./friends.json"; // renamed to 'friendList' so there's no conflict w/our friends const below
import "./App.css";
// import Counter from "./components/Counter";

const App = () => {
    // creating a React state value 'friends' and specifying the method we'll use to alter that state, 'updateFriends'
    // we set these values up in the form of an array (order matters!) and then set the initial value for the state
    // value ('friends', in this case) by calling the React method 'useState()' and passing it the initial value for
    // that state...
    const [friends, updateFriends] = useState(friendList);

// class Counter extends React.Component {
//     state = {
//         count: 0
//     };

//     handleIncrement = () => {
//         this.setState({ count: this.state.count + 1 });
//     };

//     handleDecrement = () => {
//         this.setState({ count: this.state.count - 1 });
//     };
// }
    const removeFriend = id => {
        // 'friends' in our filter below is our value from React state
        const remainingFriends = friends.filter(friend => friend.id !== id);
        // now that we're using hooks, we use each state's custom update method to alter its value, much in the same
        // way we formerly used 'this.setState()' to update state
        updateFriends(remainingFriends);
    }

    return (
        <Wrapper>
            <h1 className="title">Friends List</h1>
            {friends.map(friend => (
                <FriendCard
                    name={friend.name}
                    image={friend.image}
                    occupation={friend.occupation}
                    location={friend.location}
                    key={friend.id}
                    removeFriend={() => removeFriend(friend.id)}
                    // count={this.state.count}
                    // handleIncrement={this.handleIncrement}
                    // handleDecrement={this.handleDecrement}
                />
            ))}
        </Wrapper>
    );
}

export default App;
