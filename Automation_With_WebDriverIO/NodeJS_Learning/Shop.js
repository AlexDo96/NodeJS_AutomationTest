class Shop {
    constructor(shopName){
        this._shopName = shopName;
    }

    greeting(){
        console.log(this._shopName + "Xin chao quy khach !");
    }

    seeStuffs(){
        console.log(this._shopName + "Moi quy khach xem hang !")
    }

    sayGoodBye(){
        console.log(this._shopName + "Tam biet quy khach !");
    }
}

let shop = new Shop("Shopee");
module.exports = shop; // Export Shop instance

