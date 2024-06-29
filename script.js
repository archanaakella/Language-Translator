document.addEventListener("DOMContentLoaded", () => {
    const inputTextElem = document.getElementById("input-text");
    const outputTextElem = document.getElementById("output-text");
    const sourceLanguageDropdown = document.getElementById("source-language");
    const targetLanguageDropdown = document.getElementById("target-language");
    const translateButton = document.getElementById("translateButton");
  
    translateButton.addEventListener("click", () => {
      translate();
    });
  
    function translate() {
      const inputText = inputTextElem.value;
      const sourceLanguage = sourceLanguageDropdown.value;
      const targetLanguage = targetLanguageDropdown.value;
      const translationAPIURL = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLanguage}&tl=${targetLanguage}&dt=t&q=${encodeURI(inputText)}`;
  
      fetch(translationAPIURL)
        .then((response) => response.json())
        .then((json) => {
          const translatedText = json[0].map((item) => item[0]).join("");
          outputTextElem.value = translatedText;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });