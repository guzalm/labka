const paragraph = document.getElementById("paragraph");

//1
const text = paragraph.innerHTML;
const words = text.split(" ");
const longWords = words.filter((word) => word.length > 8);
longWords.forEach((word) => {
  paragraph.innerHTML = paragraph.innerHTML.replace(
    new RegExp(`\\b${word}\\b`, "g"),
    `<span style="background-color: yellow">${word}</span>`
  );
});

//2
const sourceLink = document.createElement("a");
sourceLink.href =
  "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html";
sourceLink.textContent = "Source";
paragraph.insertAdjacentElement("afterend", sourceLink);

//3
const sentences = text.split(". ");
paragraph.innerHTML = sentences.join(".<br/>");

//4
const wordCount = words.length;
const heading = document.querySelector("h1");
const countDisplay = document.createElement("p");
countDisplay.textContent = `Word Count: ${wordCount}`;
heading.insertAdjacentElement("afterend", countDisplay);

//5
paragraph.innerHTML = paragraph.innerHTML
  .replace(/\?/g, "&#129300")
  .replace(/!/g, "&#128559");
