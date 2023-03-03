var project_container = document.querySelector(".project1Bio");

$.getJSON("https://api.github.com/users/carlosd1478/repos?per_page=9", (data) => {
    console.log(data);
    data.forEach((element) => {
        console.log(element);
            $.getJSON(element.languages_url, (data) => {
                populate(element.name, element.pushed_at, Object.keys(data), element);
            })
    })
})

function populate(name, updated, languages, element) {
    var card = document.createElement("div");
    card.classList.add("card");
    console.log("called");
    addLanguages(languages,card);

    var title = document.createElement("a");
    title.classList.add("title");
    var name_parts = name.replace("-", " ");
    title.innerHTML = name_parts;
    title.setAttribute("href", element.html_url);
    card.appendChild(title);

    var date = updated.split("T")[0];
    var date_0 = date.split("-");

    var year = date_0[0];
    var month = date_0[1];
    var day = date_0[2];

    var date = document.createElement("div");
    date.classList.add("date");

    var subtitle = document.createElement("code");
    subtitle.classList.add("last-updated");
    subtitle.classList.add("lb-0");
    subtitle.innerHTML = "Last updated on: ";
    date.appendChild(subtitle);

    var last_updated = document.createElement("code");
    last_updated.innerHTML = month + "/" + day + "/" + year;
    last_updated.classList.add("last-updated");
    last_updated.classList.add("mt-0");
    date.appendChild(last_updated);

    card.appendChild(date);

    project_container.appendChild(card);
}

function addLanguages(languages, card) {
    var lang_icons = document.createElement("div");
    lang_icons.classList.add("d-flex");
    lang_icons.classList.add("languages_list");

    var icon = document.createElement("i");
    icon.classList.add("bx");

    if(languages.includes("HTML")) {
        var icon2 = document.createElement("i");
        icon2.classList.add("bx");
        icon2.classList.add("bxl-html5");
        icon2.classList.add("html");
        lang_icons.appendChild(icon2);
    }
    if(languages.includes("Python")) {
        var icon3 = document.createElement("i");
        icon3.classList.add("bx");
        icon3.classList.add("bxl-python");
        icon3.classList.add("python");
        lang_icons.appendChild(icon3);
    }
    if(languages.includes("JavaScript")) {
        var icon4 = document.createElement("i");
        icon4.classList.add("bx");
        icon4.classList.add("bxl-javascript");
        icon4.classList.add("javascript");
        lang_icons.appendChild(icon4);
    }
    if(languages.includes("CSS")) {
        var icon5 = document.createElement("i");
        icon5.classList.add("bx");
        icon5.classList.add("bxl-css3");
        icon5.classList.add("css");
        lang_icons.appendChild(icon5);
    }
    
}
