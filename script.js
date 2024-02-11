
document.addEventListener("DOMContentLoaded", function() {
    const yesRadioButton = document.getElementById("yes");
    yesRadioButton.addEventListener("click", function() {
        if (yesRadioButton.checked) {
            window.location.href = "page2.html"; 
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const nextButton = document.getElementById("nextButton");
    let nextPage = nextButton.getAttribute("data-next-page");
    
    nextButton.addEventListener("click", function() {
        window.location.href = nextPage;
    });
});

