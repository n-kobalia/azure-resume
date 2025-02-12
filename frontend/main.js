window.addEventListener("DOMContentLoaded", (event) => {
    getVisitCount();
});

const functionApiURL = '/api/GetResumeCounter';
const getVisitCount = () => {
    fetch(functionApiURL, {
        headers: {
            'x-functions-key': 'hJzrVFG5EHxOEdS5MMklr83fiOIChCd0DDkdxyftnzGtAzFuNKJT6w=='
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("API response:", data);
            document.getElementById("counter").innerText = data.count;
        })
        .catch(error => {
            console.error("Error fetching visit count:", error);
            document.getElementById("counter").innerText = "Error loading count";
        });
};