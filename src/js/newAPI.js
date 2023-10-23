export default class newAPIQuery {
    #keyWord = '';
    constructor(){
        this.API_KEY = 'kKo68Zl5Ocun4s8yoyGjuClavE8LAUw8';
        this.ROOT_URL = 'https://app.ticketmaster.com/discovery/v2/';
        this.EvID = 'Z7r9jZ1AdaeGo';

    }
    
    async GetEventsByKeyWord(){
        try {
            const projAPI = await fetch(`${this.ROOT_URL}events.json?keyword=${this.eventKeyWord}&apikey=${this.API_KEY}`);
            const projAPI_JSONED = await projAPI.json();
            return projAPI_JSONED;
        }
        catch (error){
            console.log(error);
        }

    }
    get eventKeyWord() {
        return this.#keyWord;
    }
    set eventKeyWord(newKeyWord) {
        this.#keyWord = newKeyWord;
    }
    
}
