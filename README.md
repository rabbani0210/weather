# weather
WEATHER APPLICATION 

COMPANY: CODTECH IT SOLUTIONS

NAME: SHAIK RABBANI

INTERN ID: CT06DM844

DOMAIN: Full-Stack Web Development

DURATION: 6 WEEEKS

MENTOR: NEELA SANTOSH
 
  API APPLICATION FOR WEATHER
 
### 🔷 Objective:

The primary objective of Task 1 is to build a responsive web application that dynamically interacts with a public API to fetch and display real-time data to users. For this task, a weather data API has been used, allowing users to enter a city name and retrieve the current weather conditions for that location. This task focuses on API integration, dynamic content rendering, and responsive UI design—all essential skills for modern web development.

---

### 🔷 Tools and Technologies Used:

* **HTML5**: Used to define the structure and content of the webpage.
* **CSS3**: Used for styling the page to ensure it is user-friendly, visually appealing, and responsive across devices.
* **JavaScript (Vanilla JS)**: Used for dynamic behavior—fetching data from the API and updating the DOM.
* **Public API – wttr.in**: This is a free, no-authentication-required weather API that returns weather data in text format.

---

### 🔷 Description of the Functionality:

When the webpage loads, users are greeted with a clean and centered interface. There’s a heading titled “🌦 Weather Info” followed by a text input box where users can type the name of a city. Beneath the input field, there is a “Get Weather” button that triggers the process of fetching and displaying the weather data.

The moment the user clicks the button:

1. JavaScript captures the input value (city name).
2. A `fetch()` request is sent to the URL `https://wttr.in/{city}?format=3`, which returns a short string containing the current weather.
3. The result is then dynamically displayed below the input area without refreshing the page.

For example, entering `London` and clicking the button may return:
`London: 🌦 +15°C`

If a user fails to enter a city name or encounters a connection problem, proper error messages are shown (e.g., “❗ Please enter a city name.” or “⚠️ Error fetching weather data.”).

---

### 🔷 API Details:

`wttr.in` is an ultra-lightweight, text-based weather API that can return weather reports in multiple formats. For this task, the `?format=3` option was chosen because it returns a concise and readable string with the city, condition, and temperature—ideal for a beginner-level integration.

**Advantages of using wttr.in:**

* No API key or account required
* Instant, real-time results
* Easy to parse with plain text or minimal formatting

---

### 🔷 Design and User Experience:

The page uses a **linear gradient background** and is designed to be centered both vertically and horizontally. The form elements (input and button) are styled for better visibility and usability. The layout is responsive and mobile-friendly—scaling down appropriately on smaller screens.

Interactive feedback is an essential aspect of user experience. Therefore:

* Input validation ensures the user doesn’t submit empty values.
* The UI dynamically updates to reflect either the success or failure of the API request.

---

### 🔷 Learning Outcomes:

By completing this task, the following key skills were reinforced:

* **API Integration**: Understanding how to use the Fetch API to send GET requests to a third-party service.
* **Asynchronous JavaScript**: Handling promises and response data asynchronously.
* **DOM Manipulation**: Dynamically updating the HTML content without reloading the page.
* **Responsive Web Design**: Creating layouts that work across devices using CSS.
* **Error Handling**: Managing edge cases like empty inputs and failed requests gracefully.

---

### 🔷 Future Improvements (Optional):

While this version is functional and minimalistic, there are several enhancements that could be added:

* Displaying more detailed weather data (e.g., humidity, wind, forecast).
* Adding icons or images representing weather conditions.
* Auto-detecting user location using the Geolocation API.
* Adding loading spinners during fetch operations.
* Using local storage to save recent searches.

---

### 🔷 Conclusion:

This task showcases a simple yet effective demonstration of how to build a dynamic web application using HTML, CSS, and JavaScript that consumes a real-world API. The ability to connect with external data sources and render content on the fly is one of the most powerful features of web development today, and this project introduces the fundamental concepts behind it. The minimal use of libraries and dependencies makes it easy to understand for beginners while laying a strong foundation for more complex integrations in future projects.

---

#OUTPUT

![Image](https://github.com/user-attachments/assets/252fad3e-7c0e-4b55-8326-90a2529c733d)

