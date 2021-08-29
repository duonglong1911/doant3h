import React, { Component } from 'react';
import './login.css'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

class Login extends Component {
    render() {
        return (
            <div className="login-hidden">
                <div className="login">
                    <div className="box-root flex-flex flex-direction--column" style={{"minHeight":"100vh","WebkitFlexGrow":"1","msFlexGrow":"1","flexGrow":"1"}}>
                        <div className="loginbackground box-background--white padding-top--64">
                        <div className="loginbackground-gridContainer">
                            <div className="box-root flex-flex" style={{"gridArea":"top / start / 8 / end"}}>
                            <div className="box-root" style={{"backgroundImage":"linear-gradient(                    white 0%,                    rgb(247, 250, 252) 33%                  )","WebkitFlexGrow":"1","msFlexGrow":"1","flexGrow":"1"}} />
                            </div>
                            <div className="box-root flex-flex" style={{"gridArea":"4 / 2 / auto / 5"}}>
                            <div className="
                                box-root
                                box-divider--light-all-2
                                animationLeftRight
                                tans3s
                            " style={{"WebkitFlexGrow":"1","msFlexGrow":"1","flexGrow":"1"}} />
                            </div>
                            <div className="box-root flex-flex" style={{"gridArea":"6 / start / auto / 2"}}>
                            <div className="box-root box-background--blue800" style={{"WebkitFlexGrow":"1","msFlexGrow":"1","flexGrow":"1"}} />
                            </div>
                            <div className="box-root flex-flex" style={{"gridArea":"7 / start / auto / 4"}}>
                            <div className="box-root box-background--blue animationLeftRight" style={{"WebkitFlexGrow":"1","msFlexGrow":"1","flexGrow":"1"}} />
                            </div>
                            <div className="box-root flex-flex" style={{"gridArea":"8 / 4 / auto / 6"}}>
                            <div className="
                                box-root
                                box-background--gray100
                                animationLeftRight
                                tans3s
                            " style={{"WebkitFlexGrow":"1","msFlexGrow":"1","flexGrow":"1"}} />
                            </div>
                            <div className="box-root flex-flex" style={{"gridArea":"2 / 15 / auto / end"}}>
                            <div className="
                                box-root
                                box-background--cyan200
                                animationRightLeft
                                tans4s
                            " style={{"WebkitFlexGrow":"1","msFlexGrow":"1","flexGrow":"1"}} />
                            </div>
                            <div className="box-root flex-flex" style={{"gridArea":"3 / 14 / auto / end"}}>
                            <div className="box-root box-background--blue animationRightLeft" style={{"WebkitFlexGrow":"1","msFlexGrow":"1","flexGrow":"1"}} />
                            </div>
                            <div className="box-root flex-flex" style={{"gridArea":"4 / 17 / auto / 20"}}>
                            <div className="
                                box-root
                                box-background--gray100
                                animationRightLeft
                                tans4s
                            " style={{"WebkitFlexGrow":"1","msFlexGrow":"1","flexGrow":"1"}} />
                            </div>
                            <div className="box-root flex-flex" style={{"gridArea":"5 / 14 / auto / 17"}}>
                            <div className="
                                box-root
                                box-divider--light-all-2
                                animationRightLeft
                                tans3s
                            " style={{"WebkitFlexGrow":"1","msFlexGrow":"1","flexGrow":"1"}} />
                            </div>
                        </div>
                        </div>
                        <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{"WebkitFlexGrow":"1","msFlexGrow":"1","flexGrow":"1","zIndex":"9"}}>
                        <div className="
                            box-root
                            padding-top--48
                            padding-bottom--24
                            flex-flex
                            flex-justifyContent--center
                        ">
                            <h1 className="loginTitle">NoteBooks</h1>
                        </div>
                        <div className="formbg-outer">
                            <div className="formbg">
                            <div className="formbg-inner">
                                <div className="loginImage">
                                    <img src="/assets/images/anhbiaregister.jpeg" alt="" className="loginImageImg" />
                                </div>
                                <div className="loginContent">
                                    <div className="loginContentTop">
                                        <PermIdentityIcon className="loginIconPerson" />
                                    </div>
                                    <span className="loginContentTitle mb-3 mt-3">Welcome back</span>
                                    <StyledFirebaseAuth uiConfig={this.props.uiConfig} firebaseAuth={firebase.auth()} ></StyledFirebaseAuth>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;