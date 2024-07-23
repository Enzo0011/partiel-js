const articles = document.querySelectorAll("#content article");

articles.forEach(article => {
    const header = article.querySelector("h2");
    header.addEventListener("click", () => {
        articles.forEach(a => {
            if (a !== article) a.classList.remove("expanded");
        });
        article.classList.toggle("expanded");
    });
});