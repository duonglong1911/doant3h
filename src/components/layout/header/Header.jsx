import React, { Component } from "react";
import "./header.css";
import { Search, Person, Chat, ExitToApp } from "@material-ui/icons"
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';


export default class Header extends Component {

  constructor(props) {
        super(props);
        this.state = {
                value: 0 
            };
        }

    handleToggleDarkmode= (e) => {
      console.log(e.target);
    }
  

  render() {
    const handleChange = (event, newValue) => {
      this.setState({
        value:newValue
      })
    };

    return (
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">Facebook</span>
          <div className="searchbar">
            <Search className="searchIcon" />
            <input type="text" className="searchInput" placeholder="Tìm kiếm"/>
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
              <Tab icon={<GroupIcon />} />
              <Tab icon={<PermMediaIcon />} to="/imagesgallery" component={Link}/>
              <Tab icon={<OndemandVideoIcon />} />
            </Tabs>
          </Paper>
        </div>
        <div className="topbarRight">
          <Link to="/profile">
          <div>
            <img src="/assets/images/anhtoi.jpg" alt="" className="topbarImg" />
            <span className="topbarUsername">Dương Long</span>
          </div></Link>
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person className="topbarIconIcon" />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat className="topbarIconIcon" />
              <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
              <NightsStayIcon className="topbarIconIcon" onClick={this.props.handleToggleDarkmode} />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <ExitToApp className="topbarIconIcon" onClick={this.props.onClickRedirect}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
