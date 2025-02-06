function generate() {
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random') 
    .then(response => response.json())  
    .then(data => { 

        const textClass = document.getElementsByClassName("uselessText")[0];
        const sourceID = document.getElementById("uselessSource");

        textClass.innerHTML = data['text'];
        sourceID.innerHTML = data['source'];

        let arr = JSON.parse(localStorage.getItem("facts")) || []; 

        arr.push([data['text'], data['source'], data['source_url']]);

        localStorage.setItem("facts", JSON.stringify(arr));
        updateHistory();
    }) 
    .catch(error => console.error('Error fetching data:', error)); 
}


function updateHistory(){
    let historyContainer = document.getElementsByClassName("historyContainer")[0];
    let facts = JSON.parse(localStorage.getItem("facts"));
    if(facts==null) return;
    let initial = `<div class="historyTitle">Useless Facts' History</div><div class="histories">`;
    for(let i=0; i<facts.length;i++){
        initial+=`<div id="${i}" class="historyCard">
                <div class="historySec">
                    <div class="historyText">${facts[i][0]}</div>
                    <div class="historyX">X</div>
                </div>
                <div class="source">
                    - ${facts[i][1]}
                </div>
            </div>`;
    }
    historyContainer.innerHTML=initial+`</div>`;

    let deleteButtons = document.getElementsByClassName("historyX");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", function() {
            deleteFact(i);
        });
    }
}

function deleteFact(index) {
    let facts = JSON.parse(localStorage.getItem("facts"));
    facts.splice(index, 1);
    localStorage.setItem("facts", JSON.stringify(facts));
    updateHistory();
}