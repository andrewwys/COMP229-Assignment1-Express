// Filename: scripts/app.js
//   Wing Yin Andrew Sit (# 301188571)
//   Creation date: 2021/09/27

// IIFE - Immediately Invoked Function Expression
(function () {

    function Start() {
        console.log("App Started...");


        // Confirmation before deleting business contacts
        let deleteButtons = document.querySelectorAll('.btn-danger');

        for(button of deleteButtons) {
            button.addEventListener('click', (event) => {
                if(!confirm("Are you sure?")) {
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);
})();