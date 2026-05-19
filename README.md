# 🌤️ VibeWeather Pro

A beautifully designed Korean weather app with ambient sounds, dynamic video backgrounds, and rich weather data — built with vanilla HTML, CSS, and JavaScript.

![VibeWeather Pro](assets/icons/snow.png)

## ✨ Features

- 🔍 **Korean city search** — supports 300+ Korean cities and districts by name (한글 입력)
- 📍 **Geolocation** — one-tap weather for your current location
- 🌡️ **Rich weather data** — real feel temperature, humidity, UV index, air quality, visibility, pressure
- 🕐 **Live clock** — shows local time for any searched city with time-zone awareness
- 🎬 **Dynamic video backgrounds** — changes based on time of day (morning, afternoon, evening, night)
- 🔊 **Ambient sounds** — rain, winter, sunny, and night soundscapes
- 📅 **5-day forecast** + **12-hour hourly forecast**
- 🌙 **Moon phase tracker**
- ⚠️ **Weather alerts** — banners for thunder, blizzard, hail, extreme heat/cold
- 👕 **Outfit recommendations** based on current conditions
- 📤 **Share weather** — native share or clipboard copy
- 🕘 **Recent search** — remembers your last searched city

## 🛠️ Tech Stack

- **Frontend:** Vanilla HTML, CSS, JavaScript (no frameworks)
- **Weather API:** [WeatherAPI.com](https://weatherapi.com) — forecast, AQI, astronomy
- **Geocoding fallback:** Nominatim (OpenStreetMap) for unlisted Korean locations
- **Hosting:** Vercel (serverless proxy to hide API key)
- **Fonts:** Google Fonts — Poppins

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/sweety-HJH223/korean-weather-app.git
cd korean-weather-app
```

### 2. Get a WeatherAPI key
Sign up free at [weatherapi.com](https://weatherapi.com/signup.aspx) and grab your API key.

### 3. Deploy to Vercel
- Import the repo at [vercel.com](https://vercel.com)
- Add environment variable:
  - **Key:** `WEATHER_API_KEY`
  - **Value:** your API key
- Deploy!

The `api/weather.js` serverless function proxies all requests so your key is never exposed in the browser.

### Local development
For local testing, temporarily add your key back to `script.js` line 1:
```js
const apiKey = 'your_key_here';
```
And revert the fetch URL to the direct WeatherAPI endpoint. Remember to remove it before pushing!

## 📁 Project Structure

```
korean-weather-app/
├── index.html          # Main HTML
├── script.js           # All weather logic, API calls, DOM updates
├── style.css           # Glassmorphism UI, animations, responsive layout
├── api/
│   └── weather.js      # Vercel serverless proxy (hides API key)
└── assets/
    ├── icons/          # Weather icons & GIFs
    ├── images/         # Background videos (morning/afternoon/evening/night)
    └── sound/          # Ambient audio files
```

## 🌏 Korean City Support

Built-in coordinate map covers 300+ locations including:
- All Seoul districts (구)
- Gyeonggi-do cities
- All major metropolitan cities (부산, 대구, 인천, 광주, 대전, 울산)
- Gangwon, Chungcheong, Jeolla, Gyeongsang provinces
- Jeju Island

Falls back to Nominatim geocoding for any unlisted location.

## 📱 Responsive

Works on desktop and mobile. Hourly forecast scrolls horizontally on small screens.

## 📄 License

MIT — free to use and modify.

---

Made with ☀️ by [SweetyCodes](https://github.com/sweety-HJH223)
