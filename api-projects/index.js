/* insertAdjacentHTML("beforeend", htmlString) is a JavaScript method that 
allows you to insert a specified HTML code into an element as the last child. 
The method takes two arguments:

The second argument is a string that represents the HTML code you want to insert.*/

// "beforebegin": inserts the HTML code as a sibling immediately before the element.
// "afterend": inserts the HTML code as a sibling immediately after the element.
// "beforeend": inserts the HTML code as the last child of the element.
// "afterbegin": inserts the HTML code as the first child of the element.

const selectTag = document.querySelectorAll("select"),
  icons = document.querySelectorAll(".row i"),
  translateBtn = document.querySelector(".translate__btn"),
  fromText = document.querySelector(".from-text"),
  toText = document.querySelector(".to-text"),
  exchangeIcon = document.querySelector(".exchange");

const countries = {
  "en-ZA": "English (South Africa)",
  "en-US": "English (USA)",
  "es-ES": "Spanish (Spain)",
  "fr-FR": "French (France)",
  "de-DE": "German (Germany)",
  "it-IT": "Italian (Italy)",
  "ja-JP": "Japanese (Japan)",
  "ko-KR": "Korean (South Korea)",
  "pt-BR": "Portuguese (Brazil)",
  "ru-RU": "Russian (Russia)",
  "zh-CN": "Chinese (China)",
  "en-ZA": "English (South Africa)",
  "fr-MU": "French (Mauritius)",
  "pt-MZ": "Portuguese (Mozambique)",
  "pt-AO": "Portuguese (Angola)",
  "sn-Latn-ZW": "Shona (Latin, Zimbabwe)",
  "af-ZA": "Afrikaans (South Africa)",
  "nr-ZA": "Ndebele (South Africa)",
  "st-ZA": "Sotho (South Africa)",
  "tn-ZA": "Tswana (South Africa)",
  "ts-ZA": "Tsonga (South Africa)",
  "ve-ZA": "Venda (South Africa)",
  "xh-ZA": "Xhosa (South Africa)",
  "zu-ZA": "Zulu (South Africa)",
  "tn-ZA": "Tswana (South Africa)",
  "nr-ZA": "Southern Ndebele",
  "ss-ZA": "Swati",
};

// if (Object.hasOwnProperty.call(object, key)) {
//   const element = object[key];
//   console.log(element);
// }

selectTag.forEach((tag, id) => {
  for (const country_code in countries) {
    let selected;

    if (id == 0 && country_code == "en-ZA") {
      // selecting english by default as from language and tsonga as to language
      selected = "selected";
    } else if (id == 1 && country_code == "st-ZA") {
      selected = "selected";
    }

    let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</option>`;
    tag.insertAdjacentHTML("beforeend", option); // adding option tag inside select tag
  }
});

exchangeIcon.addEventListener("click", () => {
  // exchange textarea and select tag values

  let tempText = fromText.value;
  fromText.value = toText.value;
  toText.value = tempText;

  let tempLang = selectTag[0].value;
  selectTag[0].value = selectTag[1].value;
  selectTag[1].value = tempLang;
});

translateBtn.addEventListener("click", async () => {
  try {
    let text = fromText.value,
      translateFrom = selectTag[0].value,
      translateTo = selectTag[1].value,
      apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;

    if (!text) return;
    toText.setAttribute("placeholder", "translating...");

    const response = await fetch(apiUrl);
    const data = await response.json();

    toText.value = data.responseData.translatedText;
    toText.setAttribute("placeholder", "translation");
  } catch (error) {
    toText.value = "Something wrong happened";
  }
});

icons.forEach((icon) => {
  icon.addEventListener("click", ({ target }) => {
    if (target.classList.contains("fa-copy")) {
      // if clicked icon has  from id, copy the fromTextarea value else copy toTextarea value
      if (target.id == "from") {
        navigator.clipboard.writeText(fromText.value);
        // writeText() property writes the specified text string to the system clipboard
      } else {
        navigator.clipboard.writeText(toText.value);
      }
    } else {
      let utterance;
      if (target.id == "from") {
        utterance = new SpeechSynthesisUtterance(fromText.value); // SpeechSynthesisUtterance() represents a speech request
        utterance.lang = selectTag[0].value; // setting utterance language to fromSelect tag value
      } else {
        utterance = new SpeechSynthesisUtterance(toText.value);
        utterance.lang = selectTag[1].value;
      }
      SpeechSynthesis.speak(utterance); // speak the passed utterance
    }
  });
});
