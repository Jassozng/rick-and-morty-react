import { getDataType } from '../../Content/hooks/pagination.js'

const dataRequest = async (setApiData, url) => {
    if(url != null){
        const fetchRequest = await fetch(url);
        let apiResults = await fetchRequest.json();
        if(apiResults.results == undefined){
            if(apiResults.url == undefined){
                apiResults.url = getDataType(url);
            }
            apiResults.results = apiResults.length == undefined ? [apiResults] : apiResults;
            apiResults.info = {};
        }
        setApiData(apiResults);
    }
}

export default dataRequest;