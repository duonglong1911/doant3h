import React, { Component } from 'react';
import './imagesgallery.css'
import { Button, ButtonGroup } from 'reactstrap';
import Pagination from './../../layout/pagination/Pagination'
import ImageGalleryItem from './ImageGalleryItem';

class ImagesGallery extends Component {

    constructor(props) {
            super(props);
            this.state = {
                  images:[],
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
                //các option
                const newdate = new Date();
                const newYear = newdate.getFullYear();
                var monthLetter = ["", "Tháng 1", 'Tháng 2', "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", 'Tháng 8', "Tháng 9", "Tháng 10", 'Tháng 11', 'Tháng 12']
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


                const postsHaveImg = this.props.postsList.filter(el => el.photo)
                this.setState({
                    images: postsHaveImg,
                })
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

        var getday = newdate.getDate();
        //filter ảnh
        currentImages = currentImages.filter(image=>{
            if(a === 'all'){
                return image;
            }
            else if(a === 'day'){
                return image.date.slice(13,15) === (getday < 10 ? '0'+getday : getday).toString();
            }
            else if(a === 'month'){
                return image.date.slice(16,18) === (getMonth < 10 ? '0'+getMonth : getMonth).toString();
            }
            else if(a === 'year'){
                return image.date.indexOf(newdate.getFullYear()) !== -1;
            }
            return image;  
        }) 
        if(day){
            currentImages = currentImages.filter(image=>{
                if(Number(day) === 0){
                    return image;
                }
                else{
                 return image.date.slice(13,15) === day.toString()
                }
            }) 
        }
        if(month){
            currentImages = currentImages.filter(image=>{
                if(Number(month) === 0){
                    return image;
                }
                else{
                    return image.date.slice(16,18) === month.toString()
                }
            }) 
        }
        if(year){
            currentImages = currentImages.filter(image=>{
                if(Number(year) === 0){
                    return image;
                }
                else{
                    return image.date.indexOf(year) !== -1
                }
            }) 
        }
        return (
            <div className="imagesgallery">
                <div className="galleryWrapp">
                    <div className="galleryTop container mt-3 mb-3">
                        <h3 className="galleryTopHeader">
                            Bộ sưu tập của mọi người:
                        </h3>
                    </div>
                    <div className="galleryCenter container">
                        <div className="inputSearch">
                            <h4>Tìm kiếm</h4>
                            <div className="selectDate">
                                <select name="day" id="day" onChange={this.onChange} value={day}>
                                    <option value={0}>Ngày</option>     
                                </select>
                                <select name="month" id="month" onChange={this.onChange} value={month}>
                                    <option value={0}>Tháng</option>     
                                </select>
                                <select name="year" id="year" onChange={this.onChange} value={year}>
                                    <option value={0}>Năm</option>     
                                </select>
                            </div>
                            
                        </div>
                        <div className="galleryCenterButtons m-3 text-center">
                            <ButtonGroup>
                                    <Button color="primary" className="m-1" onClick={() => this.onClickFilter('all')}>Tất cả</Button>
                                    <Button color="primary" className="m-1" onClick={() => this.onClickFilter('day')}>Theo ngày </Button>
                                    <Button color="primary" className="m-1" onClick={() => this.onClickFilter('month')}>Theo tháng</Button>
                                    <Button color="primary" className="m-1" onClick={() => this.onClickFilter('year')}>Theo năm</Button>
                                </ButtonGroup>
                        </div>
                        <div className="galleryCenterContent mt-5">
                            <div className="row">
                                {
                                    currentImages.map((image,index)=> 
                                        <ImageGalleryItem 
                                        key={image.id}
                                        id={image.id}
                                        photo={image.photo} 
                                        index={index}
                                        date={image.date}
                                        userId={image.userId}
                                        usersList={this.props.usersList}
                                        postsList={this.props.postsList}
                                        />
                                    )
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