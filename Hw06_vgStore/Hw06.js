var VideoGame = /** @class */ (function () {
    function VideoGame(title, developer, availableCopies, price, copiesSold) {
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
    VideoGame.prototype.isAvailable = function () {
        return this.availableCopies >= 0; //returns true if the availableCopies value is more than 0.
    };
    VideoGame.prototype.sell = function () {
        this.availableCopies--; //decreases the availableCopies instance attribute by 1
        this.copiesSold++; //increases copiesSold by 1
        VideoGame.totalSold++; //updates totalSold
        console.log("\n            The sold unit is: ".concat(this.title)); //Print each unit being sold before returning
        return this.price; //Returns the price of the sold game.
    };
    /*
    If a Game has 0 copies after selling it, add the game to the soldOutGames array and remove it from the availableGames array.
    .
    */
    //Static methods
    VideoGame.getTotalSold = function () {
        return VideoGame.totalSold;
    };
    return VideoGame;
}());
