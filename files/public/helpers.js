// Populate dropdown menu with all the available genres
const populateGenreDropdown = (genres) => {
    const select = document.getElementById('genres')

    for (const genre of genres) {
        let option = document.createElement("option");
        option.value = genre.id;
        option.text = genre.name;
        select.appendChild(option);
    }
};

// Get a random number between 1 to 500
const getRandomNum = (num) => {
    return Math.floor(Math.random() * num + 1);
 }

// Returns the current genre selection from the dropdown menu
const getSelectedGenre = () => {
    const selectedGenre = document.getElementById('genres').value;
    return selectedGenre;
};

// Displays the like and dislike buttons on the page
const showBtns = () => {
    const btnDiv = document.getElementById('likeOrDislikeBtns');
    btnDiv.removeAttribute('hidden');
};

// Clear the current movie from the screen
const clearCurrentMovie = () => {
    const moviePosterDiv = document.getElementById('moviePoster');
    const movieTextDiv = document.getElementById('movieText');
    moviePosterDiv.innerHTML = '';
    movieTextDiv.innerHTML = '';
}

const likeOrDislike = () => { 
    const title = document.getElementById('movieTitle').innerHTML;
    const ele = document.createElement('h2');
    ele.innerHTML = title;
    return ele;
}

// After liking a movie, clears the current movie from the screen and gets another random movie
const likeMovie = () => {
    const likes = document.getElementById('likes')

    const movie = document.getElementById('movieTitle').innerHTML
    if((likesArr.includes(movie) == false) && (dislikesArr.includes(movie) == false)){
        likesArr.push(movie);
        likes.appendChild(likeOrDislike())
    }

    clearCurrentMovie();
    showRandomMovie();
};

// After disliking a movie, clears the current movie from the screen and gets another random movie
const dislikeMovie = () => {
    const dislikes = document.getElementById('dislikes')

    const movie = document.getElementById('movieTitle').innerHTML
    if((dislikesArr.includes(movie) == false) && (likesArr.includes(movie) == false)){
        dislikesArr.push(movie);
        dislikes.appendChild(likeOrDislike())
    }

    clearCurrentMovie();
    showRandomMovie();
};

// Create HTML for movie poster
const createMoviePoster = (posterPath) => {
    const moviePosterUrl = `https://image.tmdb.org/t/p/original/${posterPath}`;

    const posterImg = document.createElement('img');
    posterImg.setAttribute('src', moviePosterUrl);
    posterImg.setAttribute('id', 'moviePoster');
  
    return posterImg;
};

// Create HTML for movie title
const createMovieTitle = (title) => {
    const titleHeader = document.createElement('h1');
    titleHeader.setAttribute('id', 'movieTitle');
    titleHeader.innerHTML = title;
  
    return titleHeader;
};

// Create HTML for movie text
const createMovieTagline = (tagline) => {
    const taglineHeader = document.createElement('h2');
    taglineHeader.setAttribute('id','movieTagline');
    taglineHeader.innerHTML = tagline;
  
    return taglineHeader;
}

// Create HTML for movie release date
const createMovieReleaseDate = (releaseDate) => {
    const releaseDateHeader = document.createElement('p');
    releaseDateHeader.setAttribute('id','movieReleaseDate');
    releaseDateHeader.innerHTML = releaseDate;
  
    return releaseDateHeader;
}

// Create HTML for movie overview
const createMovieOverview = (overview) => {
    const overviewParagraph = document.createElement('p');
    overviewParagraph.setAttribute('id', 'movieOverview');
    overviewParagraph.innerHTML = overview;
  
    return overviewParagraph;
};

// Returns a random movie from the first page of movies
const getRandomMovie = (movies) => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];
    return randomMovie;
};

// Uses the DOM to create HTML to display the movie
const displayMovie = (movieInfo) => {
    const moviePosterDiv = document.getElementById('moviePoster');
    const movieTextDiv = document.getElementById('movieText');
    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');
  
    // Create HTML content containing movie info
    const moviePoster = createMoviePoster(movieInfo.poster_path);
    const titleHeader = createMovieTitle(movieInfo.title);
    const tagline = createMovieTagline(movieInfo.tagline)
    const releaseDate = createMovieReleaseDate(movieInfo.release_date);
    const overviewText = createMovieOverview(movieInfo.overview);
  
    // Append title, poster, and overview to page
    moviePosterDiv.appendChild(moviePoster);
    movieTextDiv.appendChild(titleHeader);
    movieTextDiv.appendChild(tagline);
    movieTextDiv.appendChild(releaseDate);
    movieTextDiv.appendChild(overviewText);
  
    showBtns();
    likeBtn.onclick = likeMovie;
    dislikeBtn.onclick = dislikeMovie;
};