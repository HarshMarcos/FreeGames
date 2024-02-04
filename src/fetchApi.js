const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1d5d94ae4emshb8009df8b4545a4p12267ajsn878f5c292830",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

export default async function fetchData(url) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
