async function getMatchData() {
  return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=09a4a616-c776-4537-95bd-00758235ca13&offset=0")
    .then((data) => data.json())
    .then((data) => {
      if (data.status != "success") return;

      const matchesList = data.data;

      if (!matchesList) return [];

      //add your api key from cricketdata.org
      const relevantData = matchesList.filter((match) => match.series_id == "4eeb97cf-9700-49a6-98f3-8854925befa0").map((match) => `${match.name}, ${match.status}`);

      console.log({ relevantData });

      document.getElementById("matches").innerHTML = relevantData.map((match) => `<li>${match} </li>`).join("");

      return relevantData;
    })
    .catch((e) => console.log(e));
}

getMatchData();
