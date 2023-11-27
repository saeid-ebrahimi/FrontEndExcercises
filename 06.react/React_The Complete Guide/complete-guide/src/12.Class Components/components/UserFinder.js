import { Fragment, Component  } from 'react';
// import {useState, useEffect} from "react";
import ErrorBoundary from "./ErrorBoundary";
import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from "../store/users-context";

class UserFinder extends Component{
  static contextType = UsersContext; // required to use context, and you cannot use it to link to multiple contexts
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: ""
    }
  }
  componentDidMount() {
    this.setState({filteredUsers: this.context.users});
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.searchTerm !== this.state.searchTerm){
      this.setState(
          {filteredUsers: this.context.filter((user) => user.name.includes(this.state.searchTerm))})
    }
  }
  componentWillUnmount() {
    console.log("components will unmounted")
  }

  searchChangeHandler(event){
    this.setState({searchTerm: event.target.value });
  }
  render() {
    return (
        <Fragment>
          <div className={classes.finder}>
            <input type='search' onChange={this.searchChangeHandler.bind(this)} />
          </div>
          <ErrorBoundary>
            <Users users={this.state.filteredUsers} />
          </ErrorBoundary>
        </Fragment>
    );
  }
}
/*
const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.finder}>
        <input type='search' onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </Fragment>
  );
};
*/
export default UserFinder;