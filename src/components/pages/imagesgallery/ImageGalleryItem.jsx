import React, { Component } from 'react'
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import SelectPost from '../../selectpost/SelectPost';

export default class ImageGalleryItem extends Component {
    constructor(props) {
            super(props);
            this.state = {
                isChecked:0,
            }
        
    }
    onClickImg = (e) => {
            console.log(e.target);
            this.setState({
                isChecked:1
            }) 
            }

    handleSelect = () => {
            this.setState({
                isChecked: 0
            })
        }
    render() {

        const {photo, id, date} = this.props;
        return(
            <div className="col-12 col-lg-3 col-md-4 col-sm-6" key={id}>
                <Card onClick={this.onClickImg} className="galleryCard mb-5 text-center">
                    <CardImg top src={photo} alt="Card image cap" className="galleryCartImg" />
                    <CardBody className="galleryCardContent">
                        <CardTitle tag="h6" className="galleryCardUsername" >Duong Long</CardTitle>
                        <CardSubtitle className="mb-2 text-muted galleryCardDate">{date}</CardSubtitle>
                    </CardBody>
                </Card>
                {this.state.isChecked=== 1 ? <SelectPost image ={photo} 
                                                    postID ={id} index={this.props.index}
                                                    handleSelect={this.handleSelect}  /> : ''}
            </div>
        )
    }
}
