document.addEventListener("DOMContentLoaded", function() {
    function typeWriterEffect(element, text, speed = 50) {
        let index = 0;
        element.innerHTML = ""; // Καθαρίζει το κείμενο πριν αρχίσει το εφέ
        
        function type() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    function askWikipedia() {
        var question = document.getElementById("question").value.toLowerCase();
        var responseElement = document.getElementById("response");
        let response = "";

        // Απαντήσεις για ποδόσφαιρο
        if (question.includes("ποια είναι η καλύτερη ομάδα;")) {
            response = "Δεν υπάρχει αντικειμενική απάντηση, αλλά η Real Madrid και η FC Barcelona είναι από τις πιο επιτυχημένες!";
        } 
        else if (question.includes("ποιος είναι ο καλύτερος παίκτης;")) {
            response = "Ο Lionel Messi και ο Cristiano Ronaldo θεωρούνται οι κορυφαίοι της εποχής τους!";
        } 
        else if (question.includes("ποιο είναι το καλύτερο πρωτάθλημα;")) {
            response = "Η Premier League της Αγγλίας είναι από τα πιο ανταγωνιστικά πρωταθλήματα στον κόσμο.";
        } 
        else {
            response = "Δεν γνωρίζω την απάντηση, αλλά μπορώ να μάθω!";
        }

        // Εφαρμογή του εφέ γραφομηχανής στην απάντηση
        typeWriterEffect(responseElement, response);
    }

    // Συνδέουμε το event handler στο κουμπί
    document.querySelector(".search-box button").addEventListener("click", askWikipedia);
});
