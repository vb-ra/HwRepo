class VideoGame {
    //Instance attributes
    title: string;              //title of the game
    developer: string;          //name of the development company or developer
    availableCopies: number;    //number of copies available of this game
    price: number;              //price of the game
    copiesSold: number;         //number of copies already sold

    //Static attributes
    static availableGames: string[];    //an array to store all games that have more than 0 availableCopies
    static soldOutGames: string[];      //an array to store all games that have 0 availableCopies
    static totalSold: number;           //total sum of the copies already sold

    constructor(title: string, developer: string, availableCopies: number, price: number, copiesSold: number) {
        this.title = title;
        this.developer = developer;
        this.availableCopies = availableCopies;
        this.price = price;
        this.copiesSold = copiesSold;
        VideoGame.availableGames = VideoGame.availableGames;
        VideoGame.soldOutGames = VideoGame.soldOutGames;
        VideoGame.totalSold = VideoGame.totalSold;
    }

    //Instance methods
    
    isAvailable(): boolean {
        return this.availableCopies >= 0;       //returns true if the availableCopies value is more than 0.
    }

    
    sell(): number {
        this.availableCopies --;                //decreases the availableCopies instance attribute by 1
        this.copiesSold ++;                     //increases copiesSold by 1
        VideoGame.totalSold ++;                 //updates totalSold
        console.log(`
            The sold unit is: ${this.title}`);  //Print each unit being sold before returning
        return this.price;                      //Returns the price of the sold game.
    }
    /*
    If a Game has 0 copies after selling it, add the game to the soldOutGames array and remove it from the availableGames array.
    .
    */

    //Static methods
    static getTotalSold(): number {   //returns the total money earned from all games.
        return VideoGame.totalSold;
    }

    static sellGames(): {  //receives an array of videogames as parameter and sells each of them. Returns the total price of the sold games.
    }
}