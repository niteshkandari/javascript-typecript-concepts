//getter and setter

class WareHouse {
    protected articles: string[] = [];
    
    // get getArticles() {
    //     if(this.articles.length < 1) {
    //         throw new Error('no data available');
    //     }
    //     return this.articles, + 'articles via getter';
    // }
    // set setArticles(articles: string){
    //     this.addArticles(articles);
    // }

    constructor(private readonly id:string,public name:string) {
       this.id = id;
       this.name = name;
    }
    
    addArticles(args:string){
     this.articles.push(args);
    }

    describe(){
        console.log(`id: ${this.id},name: ${this.name}, articles: ${this.articles}`)
    }
}

class Factory extends WareHouse {
    private article:string[] = [];
    constructor(id:string,public name:string){
       super(id,name);
       this.article = this.articles;
    }
    showArticles(){
        console.log(this.article,"protected property of super classs")
    }
};

const consumer = new Factory("@123","Johnson");
const consumer_2 = new WareHouse('1','Nick');

consumer.addArticles("harlays");
consumer.addArticles("davidson");

consumer.describe();
consumer.showArticles();


// consumer.setArticles = "!@#!@#";
// console.log(consumer_2.getArticles);