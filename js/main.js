let schedule = {
    movie1: {
        title: "Belfast",
        poster: undefined,
        trailer: undefined,
        showtimes: {
            mon: ["7:30"],
            tue: ["7:30"],
            wed: ["7:30"],
            thu: ["7:30"],
            fri: ["5:10", "7:30"],
            sat: ["12:30", "2:30", "5:10", "7:30"],
            sun: ["12:30", "2:30", "5:10", "7:30"],
        },
    },
    movie2: {
        title: "House of Gucci",
        poster: "posters/gucciPoster.jpg",
        trailer: "https://www.youtube.com/watch?v=pGi3Bgn7U5U",
        showtimes: {
            mon: ["7:30"],
            tue: ["7:30"],
            wed: ["7:30"],
            thu: ["7:30"],
            fri: ["5:10", "7:30"],
            sat: ["12:30", "2:30", "5:10", "7:30"],
            sun: ["12:30", "2:30", "5:10", "7:30"],
        },
    },
    movie3: {
        title: "Parallel Mothers",
        poster: undefined,
        trailer: undefined,
        showtimes: {
            mon: ["7:30"],
            tue: ["7:30"],
            wed: ["7:30"],
            thu: ["7:30"],
            fri: ["5:10", "7:30"],
            sat: ["12:30", "2:30", "5:10", "7:30"],
            sun: ["12:30", "2:30", "5:10", "7:30"],
        },
    },
    movie4: {
        title: "Licorice Pizza",
        poster: undefined,
        trailer: undefined,
        showtimes: {
            mon: ["7:30"],
            tue: ["7:30"],
            wed: ["7:30"],
            thu: ["7:30"],
            fri: ["5:10", "7:30"],
            sat: ["12:30", "2:30", "5:10", "7:30"],
            sun: ["12:30", "2:30", "5:10", "7:30"],
        },
    },
};

const printShowtimes1 = (movie, day) => {
    let movieTimes = schedule[movie].showtimes[day];
    movieTimes.forEach((time) => {
        if (movieTimes == "") {
            console.log("shee");
            return;
        }
        console.log(time);
    });
};

printShowtimes1("movie1", "sat");
