import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {language: 'es-ES'},
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmJkN2YxNGY1Nzk5N2U2NjY2NzFjOWQ1YmNhNTY5NSIsInN1YiI6IjY0NTkzNzFkNzdkMjNiMDExOWUwZTNhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ixfst8l5mGIo0x3ndQW1BEeevR-G0ku8ZlDjVu4YlZ8',
  },
});

export default movieDB;
