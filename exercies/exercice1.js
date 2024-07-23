const articles = document.querySelectorAll("#content article");
const chapterCount = document.getElementById("chapter-count");
chapterCount.textContent = `${articles.length} chapitres`;