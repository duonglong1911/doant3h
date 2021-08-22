import React, { Component } from 'react';
import './login.css'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="login">
                    <div className="box-root flex-flex flex-direction--column" style={{"min-height":"100vh","-webkit-flex-grow":"1","-ms-flex-grow":"1","flex-grow":"1"}}>
                        <div className="loginbackground box-background--white padding-top--64">
                        <div className="loginbackground-gridContainer">
                            <div className="box-root flex-flex" style={{"grid-area":"top / start / 8 / end"}}>
                            <div className="box-root" style={{"background-image":"linear-gradient(                    white 0%,                    rgb(247, 250, 252) 33%                  )","-webkit-flex-grow":"1","-ms-flex-grow":"1","flex-grow":"1"}} />
                            </div>
                            <div className="box-root flex-flex" style={{"grid-area":"4 / 2 / auto / 5"}}>
                            <div className="
                                box-root
                                box-divider--light-all-2
                                animationLeftRight
                                tans3s
                            " style={{"-webkit-flex-grow":"1","-ms-flex-grow":"1","flex-grow":"1"}} />
                            </div>
                            <div className="box-root flex-flex" style={{"grid-area":"6 / start / auto / 2"}}>
                            <div className="box-root box-background--blue800" style={{"-webkit-flex-grow":"1","-ms-flex-grow":"1","flex-grow":"1"}} />
                            </div>
                            <div className="box-root flex-flex" style={{"grid-area":"7 / start / auto / 4"}}>
                            <div className="box-root box-background--blue animationLeftRight" style={{"-webkit-flex-grow":"1","-ms-flex-grow":"1","flex-grow":"1"}} />
                            </div>
                            <div className="box-root flex-flex" style={{"grid-area":"8 / 4 / auto / 6"}}>
                            <div className="
                                box-root
                                box-background--gray100
                                animationLeftRight
                                tans3s
                            " style={{"-webkit-flex-grow":"1","-ms-flex-grow":"1","flex-grow":"1"}} />
                            </div>
                            <div className="box-root flex-flex" style={{"grid-area":"2 / 15 / auto / end"}}>
                            <div className="
                                box-root
                                box-background--cyan200
                                animationRightLeft
                                tans4s
                            " style={{"-webkit-flex-grow":"1","-ms-flex-grow":"1","flex-grow":"1"}} />
                            </div>
                            <div className="box-root flex-flex" style={{"grid-area":"3 / 14 / auto / end"}}>
                            <div className="box-root box-background--blue animationRightLeft" style={{"-webkit-flex-grow":"1","-ms-flex-grow":"1","flex-grow":"1"}} />
                            </div>
                            <div className="box-root flex-flex" style={{"grid-area":"4 / 17 / auto / 20"}}>
                            <div className="
                                box-root
                                box-background--gray100
                                animationRightLeft
                                tans4s
                            " style={{"-webkit-flex-grow":"1","-ms-flex-grow":"1","flex-grow":"1"}} />
                            </div>
                            <div className="box-root flex-flex" style={{"grid-area":"5 / 14 / auto / 17"}}>
                            <div className="
                                box-root
                                box-divider--light-all-2
                                animationRightLeft
                                tans3s
                            " style={{"-webkit-flex-grow":"1","-ms-flex-grow":"1","flex-grow":"1"}} />
                            </div>
                        </div>
                        </div>
                        <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{"-webkit-flex-grow":"1","-ms-flex-grow":"1","flex-grow":"1","z-index":"9"}}>
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
                                    <div className="loginBtnLogin  color-red">
                                        <span className="loginBtnText">Đăng nhập với Google <i className="fab fa-google-plus-g loginIcon"></i></span>
                                    </div>
                                    <div className="loginBtnLogin color-blue">
                                        <span className="loginBtnText ">Đăng nhập với FaceBook <i className="fab fa-facebook-f loginIcon"></i></span>
                                    </div>
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