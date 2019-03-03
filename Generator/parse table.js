
function modifyProductionList(productions){
    var n = productions.length;
    productions = productions.map(p => p.split(" "));
    var nonTerminals = new Set(productions.map(p => p[0]));   
    nonTerminals = Array.from(nonTerminals);
    
    var lis = {};
    for ( var i = 0; i < nonTerminals.length; ++i) {
        var nProductions = [];                                     
        for ( var j = 0; j < n; ++j)
            if(productions[j][0] == nonTerminals[i])
                nProductions.push(productions[j].slice(2));  
        lis[nonTerminals[i]] = { "productions" : nProductions };             
    }
    return [lis, nonTerminals];
}

function printModifiedProductions(lis) {
    for( var i in lis) {
        console.log(i);
        var productions = lis[i]["productions"];
        for ( var j = 0; j < productions.length; ++j)
            console.log(productions[j]);
    }
}

var production = [
    "E = T E'",
    "E' = + T E'",
    "E' = #",
    "T = F T'",
    "T' = * F T'",
    "T' = #",
    "F = ( E )",
    "F = id" 
];
var [production, nonTerminals]  = modifyProductionList(production);
printModifiedProductions(production);
console.log(nonTerminals);
