import axios from 'axios';

// console.log(axios.isCancel('something'));

const KEY = "36536171-20dffb6feebbd7a17f40a2c96";

export async function fetchImg(query, page){
    const respond = await axios(`https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return respond;
}

