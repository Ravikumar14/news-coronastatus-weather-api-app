let covidUrl = "http://api.covid19api.com/summary";
let indiaCovid = "https://api.covid19api.com/live/country/india";
window.fetch(covidUrl).then((data) => {
  data.json().then((covid) => {
    console.log(covid.Global);
    let Global = covid.Global;
    document.getElementById("covidBlock").innerHTML = `
        <div>
    <h4 class="badge badge-danger">Total confirmed</h4>
    <span>${Global.TotalConfirmed}</span>
    </div>
    <div>
    <h4 class="badge badge-danger">Total Deaths</h4>
    <span>${Global.TotalDeaths}</span>
    </div>
    <div>
    <h4 class="badge badge-danger">New confirmed</h4>
    <span>${Global.NewConfirmed}</span>
    </div>
    <div>
    <h4 class="badge badge-danger">New Deaths</h4>
    <span>${Global.NewDeaths}</span>
    </div>
    <div>
    <h4 class="badge badge-success">New Recovered</h4>
    <span>${Global.NewRecovered}</span>
    </div>
    <div>
    <h4 class="badge badge-success">Total Recovered</h4>
    <span>${Global.TotalRecovered}</span>
    </div>
    `;
  });
});
window.fetch(covidUrl).then((data) => {
  data.json().then((covid) => {
    console.log(...covid.Countries);
    // let Global = covid.Global;
    document.getElementById("covidIndiaBlock").innerHTML = `
        <div>
    <h4 class="badge badge-danger">Total confirmed</h4>
    <span>${Confirmed}</span>
    </div>
    <div>
    <h4 class="badge badge-danger">Total Deaths</h4>
    <span>${Deaths}</span>
    </div>
    
    <div>
    <h4 class="badge badge-danger">New Deaths</h4>
    <span>${Active}</span>
    </div>
    <div>
    <h4 class="badge badge-success">New Recovered</h4>
    <span>${Recovered}</span>
    </div>
    <div>
    <h4 class="badge badge-success">Total Recovered</h4>
    <span>${Date}</span>
    </div>
    `;
  });
});


