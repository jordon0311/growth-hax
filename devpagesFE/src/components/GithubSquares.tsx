// const GithubSquares = () => {
//     // Replace with your GitHub username
//     const username = 'your-github-username';
//     const apiUrl = `https://api.github.com/users/${username}/events/public`;

//     // Fetch data from GitHub API
//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             // Process data to extract contribution information
//             // Example: count contributions by day and generate HTML/CSS to display squares
//             const contributionSquares = document.getElementById('contribution-squares');

//             // Example logic to generate squares
//             data.forEach(event => {
//                 // Process events to count contributions per day
//                 // Example: update squares based on contributions
//             });

//             // Example: render contribution squares as HTML/CSS
//             // contributionSquares.innerHTML = ...;
//         })
//         .catch(error => {
//             console.error('Error fetching GitHub data:', error);
//             // Handle error, e.g., display a message on the webpage
//         });
//     return (
//         <div className="flex flex-row gap-2">
//             <div className="bg-gray-200 rounded-lg">
//                 <p>Github</p>
//             </div>
//         </div>
//     )
// }