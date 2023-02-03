import React from "react";
import CardBox from "../components/CardBox";
import Search from "../components/Search";
import loading from "../img/loading.gif"
import "./app.css";
class App extends React.Component {
  state = {
    robots: [],
    searchHand: "",
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respose) => respose.json())
      .then((users) => this.setState({ robots: users }));
  }
  onSearch = (e) => {
    this.setState({
      searchHand: e.target.value,
    });
  };
  render() {
    const filtersRobuts = this.state.robots.filter((robot) =>
      robot.name
        .toLocaleLowerCase()
        .includes(this.state.searchHand.toLocaleLowerCase())
    );

    return this.state.robots.length ===0 ?
     <div className="boxssss">
      <img className="loadings" src={loading} alt="loading" />
    </div>:  (
      <div className="tc ">
        <h1 className="title-roboto">Robofriends</h1>
        <Search onSearch={this.onSearch} />
        <CardBox robots={filtersRobuts} />
      </div>
    );
  }
}
export default App;
