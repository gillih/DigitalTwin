
export async function fetchWeather(accessToken:string) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options:RequestInit = {
        method: "GET",
        headers: headers,
        credentials: "include"
    };

    return fetch("https://localhost:5001/WeatherForecast", options)
        .then(response => response.json())
        .catch(error => console.log(error));
}