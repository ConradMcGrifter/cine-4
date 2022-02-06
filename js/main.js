let schedule = {
    movie1: {
        title: "Belfast",
        poster: undefined,
        trailer: undefined,
        showtimes: {
            mon: ["7:30"],
            tue: ["7:30"],
            wed: ["7:30"],
            thu: [""],
            fri: ["5:10", "7:30"],
            sat: ["12:30", "2:30", "5:10", "7:30"],
            sun: ["12:30", "2:30", "5:10", "7:30"],
        },
    },
    movie2: {
        title: "House of Gucci",
        poster: undefined,
        trailer: undefined,
        showtimes: {
            mon: [],
            tue: [],
            wed: [],
            thu: [],
            fri: [],
            sat: [],
            sun: [],
        },
    },
    movie3: {
        title: "Parallel Mothers",
        poster: undefined,
        trailer: undefined,
        showtimes: {
            mon: [],
            tue: [],
            wed: [],
            thu: [],
            fri: [],
            sat: [],
            sun: [],
        },
    },
    movie4: {
        title: "Licorice Pizza",
        poster: undefined,
        trailer: undefined,
        showtimes: {
            mon: [],
            tue: [],
            wed: [],
            thu: [],
            fri: [],
            sat: [],
            sun: [],
        },
    },
};

const printShowtimes1 = (film, day) => {
    let movieTimes = schedule[film].showtimes[day];
    movieTimes.forEach((time) => {
        if (movieTimes == "") {
            console.log("shee");
            return;
        }
        console.log(time);
    });
};

printShowtimes1("movie1", "fri");
