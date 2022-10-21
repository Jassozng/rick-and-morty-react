const buildUrl = (requestArr, type) => {
    let numbers = []
    if(requestArr.length != undefined){
        requestArr.map((value) => {
            const pageRegex = new RegExp(/\d{1,}/);
            const number = value.match(pageRegex);
            numbers.push(number[0]);
        });
    }
    else{
        if(requestArr.name != "unknown"){
            const pageRegex = new RegExp(/\d{1,}/);
            const number = requestArr.url.match(pageRegex);
            numbers.push(number[0]);
        }
    }
    return `https://rickandmortyapi.com/api/${type}/${numbers}`;
}

export default buildUrl;