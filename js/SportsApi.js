// let apikey="a4df512ea326422da0a887226edef43a"
// let entertainmentApi =
//   "http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=a4df512ea326422da0a887226edef43a";
// let healthApi =
//   "http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=a4df512ea326422da0a887226edef43a";
// let businessApi =
//   "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a4df512ea326422da0a887226edef43a";
// let technologyApi =
//   "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=a4df512ea326422da0a887226edef43a";
// let scienceApi =
//   "http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=a4df512ea326422da0a887226edef43a";

/*=============Sports Section starts here=============*/

let SportsApi =
  "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a4df512ea326422da0a887226edef43a";
window
  .fetch(SportsApi)
  .then((SportsData) => {
    SportsData.json()
      .then((sports) => {
        console.log(sports.articles);
        let SportsInfo = sports.articles;
        let firstSportsBlock = sports.articles;
        let sportsnewsBlockOne = firstSportsBlock[0];
        document.getElementById("FirstSports").innerHTML = `
        <ul>
        <img src="${sportsnewsBlockOne.urlToImage}"/>
        </ul>`;
        let output = [];
        for (let sport of SportsInfo) {
          // console.log(sport);
          output += `
          <ul class="list-group p-2 my-2">
          <a href="${sport.url}" target="_blank"><li class="text-dark">${sport.title}</li></a>
          </ul>
          `;
          document.getElementById("AllSports").innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

/*=============Sports Section ends here=============*/
