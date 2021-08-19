import React, { Component } from 'react';
import './imagesgallery.css'
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button, ButtonGroup
} from 'reactstrap';
import {Posts} from './../../../dataPost.js'
import Pagination from './../../layout/pagination/Pagination'

class ImagesGallery extends Component {

    constructor(props) {
            super(props);
            this.state = {
                  images:Posts,
                  loading:false,
                  currentPage:1,
                  imagesPerPage:8,
                };
            }

    render() {

        const indexOfLastImage = this.state.currentPage * this.state.imagesPerPage;
        const indexOfFirstImage = indexOfLastImage - this.state.imagesPerPage;
        const currentImages = this.state.images.slice(indexOfFirstImage,indexOfLastImage);

        const paginate = (pageNumber) => {
            this.setState({
                currentPage:pageNumber
            })
        } 


        return (
            <div className="imagesgallery">
                <div className="galleryWrapp">
                    <div className="galleryTop container mt-3 mb-3">
                        <h3 className="galleryTopHeader">
                            Member's photos
                        </h3>
                    </div>
                    <div className="galleryCenter container">
                        <div className="galleryCenterButtons m-3 text-center">
                            <ButtonGroup>
                                    <Button color="primary" className="m-1" >All</Button>
                                    <Button color="primary" className="m-1" >Day </Button>
                                    <Button color="primary" className="m-1" >Week</Button>
                                    <Button color="primary" className="m-1" >Month</Button>
                                    <Button color="primary" className="m-1" >Year</Button>
                                </ButtonGroup>
                        </div>
                        <div className="galleryCenterContent mt-5">
                            <div className="row">
                                {
                                    currentImages.map((image)=> {
                                        const { id, photo, date} = image;

                                        return(
                                            <div className="col-3" key={id}>
                                                <Card className="galleryCard mb-5 text-center">
                                                    <CardImg top src={photo} alt="Card image cap" className="galleryCartImg" />
                                                    <CardBody className="galleryCardContent">
                                                        <CardTitle tag="h6" className="galleryCardUsername" >Duong Long</CardTitle>
                                                        <CardSubtitle className="mb-2 text-muted galleryCardDate">{date}</CardSubtitle>
                                                    </CardBody>
                                                </Card>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <Pagination imagesPerPage={this.state.imagesPerPage} totalImages={this.state.images.length} paginate={paginate} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ImagesGallery;