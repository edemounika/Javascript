import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //Create State
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "DummyLocation",
      },
    };

    console.log("child-constructor" + this.props.name);
  }

  async componentDidMount() {
    // console.log("child-componentDidMount" + this.props.name);
    //API calls
    const data = await fetch("https://api.github.com/users/edemounika");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log("child-componentDidMount" + this.props.name);
  }

  componentDidUpdate(){
    console.log("component Did Upadated");
  }
  componentWillUnmount()
{
  console.log("componentWillUnmount");
}
  render() {
   
    console.log("child-render" + this.props.name);
    return (
      <div>
        <h1> Profile class Component </h1>
        <h2>avatar: {this.state.userInfo.avatar_url}</h2>
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Locaton: {this.state.userInfo.location}</h2>
      </div>
    );
  }
}
export default Profile;
/**
 *
 * parent constructor
 * parent render
 * child constructor
 * child render
 *
 * DOM updated
 * json logged in console
 * child componentDidMount
 *
 * parent Component Did Mount
 *
 *
 */
