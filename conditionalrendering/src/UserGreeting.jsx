import PropTypes from "props-types"
function UserGreet(props){
    return(props.isLoggedIn ? <h2 className="success">Welcome {props.username}</h2>:<h2 className="failure">Please LogIn</h2>);

}
UserGreet.PropTypes={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
export default UserGreet