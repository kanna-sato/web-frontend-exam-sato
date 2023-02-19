// APIアクセス
const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=precipitation&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo';
fetch(apiUrl)
  .then(res => res.json())
  .then(json => console.log(json))

