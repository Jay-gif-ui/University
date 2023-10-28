function performGoogleSearch() {
    // Get the user's search query from the input field
    var query = document.getElementById("searchInput").value;

    // Redirect to Google search with the user's query
    window.location.href = "https://www.google.com/search?q=" + query;

    // Prevent the default form submission
    return false;
}