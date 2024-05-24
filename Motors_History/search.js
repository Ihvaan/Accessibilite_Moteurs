// Fonction pour obtenir le paramètre de recherche dans l'URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Fonction pour rediriger vers la page correspondant au mot-clé
function redirectToPage(keyword) {
    const pages = {
        'v8': 'v8.html',
        'v6': 'v6.html',
        'i4': 'i4.html',
        'electrique': 'electric.html',
        'i6': 'i6.html',
        'vr6': 'vr6.html',
        'v10': 'v10.html',
        'v12': 'v12.html',
        'w16': 'w16.html',
        'w8': 'w8.html',
        'eb': 'eb.html',
        'c3': 'c3.html',
        'w12': 'w12.html'
    };
    const page = pages[keyword];
    if (page) {
        window.location.href = page;
    } else {
        const noResultsElement = document.getElementById('noResults');
        noResultsElement.style.display = 'block'; // Affiche le message d'erreur
        noResultsElement.setAttribute('aria-live', 'assertive'); // Annonce le message d'erreur
    }
}

// Exécuter la redirection lors de la soumission du formulaire de recherche
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const keyword = document.getElementById('search').value.trim().toLowerCase();
    redirectToPage(keyword);
});

// Redirection directe si le mot-clé est présent dans l'URL lors du chargement de la page
const searchQuery = getQueryParam('q');
if (searchQuery) {
    redirectToPage(searchQuery.trim().toLowerCase());
}
