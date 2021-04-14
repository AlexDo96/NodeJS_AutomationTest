class Animal {
    //Setter
    set eyeColor(color) {
        this._eyeColor = color  //Use "_" before instant variable to avoid infinity loop
    }
    //Getter
    get eyeColor(){
        return this._eyeColor
    }   
}

let vit = new Animal()
vit.eyeColor = "Yellow"
console.log(vit)