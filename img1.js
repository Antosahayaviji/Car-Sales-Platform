//Energy
const xxValues = ["India", "China", "Germany", "Asia", "USA"];
const yyValues = [35, 80, 60, 50, 76];
const barColors = [
    "#b91d47",
    "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];
new Chart("myChart", {
    type: "pie",
    data: {
        labels: xxValues,
        datasets: [{
            backgroundColor: barColors,
            data: yyValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "World Wide"
        }
    }
});
//Range
var aValues = ["India", "China", "Germany", "Asia", "USA"];
var bValues = [305, 180, 250, 200, 155];
var barrColors = ["red", "green","blue","orange","brown"];

new Chart("Chart", {
  type: "horizontalBar",
  data: {
  labels: aValues,
  datasets: [{
    backgroundColor: barrColors,
    data: bValues
  }]
},
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wide"
    },
    scales: {
      aAxes: [{ticks: {min: 10, max:60}}]
    }
  }
});

// Break Fluid
const xValues = ["India", "China", "Germany", "Asia", "USA"];
const yValues = [55, 49, 44, 24, 35];
const barrrColors = ["red", "green","blue","orange","brown"];

new Chart("isChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barrrColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine"
    }
  }
});

// Tire Wear
const qValues = ["India", "China", "Germany", "Asia", "USA"];
const wValues = [40, 50, 70, 60, 38];
const barColor = [
    "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];
new Chart("hiChart", {
    type: "doughnut",
    data: {
        labels: qValues,
        datasets: [{
            backgroundColor: barColor,
            data: wValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "World-Wide"
        }
    }
});

//Car Statics
const pValues = [50,60,70,80,90,100,110,120,130,140,150];
const oValues = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("myyyChart", {
  type: "line",
  data: {
    labels: pValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: oValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      oAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});

// Location

document.addEventListener('DOMContentLoaded', () => {
    const detectLocationBtn = document.getElementById('detectLocationBtn');
    const locationError = document.getElementById('locationError');
    const carDetailsBox = document.getElementById('carDetailsBox');

    detectLocationBtn.addEventListener('click', () => {
        // Clear previous error messages
        
        
        locationError.textContent = '';
        carDetailsBox.style.display = 'none'; // Hide the box before starting

        // Check if the browser supports Geolocation
        if (navigator.geolocation) {
            // 1. Permission is asked when getCurrentPosition is called
            navigator.geolocation.getCurrentPosition(
                successCallback,
                errorCallback,
                { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
            );
        } else {
            locationError.textContent = "Geolocation is not supported by this browser.";
        }
    });

    // Function executed if location is successfully retrieved
    function successCallback(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        

        // 2. Open Google Maps with the present location
        // The URL format is: https://www.google.com/maps/search/?api=1&query=<latitude>,<longitude>
        const mapsUrl = `https://www.google.com/maps/@${latitude},${longitude},15z`; // 15z is the zoom level

        // Open the map in a new tab/window
        window.open(mapsUrl, '_blank');
        
    

        // 3. Open the "Show Car Details" box after opening the map
        // A slight delay might improve user experience, but it can be immediate.
        // We'll use a small timeout to simulate the action happening *after* the map opens (though it's technically simultaneous).
        setTimeout(() => {
            carDetailsBox.style.display = 'block';
        }, 500); 
    }

    // Function executed if location retrieval fails (e.g., permission denied)
    function errorCallback(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                locationError.textContent = "User denied the request for Geolocation. Cannot show map.";
                break;
            case error.POSITION_UNAVAILABLE:
                locationError.textContent = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                locationError.textContent = "The request to get user location timed out.";
                break;
            case error.UNKNOWN_ERROR:
                locationError.textContent = "An unknown error occurred.";
                break;
        }
        // Ensure the car details box remains hidden on failure
        carDetailsBox.style.display = 'none';
    }
});



