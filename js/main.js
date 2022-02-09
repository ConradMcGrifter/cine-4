let d = new Date();
let currentDay = d.getDay();

let schedule = {
    movie1: {
        title: "Belfast",
        synopsis:
            "BELFAST is a movie straight from Branagh's own experience. A nine-year-old boy must chart a path towards adulthood through a world that has suddenly turned upside down. His stable and loving community and everything he thought he understood about life is changed forever but joy, laughter, music and the formative magic of the movies remain.",
        poster: "posters/belfastPoster.jpg",
        trailer: undefined,
        showtimes: {
            mon: ["7:30pm"],
            tue: ["7:30pm"],
            wed: ["7:30pm"],
            thu: ["7:30pm"],
            fri: ["5:10pm", "7:30pm"],
            sat: ["12:30pm", "2:30pm", "5:10pm", "7:30pm"],
            sun: ["12:30pm", "2:30pm", "5:10pm", "7:30pm"],
        },
    },
    movie2: {
        title: "House of Gucci",
        synopsis:
            "House of Gucci is inspired by the shocking true story of the family behind the Italian fashion empire. When Patrizia Reggiani (Lady Gaga), an outsider from humble beginnings, marries into the Gucci family, her unbridled ambition begins to unravel the family legacy and triggers a reckless spiral of betrayal, decadence, revenge, and ultimately... murder.",
        poster: "posters/gucciPoster.jpg",
        trailer: "https://www.youtube.com/watch?v=pGi3Bgn7U5U",
        showtimes: {
            mon: ["7:30pm"],
            tue: ["7:30pm"],
            wed: ["7:30pm"],
            thu: ["7:30pm"],
            fri: ["5:10pm", "7:30pm"],
            sat: ["12:30pm", "2:30pm", "5:10pm", "7:30pm"],
            sun: ["12:30pm", "2:30pm", "5:10pm", "7:30pm"],
        },
    },
    movie3: {
        title: "Parallel Mothers",
        synopsis:
            "Two women, Janis and Ana, coincide in a hospital room where they are going to give birth. Both are single and became pregnant by accident. Janis, middle-aged, doesn't regret it and she is exultant. The other, Ana, an adolescent, is scared, repentant and traumatized. Janis tries to encourage her while they move like sleepwalkers along the hospital corridors. The few words they exchange in these hours will create a very close link between the two, which by chance develops and complicates, and changes their lives in a decisive way.",
        poster: "posters/parallelMothers.jpg",
        trailer: undefined,
        showtimes: {
            mon: ["7:30pm"],
            tue: ["7:30pm"],
            wed: ["7:30pm"],
            thu: ["7:30pm"],
            fri: ["5:10pm", "7:30pm"],
            sat: ["12:30pm", "2:30pm", "5:10pm", "7:30pm"],
            sun: ["12:30pm", "2:30pm", "5:10pm", "7:30pm"],
        },
    },
    movie4: {
        title: "Licorice Pizza",
        synopsis:
            "Alana Kane and Gary Valentine grow up, run around and fall in love in California's San Fernando Valley in the 1970s.",
        poster: "posters/licoricePizza.jpg",
        trailer: undefined,
        showtimes: {
            mon: [""],
            tue: ["7:30pm"],
            wed: [""],
            thu: ["7:30pm"],
            fri: ["7:30pm"],
            sat: ["12:30pm", "5:10pm"],
            sun: ["12:30pm", "5:10pm"],
        },
    },

    movie5: {
        title: "West Side Story",
        synopsis:
            "Love at first sight strikes when young Tony spots Maria at a high school dance in 1957 New York City. Their burgeoning romance helps to fuel the fire between the warring Jets and Sharks -- two rival gangs vying for control of the streets.",
        poster: "posters/WSSposter.jpg",
        trailer: undefined,
        showtimes: {
            mon: ["7:30pm"],
            tue: [""],
            wed: ["7:30pm"],
            thu: [""],
            fri: ["5:10pm"],
            sat: ["2:30pm", "7:30pm"],
            sun: ["2:30pm", "7:30pm"],
        },
    },
};

let friday = document.querySelector("[data-fri]");
let saturday = document.querySelector("[data-sat]");
let sunday = document.querySelector("[data-sun]");
let monday = document.querySelector("[data-mon]");
let tuesday = document.querySelector("[data-tue]");
let wednesday = document.querySelector("[data-wed]");
let thursday = document.querySelector("[data-thu]");

let movieCardTemplate = document.querySelector("[data-movieCard-template]");
let cardWrapper = document.querySelector("[data-cards-wrapper]");

const createMovieCard = (movie, day) => {
    let movieObj = schedule[movie];

    let movieCard = movieCardTemplate.content.cloneNode(true).children[0];
    let timesWrapper = movieCard.querySelector("[data-times-wrapper]");

    let title = movieCard.querySelector("[data-title]");
    let poster = movieCard.querySelector("[data-poster]");
    let synopsis = movieCard.querySelector("[data-synopsis]");

    title.textContent = movieObj.title;
    poster.src = `${movieObj.poster}`;
    synopsis.textContent = movieObj.synopsis;

    movieObj.showtimes[day].forEach((time) => {
        let showtime = document.createElement("div");
        showtime.setAttribute("data-card__time", null);
        showtime.innerText = time;
        timesWrapper.append(showtime);
    });

    movieCard.setAttribute("data-movie", movie);

    cardWrapper.append(movieCard);
};

const removeCards = () => {
    let cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        card.remove();
    });
};

friday.addEventListener("click", () => {
    // remove all cards currently in the DOM
    removeCards();
    // loop through the movie objects in schedule object
    for (let movie in schedule) {
        // if the movie object has show times for the specific day, create card ele + add showtimes
        if (schedule[movie].showtimes.fri[0] != "") {
            createMovieCard(movie, "fri");
        }
    }
});

saturday.addEventListener("click", () => {
    // remove all cards currently in the DOM
    removeCards();
    // loop through the movie objects in schedule object
    for (let movie in schedule) {
        // if the movie object has show times for the specific day, create card ele + add showtimes
        if (schedule[movie].showtimes.sat[0] != "") {
            createMovieCard(movie, "sat");
        }
    }
});

sunday.addEventListener("click", () => {
    // remove all cards currently in the DOM
    removeCards();
    // loop through the movie objects in schedule object
    for (let movie in schedule) {
        // if the movie object has show times for the specific day, create card ele + add showtimes
        if (schedule[movie].showtimes.sun[0] != "") {
            createMovieCard(movie, "sun");
        }
    }
});

monday.addEventListener("click", () => {
    // remove all cards currently in the DOM
    removeCards();
    // loop through the movie objects in schedule object
    for (let movie in schedule) {
        // if the movie object has show times for the specific day, create card ele + add showtimes
        if (schedule[movie].showtimes.mon[0] != "") {
            createMovieCard(movie, "mon");
        }
    }
});

tuesday.addEventListener("click", () => {
    // remove all cards currently in the DOM
    removeCards();
    // loop through the movie objects in schedule object
    for (let movie in schedule) {
        // if the movie object has show times for the specific day, create card ele + add showtimes
        if (schedule[movie].showtimes.tue[0] != "") {
            createMovieCard(movie, "tue");
        }
    }
});

wednesday.addEventListener("click", () => {
    // remove all cards currently in the DOM
    removeCards();
    // loop through the movie objects in schedule object
    for (let movie in schedule) {
        // if the movie object has show times for the specific day, create card ele + add showtimes
        if (schedule[movie].showtimes.wed[0] != "") {
            createMovieCard(movie, "wed");
        }
    }
});

thursday.addEventListener("click", () => {
    // remove all cards currently in the DOM
    removeCards();
    // loop through the movie objects in schedule object
    for (let movie in schedule) {
        // if the movie object has show times for the specific day, create card ele + add showtimes
        if (schedule[movie].showtimes.thu[0] != "") {
            createMovieCard(movie, "thu");
        }
    }
});

switch (currentDay) {
    case 0:
        sunday.classList.add("--is-active");
        // loop through the movie objects in schedule object
        for (let movie in schedule) {
            // if the movie object has show times for the specific day, create card ele + add showtimes
            if (schedule[movie].showtimes.sun[0] != "") {
                createMovieCard(movie, "sun");
            }
        }
        break;

    case 1:
        monday.classList.add("--is-active");
        for (let movie in schedule) {
            if (schedule[movie].showtimes.mon[0] != "") {
                createMovieCard(movie, "mon");
            }
        }
        break;

    case 2:
        tuesday.classList.add("--is-active");
        for (let movie in schedule) {
            if (schedule[movie].showtimes.tue[0] != "") {
                createMovieCard(movie, "tue");
            }
        }
        break;

    case 3:
        wednesday.classList.add("--is-active");
        for (let movie in schedule) {
            if (schedule[movie].showtimes.wed[0] != "") {
                createMovieCard(movie, "wed");
            }
        }
        break;

    case 4:
        thursday.classList.add("--is-active");
        for (let movie in schedule) {
            if (schedule[movie].showtimes.thu[0] != "") {
                createMovieCard(movie, "thu");
            }
        }
        break;

    case 5:
        friday.classList.add("--is-active");
        for (let movie in schedule) {
            if (schedule[movie].showtimes.fri[0] != "") {
                createMovieCard(movie, "fri");
            }
        }
        break;

    case 6:
        saturday.classList.add("--is-active");
        for (let movie in schedule) {
            if (schedule[movie].showtimes.sat[0] != "") {
                createMovieCard(movie, "sat");
            }
        }
        break;
}
