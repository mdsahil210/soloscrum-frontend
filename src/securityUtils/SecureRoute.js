import React from 'react';
import { useSelector} from "react-redux";
import { Route, Redirect } from 'react-router';

const SecuredRoute = ({component: Component, security, ...otherProps}) => {

    const securityState = useSelector(state => state.security)
    return(
        <Route {...otherProps} 
            render={props => 
                securityState.validToken === true ?
                (<Component {...props} />) : 
                (<Redirect to="/login" />)
            }
        />
    )
}

export default SecuredRoute;
