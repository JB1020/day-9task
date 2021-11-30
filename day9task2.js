(function() { //IIFE function decleration 
    let xhr = new XMLHttpRequest(); //creating new XMLHttpRequest
    xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"); //request to getting value in the link
    xhr.responseType = "json"; //this responsetype is json 
    xhr.onload = () => { //
        let jb = xhr.response;
        // countries in asia
        console.log(jb.filter(n => n.region == 'Asia').map(m => m.name));
        // countries with population less than 2 lakhs
        console.log(jb.filter(n => n.population < 200000).map(m => m.name));
        // name, capital, flag using forEach function
        jb.forEach(function(ab) {
            console.log(ab.name);
            console.log(ab.capital);
            console.log(ab.flag);
        });
        //  total population of countries
        console.log(jb.reduce((acc, val) => {
                return acc + val.population
            }, 0))
            // country which uses US Dollars as currency
        console.log(jb.filter(obj => {
            for (i = 0; i < obj.currencies.length; i++) {
                if (obj.currencies[i].code == "USD") {
                    return true;
                }
            }
        }).map(e => e.name));
    };
    xhr.send();
})(); //function calling