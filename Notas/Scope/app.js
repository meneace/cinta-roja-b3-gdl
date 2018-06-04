// Syncronous
/**var  a = "Hello World";

function b(){
    console.log("Called B");
}

b();
console.log(a);**/

// Syncronous

/**function a() {
    myVar = 2;
    b();

}


function b() {
    console.log(myVar);
}

var myVar = 1;
a();**/

// Objects JS

let person = {
    name : "Ken",
    last_name: "Márquez",
    phone: 5544332211,
    married: false ,
    address : {
        street : "Antares",
        cp : 54321
    },
    cards: [
        {
            numero: 55332212123123,
            cvv: 111,
            mm: 03,
            yy: 21
        },
        {
            numero: 4435345345,
            cvv: 111,
            mm: 04,
            yy: 21
        },
        {
            numero: 1213123123123123,
            cvv: 111,
            mm: 05,
            yy: 22
        }
    ]
}

console.log(person.last_name)
console.log(person.address.street)
console.log(person.cards[1].numero)
console.log(person.cards.length)
console.log(person["name"])



colors = {
    "colors": [
        {
            "color": "black",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [255, 255, 255, 1],
                "hex": "#000"
            }
        },
        {
            "color": "white",
            "category": "value",
            "code": {
                "rgba": [0, 0, 0, 1],
                "hex": "#FFF"
            }
        },
        {
            "color": "red",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [255, 0, 0, 1],
                "hex": "#FF0"
            }
        },
        {
            "color": "blue",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [0, 0, 255, 1],
                "hex": "#00F"
            }
        },
        {
            "color": "yellow",
            "category": "hue",
            "type": "primary",
            "code": {
                "rgba": [255, 255, 0, 1],
                "hex": "#FF0"
            }
        },
        {
            "color": "green",
            "category": "hue",
            "type": "secondary",
            "code": {
                "rgba": [0, 255, 0, 1],
                "hex": "#0F0"
            }
            
        },
    ]
};

//green rgba = [0, 255, 0, 1] , hex = #0F0

for (let i = 0; i < colors.colors.length; i++) {
    console.log(colors.colors[i].color +" rgba = "+ colors.colors[i].code.rgba);
}

colors2 = {
    "aliceblue": [240, 248, 255, 1],
    "antiquewhite": [250, 235, 215, 1],
    "aqua": [0, 255, 255, 1],
    "aquamarine": [127, 255, 212, 1],
    "azure": [240, 255, 255, 1],
    "beige": [245, 245, 220, 1],
    "bisque": [255, 228, 196, 1],
    "black": [0, 0, 0, 1],
    "blanchedalmond": [255, 235, 205, 1],
    "blue": [0, 0, 255, 1],
    "blueviolet": [138, 43, 226, 1],
    "brown": [165, 42, 42, 1],
    "burlywood": [222, 184, 135, 1],
    "cadetblue": [95, 158, 160, 1],
    "chartreuse": [127, 255, 0, 1],
    "chocolate": [210, 105, 30, 1],
    "coral": [255, 127, 80, 1],
};



for (let key in colors2) {
    //console.log(key); 
}
