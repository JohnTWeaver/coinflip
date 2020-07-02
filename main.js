

let coin = {
    state: 0,
    string: '',
    flip: function () {
        return this.state = Math.floor(Math.random() * 2);
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function () {
        if (this.state === 0) {
            return this.string = 'Head'
        }
        else {
           return this.string = 'Tails'
        }
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function () {
        let image = document.createElement('img');
        if (this.state === 0) {
            image = "https://aprojectforkindness.files.wordpress.com/2013/02/penny.jpg?w=600"
        }
        else { image = "https://coins.thefuntimesguide.com/files/Redesigned-Lincoln-Cent-Presidency-in-DC-Reverse.jpg"

        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};

// let parentNode = document.getElementById("main")
let textOutput = document.createElement('div')
function display20Flips() {
    let totalFlips = '';
    for (let i = 0; i < 20; i++) {
         coin.flip()
         totalFlips += " " + coin.toString() + " "
        //  textOutput.append(coin.toString())
    }
    document.body.append(totalFlips)
    return
}

// let pictureOutput = document.createElement('img')
function display20images(){

    for (let i = 0; i < 20; i++) {
         coin.flip()
         let pictureOutput = document.createElement('img')
        //  pictureOutput += coin.toHTML() + " "
        // textOutput.append(coin.toString())
        pictureOutput.src = coin.toHTML()
        document.body.append(pictureOutput)

    }
    
    return 
}

display20Flips()
display20images()