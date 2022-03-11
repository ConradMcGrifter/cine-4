/*
if a movie doesn't have a showtime on a certain day, add an empty string into the array for that day
*/

export let schedule = {
    movie1: {
        title: "The Batman",
        rating: "R",
        synopsis:
            "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues. As the evidence begins to lead closer to home and the scale of the perpetrator's plans become clear, he must forge new relationships, unmask the culprit and bring justice to the abuse of power and corruption that has long plagued the metropolis.",
        poster: "posters/batman.jpg",
        trailer: "https://www.youtube.com/embed/mqqft2x_Aa4?autoplay=1",
        showtimes: {
            fri: ["4:00p", "7:30p"],
            sat: ["12:30p", "4:00p", "7:30p"],
            sun: ["12:30p", "4:00p", "7:30p"],
            mon: ["7:30p"],
            tue: ["7:30p"],
            wed: ["7:30p"],
            thu: ["7:30p"],
        },
    },

    movie2: {
        title: "Belfast",
        rating: "R",
        synopsis:
            "BELFAST is a movie straight from Branagh's own experience. A nine-year-old boy must chart a path towards adulthood through a world that has suddenly turned upside down. His stable and loving community and everything he thought he understood about life is changed forever but joy, laughter, music and the formative magic of the movies remain.",
        poster: "posters/belfastPoster.jpg",
        trailer: "https://www.youtube.com/embed/Ja3PPOnJQ2k?autoplay=1",
        showtimes: {
            fri: ["5:45p", "7:30p"],
            sat: ["12:00p", "2:00p", "4:00p", "5:45p", "7:30p"],
            sun: ["12:00p", "2:00p", "4:00p", "5:45p", "7:30p"],
            mon: ["7:30p"],
            tue: ["7:30p"],
            wed: ["7:30p"],
            thu: ["7:30p"],
        },
    },
    movie3: {
        title: "Parallel Mothers",
        rating: "R",
        synopsis:
            "Two women, Janis and Ana, coincide in a hospital room where they are going to give birth. Both are single and became pregnant by accident. Janis, middle-aged, doesn't regret it and she is exultant. The other, Ana, an adolescent, is scared, repentant and traumatized. Janis tries to encourage her while they move like sleepwalkers along the hospital corridors. The few words they exchange in these hours will create a very close link between the two, which by chance develops and complicates, and changes their lives in a decisive way.",
        poster: "posters/parallelMothers.jpg",
        trailer: "https://www.youtube.com/embed/cL6JDYkRa2g?autoplay=1",
        showtimes: {
            fri: ["5:10p", "7:30p"],
            sat: ["12:00p", "2:30p", "5:10p", "7:30p"],
            sun: ["12:00p", "2:30p", "5:10p", "7:30p"],
            mon: ["7:30p"],
            tue: ["7:30p"],
            wed: ["7:30p"],
            thu: ["7:30p"],
        },
    },

    movie4: {
        title: "Licorice Pizza",
        rating: "R",
        synopsis:
            "Alana Kane and Gary Valentine grow up, run around and fall in love in California's San Fernando Valley in the 1970s.",
        poster: "posters/licoricePizza.jpg",
        trailer: "https://www.youtube.com/embed/ofnXPwUPENo?autoplay=1",
        showtimes: {
            fri: ["5:00p", "7:30p"],
            sat: ["12:00p", "2:30p", "5:00p", "7:30p"],
            sun: ["12:00p", "2:30p", "5:00p", "7:30p"],
            mon: ["7:30p"],
            tue: ["7:30p"],
            wed: ["7:30p"],
            thu: ["7:30p"],
        },
    },
};
