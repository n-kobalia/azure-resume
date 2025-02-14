window.addEventListener("DOMContentLoaded", (event) => {
    getVisitCount();
});

const functionApiURL = "https://nk-azureresume-function-app.azurewebsites.net/api/GetResumeCounter?";
const getVisitCount = () => {
    fetch(functionApiURL, {
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