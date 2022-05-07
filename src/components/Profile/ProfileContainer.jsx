import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId){
            userId=23771
        }
        this.props.getUserProfile(userId)
    }
    render() {
        if(this.props.isAuth===false){
            return <Navigate to={'/login'}/>
        }

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

let mapStateToProps = (state)=>({
    profile:state.profilePage.profile,
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps,{getUserProfile})(withRouter(ProfileContainer));