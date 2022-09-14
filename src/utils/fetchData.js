// const options = {
//     method: 'GET',
//     url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
//     headers: {
//       'X-RapidAPI-Key': '25273d2b6dmsh7fb50b2657a6014p1ef4fcjsn8c458b2eb968',
//       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//     }
//   };

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };