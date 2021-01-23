import React  from "react";
import {getUsers} from "../../api"

class UserTable extends React.Component{
    async componentDidMount (){
        const users = await getUsers();
        this.props.updateUsers(users);
    }

    render() {
        return (<div>User table</div>)
    }
}

export default UserTable;