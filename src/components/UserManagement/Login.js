import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch} from "react-redux";
import classNames from 'classnames';
import { login } from '../../actions/securityActions';

const Login = (props) => {

    const initialLoginRequest = {
        username: "",
        password: ""
    }

    const [loginRequest,setLoginRequest] = useState(initialLoginRequest);

    const securityState = useSelector(state => state.security);

    const errors = useSelector(state => state.errors);

    const dispatch = useDispatch();

    const onChange = (event) => {
        setLoginRequest({ ...loginRequest,[event.currentTarget.name]: event.currentTarget.value });
    }

    useEffect(() => {
        if(securityState.validToken){ 
            props.history.push("/dashboard");
        }
        },[securityState.validToken]
    )

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(login(loginRequest));
        setLoginRequest({});
    }

    return (
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Log In</h1>
                        <form onSubmit={onSubmit}>
                            <div className="form-group mb-2">
                                <input type="email" className={classNames("form-control form-control-lg",{
                                    "is-invalid": errors.username
                                })} placeholder="Email Address (username)" name="username" value={loginRequest.username} onChange={onChange} />

                                {errors.username && (
                                    <div className="invalid-feedback">{errors.username}</div>
                                )}
                            </div>
                            <div className="form-group mb-2">
                                <input type="password" className={classNames("form-control form-control-lg",{
                                    "is-invalid": errors.password
                                })} placeholder="Password" name="password" value={loginRequest.password} onChange={onChange}/>
                                
                                {errors.password && (
                                    <div className="invalid-feedback">{errors.password}</div>
                                )}
                            </div>
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
