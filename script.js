// Get the login page and tracker page
const loginPage = document.getElementById("login-page");
const trackerPage = document.getElementById("tracker-page");

// Get the login form
const loginForm = document.getElementById("login-form");
// Get the logout button
const logoutButton = document.getElementById("logout-button");
// Get navigation links
const dashboardLink = document.getElementById("dashboard-link");
const activitiesLink = document.getElementById("activities-link");
const skillsLink = document.getElementById("skills-link");
const performanceLink = document.getElementById("performance-link");

// Get dashboard sections
const dashboardSection = document.getElementById("dashboard-section");
const activitiesSection = document.getElementById("activities-section");
const skillsSection = document.getElementById("skills-section");
const performanceSection = document.getElementById("performance-section");
// Get the activity form
const activityForm = document.getElementById("activity-form");
// Get attendance elements
const attendanceRate = document.getElementById("attendance-rate");
const daysPresent = document.getElementById("days-present");
const daysAbsent = document.getElementById("days-absent");

const presentButton = document.getElementById("present-button");
const absentButton = document.getElementById("absent-button");
// Get the activity input fields
const activityInput = document.getElementById("activity");
const descriptionInput = document.getElementById("description");

// Find the statistics
const statCards = document.querySelectorAll(".stat-card");
// Count skills
const skillCards = document.querySelectorAll(".skill-card");
statCards[2].querySelector("p").textContent = skillCards.length;


// Show login page first
trackerPage.style.display = "none";
// Count existing completed activities
const existingActivities = activitiesSection.querySelectorAll(".activity-card");
const tasksCompleted = statCards[1].querySelector("p");
const progressNumber = statCards[0].querySelector("p");
let currentTasks = existingActivities.length;

tasksCompleted.textContent = currentTasks;

let progress = currentTasks * 20;

if (progress > 100) {
    progress = 100;
}

progressNumber.textContent = progress + "%";
progressNumber.textContent = progress + "%";

// LOGIN
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter your username and password.");
        return;
    }

    loginPage.style.display = "none";
    trackerPage.style.display = "block";
});


// ADD NEW ACTIVITY
// ADD NEW ACTIVITY
activityForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const activity = activityInput.value.trim();
    const description = descriptionInput.value.trim();

    if (activity === "" || description === "") {
        alert("Please fill in both fields.");
        return;
    }

    // Create a new activity card
    const newActivity = document.createElement("div");
    newActivity.classList.add("activity-card");

    newActivity.innerHTML = ` 
    <h3>${activity}</h3> 
    <p>${description}</p> 
    <p>Status: Completed</p>
    <p>
        <strong>Supervisor Feedback:</strong>
        Pending Review
    </p>
`;

    // Add the new activity to the page
    activityForm.parentElement.insertBefore(newActivity, activityForm);

    // Clear the form
    activityInput.value = "";
    descriptionInput.value = "";

    // Update completed tasks
    const tasksCompleted = statCards[1].querySelector("p");
    let currentTasks = Number(tasksCompleted.textContent);

    currentTasks++;
    tasksCompleted.textContent = currentTasks;

    // Update progress
    const progressNumber = statCards[0].querySelector("p");
    let progress = currentTasks * 20;

    if (progress > 100) {
        progress = 100;
    }

    progressNumber.textContent = progress + "%";
});
// LOGOUT
logoutButton.addEventListener("click", function() {
    trackerPage.style.display = "none";
    loginPage.style.display = "block";
});
// NAVIGATION

dashboardLink.onclick = function() {
    dashboardSection.scrollIntoView({ behavior: "smooth" });

    dashboardLink.classList.add("active");
    activitiesLink.classList.remove("active");
    skillsLink.classList.remove("active");
    performanceLink.classList.remove("active");
};

activitiesLink.onclick = function() {
    activitiesSection.scrollIntoView({ behavior: "smooth" });

    dashboardLink.classList.remove("active");
    activitiesLink.classList.add("active");
    skillsLink.classList.remove("active");
    performanceLink.classList.remove("active");
};

skillsLink.onclick = function() {
    skillsSection.scrollIntoView({ behavior: "smooth" });

    dashboardLink.classList.remove("active");
    activitiesLink.classList.remove("active");
    skillsLink.classList.add("active");
    performanceLink.classList.remove("active");
};

performanceLink.onclick = function() {
    performanceSection.scrollIntoView({ behavior: "smooth" });

    dashboardLink.classList.remove("active");
    activitiesLink.classList.remove("active");
    skillsLink.classList.remove("active");
    performanceLink.classList.add("active");
};
presentButton.onclick = function() {
    let present = Number(daysPresent.textContent);

    present++;

    daysPresent.textContent = present;

    let absent = Number(daysAbsent.textContent);

    let totalDays = present + absent;

    let rate = (present / totalDays) * 100;

    attendanceRate.textContent = Math.round(rate) + "%";
};
absentButton.onclick = function() {
    let absent = Number(daysAbsent.textContent);

    absent++;

    daysAbsent.textContent = absent;

    let present = Number(daysPresent.textContent);

    let totalDays = present + absent;

    let rate = (present / totalDays) * 100;

    attendanceRate.textContent = Math.round(rate) + "%";
};
// Overall internship progress
const overallProgress = document.getElementById("overall-progress");
const overallProgressBar = document.getElementById("overall-progress-bar");

const startDate = new Date(2026, 7, 24);
const endDate = new Date(2026, 9, 14);
const today = new Date();

let overallPercentage;
s
if (today < startDate) {
    overallPercentage = 0;
} else if (today >= endDate) {
    overallPercentage = 100;
} else {
    const totalTime = endDate - startDate;
    const elapsedTime = today - startDate;

    overallPercentage = Math.round((elapsedTime / totalTime) * 100);
}

overallProgress.textContent = overallPercentage + "%";
overallProgressBar.style.width = overallPercentage + "%";