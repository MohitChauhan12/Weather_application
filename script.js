function takeInput() {
    return document.getElementById("inputText").value;
}

class Weather {
    weatheries = {};
    async getWeather() {
        let city = takeInput();
        let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=d87015810cfe476ea10193622241607&q=${city}`);
        this.weatheries = await response.json();
        this.renderWeather();
    }
    renderWeather() {
        let root = document.getElementById("root");
        root.innerHTML = ''; 

        let parentDiv = document.createElement("div");
        parentDiv.className = "ParentDiv";

        let childDiv = document.createElement("div");
        childDiv.className = "childDiv";

        let condition = document.createElement("p");
        condition.innerHTML = this.weatheries.current.condition.text;

        let img = document.createElement("img");
        img.src = this.weatheries.current.condition.icon;
        img.alt = this.weatheries.current.condition.text;

        let h1 = document.createElement("h1");
        h1.innerHTML = `Last update: ${this.weatheries.current.last_updated}`;

        let h2 = document.createElement("h2");
        h2.innerHTML = `${this.weatheries.location.country}`;

        let h3 = document.createElement("h3");
        h3.innerHTML = this.weatheries.location.name;

        let h4 = document.createElement("h4");
        h4.innerHTML = `${this.weatheries.current.temp_c}°C`;

        // Append elements
        childDiv.appendChild(img);
        childDiv.appendChild(condition);
        childDiv.appendChild(h4);
        childDiv.appendChild(h3);
        childDiv.appendChild(h2);
        childDiv.appendChild(h1);
        parentDiv.appendChild(childDiv);
        root.appendChild(parentDiv);
    }
}

function fetchWeather() {
    let weather = new Weather();
    weather.getWeather();
}