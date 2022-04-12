import { maxChunck, data, dataCount } from "./mockStore";

export default class BookstoreService {
    
    pageItemsCount = maxChunck;
    
    booksCount = dataCount;

    data = data;


    getBooks(){

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() > 0.8){
                   reject(new Error('Something wrong')) 
                }
                resolve([this.data, this.booksCount])
            }, 700);
        }) 
    }
}