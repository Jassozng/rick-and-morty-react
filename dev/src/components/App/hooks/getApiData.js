const dataRequest = async (setCharacters, url) => {
    if(url != null){
        const fetchRequest = await fetch(url);
        const apiResults = await fetchRequest.json();
        setCharacters(apiResults);
    }
}

export default dataRequest;