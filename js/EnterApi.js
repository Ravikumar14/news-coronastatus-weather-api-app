// let apikey="a4df512ea326422da0a887226edef43a"
let entertainmentApi =
  "http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=a4df512ea326422da0a887226edef43a";

/*============Entertinement Section starts here=============*/
window
  .fetch(entertainmentApi)
  .then((entertainmentData) => {
    entertainmentData
      .json()
      .then((entertainment) => {
        console.log(entertainment.articles);
        let EntertainmentInfo = entertainment.articles;
        let output = [];
        for (let enter of EntertainmentInfo) {
          // console.log(enter);
          let date = new Date(enter.publishedAt).toDateString();
          output += `
          <div class="row">
                <div class="col=md-5">
                  <img src="${enter.urlToImage}" class="enterImg"/>
                </div>
               <div class="col-md-7">
                  <ul class="list-group">
                  <a href="${enter.url}" target="_blank">
                  <li class="text-dark">${enter.title}</li></a>
                  <span class="text-muted text-right">publishedAt:${date}</span>
                  </ul>
                </div>
          </div>
          `;
          document.getElementById(
            "entertainmentAllTemplate"
          ).innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

/*============Entertinement Section ends here=============*/
