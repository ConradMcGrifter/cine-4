/*
if a movie doesn't have a showtime on a certain day, add an empty string into the array for that day
*/

export let schedule = {
    movie1: {
        title: "Death on the Nile",
        synopsis:
            "Belgian sleuth Hercule Poirot's Egyptian vacation aboard a glamorous river steamer turns into a terrifying search for a murderer when a picture-perfect couple's idyllic honeymoon is tragically cut short. Set against an epic landscape of sweeping desert vistas and the majestic Giza pyramids, this tale of unbridled passion and incapacitating jealousy features a cosmopolitan group of impeccably dressed travelers, and enough wicked twists and turns to leave audiences guessing until the final, shocking denouement.",
        poster: "posters/deathOnTheNile.jpg",
        trailer: "https://www.youtube.com/embed/dZRqB0JLizw?autoplay=1",
        showtimes: {
            mon: ["12:20pm", "2:45pm", "5:15pm", "7:30pm"],
            tue: ["7:30pm"],
            wed: ["7:30pm"],
            thu: ["7:30pm"],
            fri: ["5:15pm", "7:30pm"],
            sat: ["12:20pm", "2:45pm", "5:15pm", "7:30pm"],
            sun: ["12:20pm", "2:45pm", "5:15pm", "7:30pm"],
        },
    },

    movie2: {
        title: "Jockey",
        synopsis:
            "An aging jockey (Clifton Collins Jr.), hopes to win one last title for his longtime trainer (Molly Parker), who has acquired what appears to be a championship horse. But the years -- and injuries -- have taken a toll on his body, throwing into question his ability to continue his lifelong passion. And the arrival of a young rookie rider (Moises Arias), who claims to be his son, and whom he takes under his wing, further complicates the path to fulfilling his dream.",
        poster: "posters/jockey.jpg",
        trailer: "https://www.youtube.com/embed/YWI6Q-yKFbc?autoplay=1",
        showtimes: {
            mon: ["12:00pm", "4:00pm"],
            tue: ["7:30pm"],
            wed: [""],
            thu: ["7:30pm"],
            fri: ["5:50pm"],
            sat: ["12:00pm", "4:00pm"],
            sun: ["12:00pm", "4:00pm"],
        },
    },

    movie3: {
        title: "Belfast",
        synopsis:
            "BELFAST is a movie straight from Branagh's own experience. A nine-year-old boy must chart a path towards adulthood through a world that has suddenly turned upside down. His stable and loving community and everything he thought he understood about life is changed forever but joy, laughter, music and the formative magic of the movies remain.",
        poster: "posters/belfastPoster.jpg",
        trailer: "https://www.youtube.com/embed/Ja3PPOnJQ2k?autoplay=1",
        showtimes: {
            mon: ["12:00pm", "2:40pm", "5:40pm", "7:30pm"],
            tue: ["7:30pm"],
            wed: ["7:30pm"],
            thu: ["7:30pm"],
            fri: ["4:00pm", "7:30pm"],
            sat: ["12:00pm", "2:40pm", "5:40pm", "7:30pm"],
            sun: ["12:00pm", "2:40pm", "5:40pm", "7:30pm"],
        },
    },
    movie4: {
        title: "Parallel Mothers",
        synopsis:
            "Two women, Janis and Ana, coincide in a hospital room where they are going to give birth. Both are single and became pregnant by accident. Janis, middle-aged, doesn't regret it and she is exultant. The other, Ana, an adolescent, is scared, repentant and traumatized. Janis tries to encourage her while they move like sleepwalkers along the hospital corridors. The few words they exchange in these hours will create a very close link between the two, which by chance develops and complicates, and changes their lives in a decisive way.",
        poster: "posters/parallelMothers.jpg",
        trailer: "https://www.youtube.com/embed/cL6JDYkRa2g?autoplay=1",
        showtimes: {
            mon: ["1:45pm", "7:30pm"],
            tue: ["7:30pm"],
            wed: ["7:30pm"],
            thu: [""],
            fri: ["5:15pm", "7:30pm"],
            sat: ["1:45pm", "7:30pm"],
            sun: ["1:45pm", "7:30pm"],
        },
    },

    movie5: {
        title: "Licorice Pizza",
        synopsis:
            "Alana Kane and Gary Valentine grow up, run around and fall in love in California's San Fernando Valley in the 1970s.",
        poster: "posters/licoricePizza.jpg",
        trailer: "https://www.youtube.com/embed/ofnXPwUPENo?autoplay=1",
        showtimes: {
            mon: ["1:45pm", "7:30pm"],
            tue: [""],
            wed: ["7:30pm"],
            thu: [""],
            fri: ["5:50pm"],
            sat: ["1:45pm", "7:30pm"],
            sun: ["1:45pm", "7:30pm"],
        },
    },

    movie6: {
        title: "West Side Story",
        synopsis:
            "Love at first sight strikes when young Tony spots Maria at a high school dance in 1957 New York City. Their burgeoning romance helps to fuel the fire between the warring Jets and Sharks -- two rival gangs vying for control of the streets.",
        poster: "posters/WSSposter.jpg",
        trailer: "https://www.youtube.com/embed/A5GJLwWiYSg?autoplay=1",
        showtimes: {
            mon: ["12:00pm", "4:30pm"],
            tue: [""],
            wed: [""],
            thu: ["7:30pm"],
            fri: ["4:30pm"],
            sat: ["12:00pm", "4:30pm"],
            sun: ["12:00pm", "4:30pm"],
        },
    },
};

// --------- next week schedule

export let nextSchedule = {
    movie1: {
        title: "Death on the Nile",
        rating: "PG-13",
        synopsis:
            "Belgian sleuth Hercule Poirot's Egyptian vacation aboard a glamorous river steamer turns into a terrifying search for a murderer when a picture-perfect couple's idyllic honeymoon is tragically cut short. Set against an epic landscape of sweeping desert vistas and the majestic Giza pyramids, this tale of unbridled passion and incapacitating jealousy features a cosmopolitan group of impeccably dressed travelers, and enough wicked twists and turns to leave audiences guessing until the final, shocking denouement.",
        poster: "posters/deathOnTheNile.jpg",
        trailer: "https://www.youtube.com/embed/dZRqB0JLizw?autoplay=1",
        showtimes: {
            fri: ["5:00p"],
            sat: ["12:20p", "4:15p"],
            sun: ["12:20p", "4:15p"],
            mon: [""],
            tue: ["7:30p"],
            wed: ["7:30p"],
            thu: [""],
        },
    },

    movie2: {
        title: "The Desperate Hour",
        rating: "R",
        synopsis:
            "Unfolding in real time, THE DESPERATE HOUR is a 'riveting and pulse pounding' thriller from award-winning director Phillip Noyce. Recently widowed mother Amy Carr (Academy Award®-nominee Naomi Watts) is doing her best to restore normalcy to the lives of her young daughter and teenage son in their small town. As she's on a jog in the woods, she finds her town thrown into chaos as a shooting takes place at her son's school. Miles away on foot in the dense forest, Amy desperately races against time to save her son.",
        poster: "posters/desperateHour.jpg",
        trailer: "https://www.youtube.com/embed/kiwCH84GMhE?autoplay=1",
        showtimes: {
            fri: ["4:30p", "6:00p", "7:30p"],
            sat: ["11:55a", "2:30p", "6:00p", "7:30p"],
            sun: ["11:55a", "2:30p", "6:00p", "7:30p"],
            mon: ["7:30p"],
            tue: ["7:30p"],
            wed: ["7:30p"],
            thu: ["7:30p"],
        },
    },

    movie3: {
        title: "Belfast",
        rating: "R",
        synopsis:
            "BELFAST is a movie straight from Branagh's own experience. A nine-year-old boy must chart a path towards adulthood through a world that has suddenly turned upside down. His stable and loving community and everything he thought he understood about life is changed forever but joy, laughter, music and the formative magic of the movies remain.",
        poster: "posters/belfastPoster.jpg",
        trailer: "https://www.youtube.com/embed/Ja3PPOnJQ2k?autoplay=1",
        showtimes: {
            fri: ["7:30p"],
            sat: ["12:00p", "2:45p", "7:30p"],
            sun: ["12:00p", "2:45p", "7:30p"],
            mon: ["7:30p"],
            tue: [""],
            wed: ["7:30p"],
            thu: ["7:30p"],
        },
    },
    movie4: {
        title: "Parallel Mothers",
        rating: "R",
        synopsis:
            "Two women, Janis and Ana, coincide in a hospital room where they are going to give birth. Both are single and became pregnant by accident. Janis, middle-aged, doesn't regret it and she is exultant. The other, Ana, an adolescent, is scared, repentant and traumatized. Janis tries to encourage her while they move like sleepwalkers along the hospital corridors. The few words they exchange in these hours will create a very close link between the two, which by chance develops and complicates, and changes their lives in a decisive way.",
        poster: "posters/parallelMothers.jpg",
        trailer: "https://www.youtube.com/embed/cL6JDYkRa2g?autoplay=1",
        showtimes: {
            fri: ["5:00p", "7:30p"],
            sat: ["1:25p", "3:45p", "7:30p"],
            sun: ["1:25p", "3:45p", "7:30p"],
            mon: ["7:30p"],
            tue: [""],
            wed: ["7:30p"],
            thu: [""],
        },
    },

    movie5: {
        title: "Licorice Pizza",
        rating: "R",
        synopsis:
            "Alana Kane and Gary Valentine grow up, run around and fall in love in California's San Fernando Valley in the 1970s.",
        poster: "posters/licoricePizza.jpg",
        trailer: "https://www.youtube.com/embed/ofnXPwUPENo?autoplay=1",
        showtimes: {
            fri: ["7:30p"],
            sat: ["2:30p", "5:00p", "7:30p"],
            sun: ["2:30p", "5:00p", "7:30p"],
            mon: ["7:30p"],
            tue: ["7:30p"],
            wed: [""],
            thu: ["7:30p"],
        },
    },

    movie6: {
        title: "West Side Story",
        rating: "PG-13",
        synopsis:
            "Love at first sight strikes when young Tony spots Maria at a high school dance in 1957 New York City. Their burgeoning romance helps to fuel the fire between the warring Jets and Sharks -- two rival gangs vying for control of the streets.",
        poster: "posters/WSSposter.jpg",
        trailer: "https://www.youtube.com/embed/A5GJLwWiYSg?autoplay=1",
        showtimes: {
            fri: ["4:30p"],
            sat: ["12:00p", "4:30p"],
            sun: ["12:00p", "4:30p"],
            mon: [""],
            tue: ["7:30p"],
            wed: [""],
            thu: ["7:30p"],
        },
    },
};
