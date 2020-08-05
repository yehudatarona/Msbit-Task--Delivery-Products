
export const doApiGet = async (_url) => {
    let resp = await fetch(_url);
    let data = await resp.json();
    //console.log("doApiGst",data);
    return data;
}
