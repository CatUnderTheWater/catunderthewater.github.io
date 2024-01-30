        // Kod JavaScript
        document.addEventListener("DOMContentLoaded", function() {
            // Pobierz przycisk
            var myButton = document.getElementById("myButton");

            // Ustaw zdarzenie na kliknięcie przycisku
            myButton.addEventListener("click", function() {
                // Losowe położenie
                var randomX = Math.floor(Math.random() * window.innerWidth);
                var randomY = Math.floor(Math.random() * window.innerHeight);

                // Ustaw nowe położenie przycisku
                myButton.style.left = randomX + "px";
                myButton.style.top = randomY + "px";
            });
        });