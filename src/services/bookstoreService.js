export default class BookstoreService {
    
    data = [{
            id: 1,
            title: 'V chem moya vera',
            author: 'L.N. Tolstoy',
            price: 45,
            coverImage: 'https://s1.livelib.ru/boocover/1000005935/200/e9f3/boocover.jpg'},
        {
            id: 2,
            title: 'Atomic Habits',
            author: 'J. Clear',
            price: 45,
            coverImage: 'https://s1.livelib.ru/boocover/1000005935/200/e9f3/boocover.jpg'},
        {
            id: 3,
            title: 'V chem moya vera',
            author: 'L.N. Tolstoy',
            price: 32,
            coverImage: 'https://s1.livelib.ru/boocover/1000005935/200/e9f3/boocover.jpg'},
        {
            id: 4,
            title: 'V chem moya vera',
            author: 'L.N. Tolstoy',
            price: 24,
            coverImage: 'https://s1.livelib.ru/boocover/1000005935/200/e9f3/boocover.jpg'},
    ];


    getBooks(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data)
            }, 700);
        }) 
    }
}