
const API_KEY=process.env.REACT_APP_API_KEY;
const request={
    FetchPopular:`/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
    FetchUpcoming:`/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    FetchNetOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    FetchActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`
}

export default request;
