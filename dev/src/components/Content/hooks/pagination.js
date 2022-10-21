const getActualPage = (pageInfo) => {
    if(pageInfo.next != null){
        const pageRegex = new RegExp(/\d{1,}/);
        const currentPage = pageInfo.next.match(pageRegex);
        return currentPage - 1;
    }else{
        return pageInfo.pages;
    }
}

const getDataType = (url) => {
    const typeRegex = new RegExp(/character|location|episode/);
    const currentType = url.match(typeRegex);
    return currentType[0];
}

const isDisabled = (hasPrevOrNext) => {
    return hasPrevOrNext == null ? true : false
}

export { getActualPage, getDataType, isDisabled };