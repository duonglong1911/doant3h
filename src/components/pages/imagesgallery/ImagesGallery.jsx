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
                  a: '',
                  day: 0,
                  month: 0,
                  year: 0
                };
            }

            onClickFilter = (nameFilter) =>{
                this.setState({
                    a: nameFilter
                })
            }
            componentDidMount(){
                const newdate = new Date();
                const newYear = newdate.getFullYear();
                var monthLetter = ["", "January", 'February', "March", "April", "May", "June", "July", 'August', "September", "October", 'November', 'December']
                var day = document.getElementById('day');
                for(let i = 1; i <= 31; i++){
                   day.innerHTML += '<option value='+(i<10?"0"+i:i)+'>'+(i<10?"0"+i:i)+'</option>'
                }
                var month = document.getElementById('month');
                for(let i = 1; i < monthLetter.length; i++){
                    month.innerHTML += '<option value='+(i<10?"0"+i:i)+'>'+monthLetter[i]+'</option>'
                }
                var year = document.getElementById('year');
                for(let i = newYear; i >= 1980; i--){
                    year.innerHTML += '<option value='+i+'>'+i+'</option>'
                }
            }
            onChange = (event) =>{
                const target = event.target;
                const value = target.value;
                const name = target.name;
                this.setState({
                    [name]: value
                })
            }
    render() {
        const newdate = new Date();
        const indexOfLastImage = this.state.currentPage * this.state.imagesPerPage;
        const indexOfFirstImage = indexOfLastImage - this.state.imagesPerPage;
        var currentImages = this.state.images.slice(indexOfFirstImage,indexOfLastImage);
        const paginate = (pageNumber) => {
            this.setState({
                currentPage:pageNumber
            })
        } 

        var {a, day, month, year} = this.state

        var getMonth = newdate.getMonth()+1;
        currentImages = currentImages.filter(image=>{
            if(a === 'all'){
                return image;
            }
            else if(a === 'day'){
                return image.date.slice(0,2) === newdate.getDate().toString();
            }
            else if(a === 'month'){
                return image.date.slice(3,5) === (getMonth < 10 ? '0'+getMonth : getMonth).toString();
            }
            // else if(a === 'day'){
            //     return image.date.indexOf(newdate.getDate()) !== -1;
            // }
            else if(a === 'year'){
                return image.date.indexOf(newdate.getFullYear()) !== -1;
            }
            return image;  
        }) 
        if(day){
            currentImages = currentImages.filter(image=>{
                return image.date.slice(0,2) === day.toString()
            }) 
        }
        if(month){
            currentImages = currentImages.filter(image=>{
                return image.date.slice(3,5) === month.toString()
            }) 
        }
        if(year){
            currentImages = currentImages.filter(image=>{
                return image.date.indexOf(year) !== -1
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
                        <div className="inputSearch">
                            <h4>Tìm kiếm</h4>
                            <div className="selectDate">
                                <select name="day" id="day" onChange={this.onChange} value={day}>
                                    <option value="0">Ngày</option>     
                                </select>
                                <select name="month" id="month" onChange={this.onChange} value={month}>
                                    <option value="0">Tháng</option>     
                                </select>
                                <select name="year" id="year" onChange={this.onChange} value={year}>
                                    <option value="0">Năm</option>     
                                </select>
                            </div>
                            
                        </div>
                        <div className="galleryCenterButtons m-3 text-center">
                            <ButtonGroup>
                                    <Button color="primary" className="m-1" onClick={() => this.onClickFilter('all')}>All</Button>
                                    <Button color="primary" className="m-1" onClick={() => this.onClickFilter('day')}>Day </Button>
                                    <Button color="primary" className="m-1" onClick={() => this.onClickFilter('week')}>Week</Button>
                                    <Button color="primary" className="m-1" onClick={() => this.onClickFilter('month')}>Month</Button>
                                    <Button color="primary" className="m-1" onClick={() => this.onClickFilter('year')}>Year</Button>
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