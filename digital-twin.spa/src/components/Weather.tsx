import {useMsal} from "@azure/msal-react";
import {useState} from "react";
import {loginRequest} from "../authConfig";
import {Button} from "react-bootstrap";
import {fetchWeather} from "../weather";
import {AuthenticationResult} from "@azure/msal-browser";

function Weather() {
    const { instance, accounts, inProgress } = useMsal();
    const [weatherData, setWeatherData] = useState(null);

    const name = accounts[0] && accounts[0].name;

    function RequestProfileData() {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {
            fetchWeather(response.accessToken).then(response => setWeatherData(response));
        }).catch((e) => {
            instance.acquireTokenRedirect(request).then((response: any) => {
                fetchWeather(response.accessToken).then(response => setWeatherData(response));
            });
        });
    }

    return (
        <div style={{marginTop: "10px"}}>
            {weatherData ?
                <>{JSON.stringify(weatherData)}</>
                :
                <Button variant="secondary" onClick={RequestProfileData}>Request Weather Forecast</Button>
            }
        </div>
    );
};

export default Weather;