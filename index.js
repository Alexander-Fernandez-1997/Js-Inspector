// 1st load this css then call the function

const loadCss = () => {
  const css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = `
    .highlight {
      background: rgba(59, 142, 165, 0.2);
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
      border-radius: 10px;
      cursor: pointer;
    }
    .css-div {
      position: fixed;
      right: 0;
      height: fit-content;
      width: fit-content;
      background: rgb(143, 196, 211);
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.18);
      font-size: 1rem;
      font-weight: bold;
      line-height: 0.5;
      padding: 0.5rem;
      z-index: 999;
      border-radius: 10px;
      color: #fff;
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    }
    .css-div p:first-of-type {
      text-decoration: underline;
      font-size: 1.2rem;
    }
    .notice {
      position: fixed;
      left: 50%;
      top: 10%;
      transform: translate(-50%, -50%);
      background: rgb(143, 196, 211);
      box-shadow: 0 0 5px rgba(255, 255, 255, 1);
      border: 1px solid rgba(255, 255, 255, 0.18);
      font-size: 2.5rem;
      padding: 2rem;
      font-weight: bold;
      line-height: 0.5;
      z-index: 999;
      border-radius: 10px;
      color: #fff;
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    }
  `;
  document.body.appendChild(css);
};

//create a notice div to show the user that the code has been copied to the clipboard
const createNotice = () => {
  const notice = document.createElement("div");
  notice.classList.add("notice");
  notice.textContent = "Copied to clipboard";
  document.body.appendChild(notice);
  setTimeout(() => {
    notice.remove();
  }, 2000);
};

//if you click on highlight element, it will copy the cssDiv information to clipboard

const copyToClipboard = () => {
  const highlight = document.querySelector(".highlight");
  const cssDiv = document.querySelector(".css-div");
  highlight.addEventListener("click", (e) => {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(cssDiv);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
    createNotice();
  });
};

const removeCopyEvent = () => {
  const highlight = document.querySelector(".highlight");
  highlight.removeEventListener("click", copyToClipboard);
};

//create a div element and append it next to the highlighted element showing the css information got from getCss function

const createCssDiv = () => {
  const highlight = document.querySelector(".highlight");
  const styles = getComputedStyle(highlight);
  const div = document.createElement("div");
  div.innerHTML = `
    <p>Lista de propiedades CSS</p>
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
  copyToClipboard();
};

// remove the css div element when mouseout

const removeCssDiv = () => {
  const highlight = document.querySelector(".highlight");
  const cssDiv = document.querySelector(".css-div");
  highlight.removeChild(cssDiv);
  removeCopyEvent();
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
loadCss();
highlight();
