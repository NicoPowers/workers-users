// For local development, use the following line:
// const apiBaseUrl = 'http://localhost:51512';

// For production, use the following line with your domain name:
// const apiBaseUrl = 'https://user-mgmt.yourdomain.com';

// Or, if you're running the user-mgmt worker under a route on the same domain as this front end:
const apiBaseUrl = `${window.location.protocol}//${window.location.host}/user-api`;


export function callApi(endpoint, data = null) {
    const url = apiBaseUrl + endpoint;
    console.log(url)
    const options = {
        credentials: 'include',
        crossDomain: false,
        method: 'GET', // Assuming GET since we're loading data; adjust if necessary
        headers: {
            'Content-Type': 'application/json'
        },
    };
    // If data is provided, add it to the request
    if (data) {
        try {
            options.body = JSON.stringify(data);
            options.method = 'POST'; // Switch to POST if data is included
        }
        catch (e) {
            throw new Error(options.body || 'Network response was not ok'); // Use the server's error message if available
        }
        
    }

    return fetch(url, options)
        .then(async response => {
            if (!response.ok) {
                const errorData = await response.json(); // Attempt to parse the error response
                throw new Error(options.body || 'Network response was not ok'); // Use the server's error message if available
            }
            return response.json();
        });
}
