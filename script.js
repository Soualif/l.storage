//localStorage.setItem(clé,valeur) : Enregistre une valeur dans le storage.
//localStorage-getItem(clé)        : Recupère la de la clé
//localStorage:clears()            : Efface le storage
if(localStorage.getItem("nom") != null)
h1.textContent = `Bonjours ${localStorage.getItem("nom")}`

btn.onclick = () => {
    localStorage.setItem("nom",nom.value);

}
