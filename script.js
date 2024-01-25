//your JS code here. If required.
// Sample data for articles in each category
var category1Articles = ["Article 1", "Article 2", "Article 3"];
var category2Articles = ["Article 4", "Article 5", "Article 6", "Article 7"];
var category3Articles = ["Article 8"];
var category4Articles = ["Article 9", "Article 10", "Article 11", "Article 12", "Article 13"];

// Function to dynamically populate articles in each category
function populateArticles(categoryId, articles) {
    var categoryList = document.getElementById(categoryId);

    articles.forEach(function (article) {
        var listItem = document.createElement("li");
        listItem.textContent = article;
        categoryList.appendChild(listItem);
    });
}

// Populate articles for each category
populateArticles("category1", category1Articles);
populateArticles("category2", category2Articles);
populateArticles("category3", category3Articles);
populateArticles("category4", category4Articles);
