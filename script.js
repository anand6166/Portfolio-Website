var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var navLinks = document.querySelectorAll(".aside .nav li a");

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        navLinks.forEach(navLink => navLink.classList.remove("active"));
        // Add active class to the clicked link
        this.classList.add("active");
    });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwV08102hdy35PhnVlrkl1l2Nls8uqsoOfomkVP_9mld8pzV4Luwxo3BZ9gHMhFMlhI/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent"
        setTimeout(function(){
            msg.innerHTML = ""
        },2000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


const showResumeButton = document.getElementById('resume');
const resumeModal = document.getElementById('resumeModal');
const closeButton = document.querySelector('.close-button');

// Show the resume data in a modal
showResumeButton.addEventListener('click', function () {
    resumeModal.style.display = 'block';
});

// Close the modal when the close button is clicked
closeButton.addEventListener('click', function () {
    resumeModal.style.display = 'none';
});

// Close the modal when clicking outside of the modal content
window.addEventListener('click', function (event) {
    if (event.target === resumeModal) {
        resumeModal.style.display = 'none';
    }
});