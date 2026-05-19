export default async function handler(req, res) {
  const { q, days } = req.query;
  const apiKey = process.env.WEATHER_API_KEY;
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${q}&days=${days}&aqi=yes&alerts=no&lang=ko`
  );
  const data = await response.json();
  res.status(200).json(data);
}
