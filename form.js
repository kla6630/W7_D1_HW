document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("aggiungi_utente")
    .addEventListener("click", aggiungiUtente);

  function aggiungiUtente() {
    console.log("Button clicked");
    var nome = document.getElementById("nome").value;
    console.log("Nome: ", nome);
    var cognome = document.getElementById("cognome").value;
    console.log("Cognome: ", cognome);
    var data_nascita = document.getElementById("data_nascita").value;
    console.log("Data di nascita: ", data_nascita);
    var tabella = document.getElementById("tabella_utenti");
    console.log("Tabella: ", tabella);
    var riga = document.createElement("tr");
    var cella1 = document.createElement("td");
    var cella2 = document.createElement("td");
    var cella3 = document.createElement("td");
    cella1.innerHTML = nome;
    console.log("Cella1: ", cella1);
    cella2.innerHTML = cognome;
    console.log("Cella2: ", cella2);
    cella3.innerHTML = data_nascita;
    console.log("Cella3: ", cella3);
    riga.appendChild(cella1);
    riga.appendChild(cella2);
    riga.appendChild(cella3);
    tabella.appendChild(riga);
    console.log("Riga aggiunta: ", riga);
  }
});
