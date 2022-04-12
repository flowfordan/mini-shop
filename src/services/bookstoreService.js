import { data, dataCount } from "./mockStore";

export default class BookstoreService {
    
    itemsPerPage = 4;
    
    booksCount = dataCount;

    data = data;


    getBooks(currentPage){

        const idxStart = this.itemsPerPage*(currentPage - 1)
        const idxEnd = idxStart + (this.itemsPerPage - 1)

        const currentData = [...this.data.slice(idxStart, idxEnd + 1)]

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() > 0.8){
                   reject(new Error('Something wrong')) 
                }
                resolve([currentData, this.booksCount, this.itemsPerPage])
            }, 700);
        }) 
    }
}