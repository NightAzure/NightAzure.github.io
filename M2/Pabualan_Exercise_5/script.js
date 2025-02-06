const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const button = document.getElementById('newQuoteBtn');

// Function to fetch a random quote 
function fetchQuote() {
    // Show loading message while fetching 
    quoteElement.textContent = 'Loading quote...';
    authorElement.textContent = '';

    // Fetch all quotes from the DummyJSON API 
    fetch('https://dummyjson.com/quotes')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const randomIndex = Math.floor(Math.random() *
                data.quotes.length);
            const randomQuote = data.quotes[randomIndex];
            quoteElement.textContent = `"${randomQuote.quote}"`;
            authorElement.textContent = `- ${randomQuote.author}`;
            document.getElementById("x").href = `http://x.com/share?text=${quoteElement.textContent}`
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteElement.textContent = 'Failed to load quote. Please try again.';
            authorElement.textContent = '';
        });
}

document.getElementById("copyBtn").addEventListener('click', (e)=>{
    navigator.clipboard.writeText(quoteElement.innerHTML);
})
button.addEventListener('click', fetchQuote);
fetchQuote();