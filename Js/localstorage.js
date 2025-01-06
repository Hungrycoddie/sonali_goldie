// API URL for fetching followers
const apiUrl = 'https://api.github.com/users/Arun-cloud-dev/followers';

// Function to fetch followers data and save it to local storage
async function fetchAndStoreFollowers() {
  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const followersData = await response.json(); // Parse JSON response

    // Save the data to local storage
    localStorage.setItem('followers', JSON.stringify(followersData));
    console.log('Followers data saved to local storage:', followersData);
  } catch (error) {
    console.error('Error fetching followers data:', error);
  }
}

// Function to display followers data from local storage
function displayFollowersFromStorage() {
  const storedData = localStorage.getItem('followers');
  if (storedData) {
    const followers = JSON.parse(storedData);
    const container = document.getElementById('followers-container');
    container.innerHTML = ''; // Clear previous content

    followers.forEach(follower => {
      const followerElement = document.createElement('div');
      followerElement.className = 'follower-card';
      followerElement.innerHTML = `
        <img src="${follower.avatar_url}" alt="${follower.login}" class="avatar">
        <p><strong>${follower.login}</strong></p>
        <a href="${follower.html_url}" target="_blank">View Profile</a>
      `;
      container.appendChild(followerElement);
    });
  } else {
    console.log('No followers data found in local storage.');
  }
}

// Fetch and store followers when the page loads
document.addEventListener('DOMContentLoaded', () => {
  fetchAndStoreFollowers().then(() => displayFollowersFromStorage());
});





