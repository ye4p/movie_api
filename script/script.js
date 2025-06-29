const circle = document.querySelector('.theme_flip .circle');
let flip = 0;
circle.addEventListener('click', () => {
    if (flip % 2 == 0) {
        circle.style.transform = 'translate(2px, 2px)';
    } else if (flip % 2 == 1) {
        circle.style.transform = 'translate(27px, 2px)';
    }
    flip++;
})

let search_flip = 0;
const search_button = document.querySelector(".fa.fa-search");
const search_bar = document.querySelector('.search_bar');
const close_search = document.querySelector('.close_button');
const search_content = document.querySelector(".search_content");
const search_action = document.querySelector(".search_action");
let search_text;
const modal_window = document.querySelector('.modal_window');
const modal_ok = document.querySelector(".modal_ok");
const modal_close = document.querySelector(".modal_close");
const form = document.querySelector("form");
const movies_list = document.querySelector(".movies_list");
const main = document.querySelector("main");
const left_panel_button = document.querySelector(".left_panel_button")
search_button.addEventListener('click', () => {
    if (search_flip % 2 == 0) {
        search_bar.classList.add('show');
    } else if (search_flip % 2 == 1) {
        search_bar.classList.remove('show');
    }
    search_flip++;
})
close_search.addEventListener('click', () => {
    search_bar.classList.remove('show');
    search_content.value = '';
})
// search_action.addEventListener('click', ()=> {
//     if (search_content.value=="") {
//         modal_window.classList.add("show")
//     } else {
//     console.dir(search_content.value);
//     search_text=search_content;
//     }
// })
left_panel_button.addEventListener("click", () => {

})

modal_ok.addEventListener("click", () => {
    modal_window.classList.remove("show");
})
modal_close.addEventListener("click", () => {
    modal_window.classList.remove("show");
})
let query;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    query = search_content.value;
    console.log(query);
    if (query == "") {
        query = "marvel"
    }
    movieMazeAPI(query)
})




async function movieMazeAPI(query) {
    const request = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const movies = await request.json();
    // console.log(movies);
    makeImages(movies);
}

function makeImages(movies) {
    for (let movie of movies) {
        let src = movie.show.image.medium;
        console.log(src);
        const img = document.createElement('img');
        img.src = src;

        movies_list.appendChild(img);
    }
}
