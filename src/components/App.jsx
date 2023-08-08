import {useState,useEffect} from 'react';
import {Searchbar} from "components/Searchbar/Searchbar"
import {ImageGallery} from "components/ImageGallery/ImageGallery"
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from "components/Loader/Loader";
import {fetchImg} from "components/API"
// import { nanoid } from 'nanoid'
export function App (){
  const [images, setImages]=useState([])
  const [modalImage, setModalImage]=useState({})
  // const [totalHit, setTotalHit]=useState(null)
  const [error, setError]=useState(null)
  const [isLoading, setIsLoading]=useState(false)
  const [showModal, setShowModal]=useState(false)
  const [query, setQuery]=useState("")
  const [page, setPage]=useState(1)
  const [loadMore, setLoadMore] =useState(false)

  const handleQuery = (value) =>{
    setQuery(value)
  }
  const onImageClick = (image) =>{
    setModalImage(image)
    setShowModal(true)
  }
  const onCloseModal =() =>{
    setShowModal(false)
  }
  const onClickButton =() =>{
    setPage(prevState => prevState + 1)
  } 
    useEffect(() => {
      if(!query){
        return
      }
     
      setIsLoading(true);

      fetchImg(query, page)
        .then(response => {
          console.log(response)
          if (response.request.status === 200) {
            return response;
          }
          return Promise.reject(new Error(`Add another word, not: ${query}`));
        })
        .then(({ data }) => {   
          setImages(prevImages => [...prevImages, ...data.hits]);
          // setTotalHit(data.totalHits);
        })
        .catch(error => setError(error))
        .finally(() => {
          setIsLoading(false);
          setLoadMore(true);
        });
    }, [query, page]);
    
  return (
    <div>
      <Searchbar onSubmit={handleQuery}/>
      {error &&  <p>You see the {error.message}</p>}
      {isLoading && <Loader/>}
      <ImageGallery onImage={onImageClick} images={images}/>
      {showModal && <Modal image={modalImage} onCloseModal={onCloseModal}/>}
      {loadMore && <Button onClick={onClickButton}/>} 
    </div>
  );
}