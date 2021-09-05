import React, { Component } from "react";
import "./header.css";
import { Search, Chat, ExitToApp } from "@material-ui/icons"
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom'
import firebase from 'firebase';



export default class Header extends Component {

  constructor(props) {
        super(props);
        this.state = {
                value: 0,
                keyword: '',
                isSearch: false,
                isSearchRespon: false
            };
        }

    handleToggleDarkmode= (e) => {
      console.log(e.target);
    }

    onKeyDownSearch = (e) =>{
      this.setState({
        keyword: e.target.value,
        isSearch: true
      })
    }
    hideSearch = () =>{
      this.setState({
        keyword: '',
        isSearch: false
      })
    }
    componentDidMount(){
      window.addEventListener('click', this.hideSearch)
      window.addEventListener('resize', ()=>{
        if(window.innerWidth >= 1024){
          this.setState({
            isSearchRespon: false,
            isSearch: false,
            keyword: ''
          })
        }
      })
    }
    onClickShowSearch = () =>{
        if(window.innerWidth <= 1023){
          this.setState({
            isSearchRespon: !this.state.isSearchRespon,
            isSearch: false,
            keyword: ''
          })
        } 
    }

  render() {
    const handleChange = (event, newValue) => {
      this.setState({
        value:newValue
      })
    };
    const {keyword, isSearch, isSearchRespon} = this.state
    var {usersList} = this.props;
    if(keyword){
      usersList = usersList.filter(item=>{
        return item.displayName.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      })
    }

    return (
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">NoteBook</span>
          <div>
            <div className="">
              <div className="searchbar">
                <Search className="searchIcon" onClick={this.onClickShowSearch}/>
                <input type="search" onChange={this.onKeyDownSearch} value={this.state.keyword} className="searchInput" placeholder="Tìm kiếm"/>
              </div>
              {isSearchRespon && <input type="search" onChange={this.onKeyDownSearch} value={this.state.keyword} className="searchInput1" placeholder="Tìm kiếm"/>}
            </div>
            {
              isSearch && 
              <div className="searchName">
                {
                  usersList.map((item,index)=>{
                    return(
                        <div key={index} className="searchName-child">
                          <img src={item.photo} alt="" width="60px" height="60px" style={{objectFit: 'cover'}}/> 
                          <span style={{marginLeft: '10px', fontSize: '16px'}}>{item.displayName}</span>
                        </div>
                    )
                  })
                }
              </div> 
            }
          </div>
        </div>
        <div className="topbarCenter">
          <Paper className="topbarCenterIcon">
            <Tabs
              value={this.state.value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab icon={<HomeIcon />} to="/" component={Link}/>
              <Tab icon={<GroupIcon />} to="/people" component={Link} />
              <Tab icon={<PermMediaIcon />} to="/imagesgallery" component={Link}/>
              <Tab icon={<ContactSupportIcon />} to="/introduce" component={Link}/>
            </Tabs>
          </Paper>
        </div>
        <div className="topbarRight">
          <div className="topbarIcons">
          <Link style={{textDecoration:'none'}} to={"/profile/"+this.props.displayName.uid}>
          <div className="topbarIconItem">
            <img src={this.props.displayName.photoURL} alt="" className="topbarImg" />
            <span className="topbarUsername">{this.props.displayName.displayName.slice(this.props.displayName.displayName.lastIndexOf(' '), 1000)}</span>
          </div></Link>
            {/* <div className="topbarIconItem">
              <Person className="topbarIconIcon" />
              <span className="topbarIconBadge">1</span>
            </div> */}
            <div className="topbarIconItem">
              <Chat className="topbarIconIcon" />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <NightsStayIcon className="topbarIconIcon" onClick={this.props.handleToggleDarkmode} />
            </div>
            <div className="topbarIconItem">
              <ExitToApp className="topbarIconIcon" onClick={() =>firebase.auth().signOut()}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
