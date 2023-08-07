import React from 'react';
import {Searchbar} from "components/Searchbar/Searchbar"
import {ImageGallery} from "components/ImageGallery/ImageGallery"
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from "components/Loader/Loader";
import {fetchImg} from "components/API"
// import { nanoid } from 'nanoid'

export class App extends React.Component{
  state = {
    images:[],
    modalImage: {},
    totalHit: null,
    error: null, 
    isLoading: false,
    showModal: false,
    query: "",
    page: 1,
  }
  handleQuery = (value) =>{
    this.setState({query: value})
  }
  onImageClick = (image) =>{
    this.setState({modalImage: image, showModal:true})
  }
  onCloseModal =() =>{
    this.setState({showModal: false})
  }
  onClickButton =() =>{
    this.setState(prevState => {
      return {page: prevState.page +1}
    })
  }
  componentDidUpdate(prevProp, prevState){
    const {query, page} = this.state;
    if(prevState.query !== query){
      this.setState({images:[], page: 1})
    }
    if(prevState.query !== query || prevState.page !== page){
      this.setState({isLoading:true})
      fetchImg(query, page)
      .then(response =>{
          if(response.request.status === 200){
              return response
          }
          return Promise.reject(
              new Error(`Add another word, not: ${query}`)
          )
      })
     .then(({data})=> this.setState(prevState =>{
      return{
        images: [...prevState.images, ...data.hits],
        totalHit: data.totalHits,
      }
     }))
      .catch(error => this.setState({error}))
      .finally(()=> this.setState({isLoading:false, loadMore: true,}))
    }
  
  }
  render() {
    const {images, error, isLoading, modalImage, totalHit}= this.state
    const loadMore = totalHit > images.length;
    return (
      <>
        <Searchbar onSubmit={this.handleQuery}/>
        {error &&  <p>You see the {error.message}</p>}
        {isLoading && <Loader/>}
        <ImageGallery onImage={this.onImageClick} images={images}/>
        {this.state.showModal && <Modal image={modalImage} onCloseModal={this.onCloseModal}/>}
        {loadMore && <Button onClick={this.onClickButton}/>} 
      </>
    );
  }
}
