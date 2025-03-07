const movieName = document.querySelector(".movieName")
const movieBtn = document.querySelector(".moviebtn")
const movieContener = document.querySelector(".body")


async function movieSearch(name) {
    try {

        const apiKey = '777b9747'
        const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${name}`)
        if (!response.ok) {
            throw new Error("unable to fetch movie data")
        }
        const datas = await response.json()
        console.log(datas)
        movieDatas(datas)
    }
    catch (error) {
        console.log(error.message)
    };
}

function movieDatas(movie) {
    const { Title, Released, Genre, Writer, Plot, Language, Poster, imdbRating } = data;
}


movieBtn.addEventListener(
    'click', (e) => {
        e.preventDefault()
        const movieNameSerch = movieName.value.trim()
        if (movieNameSerch !== '') {
            movieSearch(movieNameSerch)
        }
    }
)