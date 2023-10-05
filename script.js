function searchMovie() {
  searchString = document.getElementById("moviename").value;
  const API_KEY = "aaf342f2";
  const API_URL = `http://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`;
  const apiCall = fetch(API_URL);

  apiCall
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const output = data.Search.filter((movie) => {
        return movie.Year >= document.getElementById("year").value;
      });

      const output2 = output.map((movie) => {
        return `<li>
        ${movie.Title} (${movie.Year})  
              </li> <img src=${movie.Poster} />`;
      });

      document.getElementById("demo").innerHTML = output2.join(" ");
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
const btn = document.getElementById("btns");
btn.onclick = searchMovie;
