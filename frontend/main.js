window.addEventListener("DOMContentLoaded",(event) =>{
    getVisitCount();
})

const functionApiURL = 'https://azresumeapi.azure-api.net/nk-azureresume-function-app';
const subKey = '6fa71862aee84a9f94225cdc3cf98f1b';

const getVisitCount = () =>{
    let count =30;
    fetch(functionApiURL, {
        method: 'GET',
        headers: {
            'Ocp-Apim-Subscription-Key': subKey}    
    }).then(response =>{
        return response.json();
    }).then(response =>{
        console.log("Website called function API");
        count = response.count;
        document.getElementById("counter").innerText=count;
    }).catch(function(error){
        console.log("error");
    });
    return count;
}