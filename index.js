//create a div element and append it next to the highlighted element showing the css information got from getCss function

const createCssDiv = () => {
  const highlight = document.querySelector(".highlight");
  const styles = getComputedStyle(highlight);
  const div = document.createElement("div");
  div.innerHTML = `
    <p>Background Color: ${styles.backgroundColor}</p>
    <p>Color: ${styles.color}</p>
    <p>Display: ${styles.display}</p>   
    <p>Height: ${styles.height}</p>
    <p>Width: ${styles.width}</p>
    <p>Font Family: ${styles.fontFamily}</p>
    <p>Font Size: ${styles.fontSize}</p>
    <p>Font Weight: ${styles.fontWeight}</p>
    <p>Font Style: ${styles.fontStyle}</p>
    <p>Text Transform: ${styles.textTransform}</p>
    <p>Text Decoration: ${styles.textDecoration}</p>
    <p>Text Align: ${styles.textAlign}</p>
    <p>Border: ${styles.border}</p>
    <p>Padding: ${styles.padding}</p>
    <p>Margin: ${styles.margin}</p>
    
  `;
  div.classList.add("css-div");
  highlight.appendChild(div);
};

// remove the css div element when mouseout

const removeCssDiv = () => {
  const highlight = document.querySelector(".highlight");
  const cssDiv = document.querySelector(".css-div");
  highlight.removeChild(cssDiv);
};

//hightlight body elements on hover and remove highlight on mouseout with javascript

const highlight = () => {
  const body = document.querySelector("body");
  body.addEventListener("mouseover", (e) => {
    e.target.classList.add("highlight");
    createCssDiv();
  });
  body.addEventListener("mouseout", (e) => {
    removeCssDiv();
    e.target.classList.remove("highlight");
  });
};

//call the functions
highlight();
