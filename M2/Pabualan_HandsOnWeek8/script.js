//https://uselessfacts.jsph.pl/api/v2/facts/random

function generate(){
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random') 
    .then(response => response.json())  // Parse the response as JSON 
    .then(data => { 

        const textClass=document.getElementsByClassName("uselessText")[0];
        // Display user data on the page 
        const sourceID=document.getElementById("uselessSource");

        textClass.innerHTML=data['text'];
        sourceID.innerHTML=data['source'];
        let arr = [];
        let historyStorage = Array(localStorage.getItem("facts"));
        arr = [...arr,...historyStorage];
        arr.push([data['text'],data['source'],data['source_url']])
        console.log(arr);
        localStorage.setItem("facts", arr);

        
    }) 
    .catch(error => console.error('Error fetching data:', error)); 
}



