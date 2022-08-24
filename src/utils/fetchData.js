// export const exerciseOptions =  {
//     method: 'GET',
//     url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
//     headers: {
//       'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
//       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//     }
//   };
// const options = {
//   method: 'GET',
//   url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };
// 1
// const axios = require("axios");

// export const options = {
//   method: 'GET',
//   url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
//   headers: {
//     'X-RapidAPI-Key': 'db320ac64cmsh7b4da4ab601a4b1p138a0ejsn27e1bb9edd94',
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };


  // export const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  //     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY
  //   },
  // };
  // 2
  //  const exerciseOptions = {
  //   method: 'GET',
  //    headers: {
  //      'X-RapidAPI-Key': process.env.REACT_RAPID_API_KEY,
  //      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  //    }
  //  };
// 3
//  export const fetchData = async (url,options)=>{
//      const response = await fetch(url , options);
//       const data = await response.json();

//       return data;
//   }
// const options = {
//   method: 'GET',
//   url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
//   params: {
//     id: 'YQHsXMglC9A',
//     hl: 'en',
//     gl: 'US',
//     next: 'CBQSDRILWVFIc1hNZ2xDOUEYACreAQjQr43tubfzi64BCNi24eOapu-n7AEIgejpz9fcuPajAQjwqMe8v7SEuJ0BCI3CwqDWu4nahAEItNrrwNnAzuQ1CK6-ooCH-Jj5JAik8O-ahq3L1sYBCMb965f10YS4UwiNkaXwtL_gzi4I1vOMu5f7r4HeAQjEuYHvqNfimgwIzvHK75mt1Z27AQjw_7n5yaLZ3_UBCJOq5eCOo-XS_QEIocGSnpeajIsXCN2F2tj65L_4zwEI4KbhwtjP98duCI_C_IbhttbzTAi2gO-y3KbjuZgBCNbN7-m31YCKVmoPd2F0Y2gtbmV4dC1mZWVk'
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
//   }
// };


// export const exerciseOptions = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//   },
// };

// export const youtubeOptions = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
//     'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
//   },
// };

// export const fetchData = async (url, options) => {
//   const res = await fetch(url, options);
//   const data = await res.json();

//   return data;
// };
export const options = {
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