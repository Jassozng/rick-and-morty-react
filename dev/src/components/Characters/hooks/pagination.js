const getActualPage = (pageInfo) => {
    if(pageInfo.next != null){
        const pageRegex = new RegExp(/\d{1,}/);
        const currentPage = pageInfo.next.match(pageRegex);
        return currentPage - 1;
    }else{
        return pageInfo.pages;
    }
}

export default getActualPage;