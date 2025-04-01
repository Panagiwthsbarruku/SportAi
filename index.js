// Συνάρτηση για την αποστολή αίτησης στο Wikipedia API
function askWikipedia() {
    const question = document.getElementById("question").value.trim();  // Λήψη της ερώτησης από τον χρήστη

    // Έλεγχος αν η ερώτηση είναι κενή
    if (question === "") {
        document.getElementById("response").textContent = "Παρακαλώ πληκτρολόγησε μια ερώτηση.";
        return;
    }

    // Εμφάνιση απάντησης πριν το αίτημα
    document.getElementById("response").textContent = "Ψάχνω την απάντηση...";

    // Κλήση στο Wikipedia API για επεξεργασία της ερώτησης
    const url = `https://el.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=&titles=${encodeURIComponent(question)}&exchars=500&origin=*`;

    fetch(url)
        .then(response => response.json())  // Μετατροπή της απάντησης σε JSON
        .then(data => {
            console.log(data); // Προσθήκη για έλεγχο της απάντησης
            const pages = data.query.pages;
            const pageId = Object.keys(pages)[0];
            
            if (pages[pageId].extract) {
                // Αν υπάρχει εξαγωγή κειμένου, εμφανίζεται η απάντηση
                document.getElementById("response").innerHTML = pages[pageId].extract;
            } else {
                document.getElementById("response").textContent = "Δεν βρέθηκαν αποτελέσματα για αυτό το θέμα.";
            }
        })
        .catch(error => {
            console.error("Σφάλμα κατά την κλήση του Wikipedia API:", error);
            document.getElementById("response").textContent = "Σφάλμα στην αναζήτηση. Προσπάθησε ξανά.";
        });
}
