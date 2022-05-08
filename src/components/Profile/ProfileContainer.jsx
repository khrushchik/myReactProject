import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if(!userId){
            userId=23771
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }
    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
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




//let AuthRedirectComponent= withAuthRedirect(ProfileContainer)

let mapStateToProps = (state)=>({
    profile:state.profilePage.profile,
    status:state.profilePage.status
})

//let WithUrlDataContainerComponent =withRouter(AuthRedirectComponent)

//export default connect(mapStateToProps,{getUserProfile})(WithUrlDataContainerComponent);

export default compose(
    connect(mapStateToProps,{getUserProfile,getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)
