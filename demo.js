var pokémon = {
    "about": "this is a JSON demo",
    "list": [
        {
            "id": 1,
            "name": "Bulbasaur",
            "types": [
                "poison",
                "grass"
            ]
        },
        {
            "id": 25,
            "name": "Pikachu",
            "types": [
                "electric"
            ]
        },
        {
            "id": 78,
            "name": "Rapidash",
            "types": [
                "fire"
            ]
        }
    ]
};

// console.log( typeof( pokémon ) );
// console.log( typeof( pokémon.about ) );
// console.log( typeof( pokémon.list ) );
// console.log( Array.isArray( pokémon.list ) );
// console.log( typeof( pokémon.list[0] ) );
// console.log( typeof( pokémon.list[0].id ) );
// console.log( typeof( pokémon.list[1].name ) );
// console.log( typeof( pokémon.list[2].types ) );
// console.log( typeof( pokémon.list[3] ) );
// console.log( typeof( pokémon.list[0].types[1] ) );

function printNamesAndTypes() {
    for(var i=0; i<pokémon.list.length; i++) {
        var s = "";
        s += pokémon.list[i].name + " ( "
        for(var j=0; j<pokémon.list[i].types.length; j++) {
            s += pokémon.list[i].types[j];
            if(j < pokémon.list[i].types.length-1) {
                s += ", ";
            }
        }
        s += " )";
        console.log(s);
    }
}

printNamesAndTypes();