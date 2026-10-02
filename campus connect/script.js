// Home button
function showMessage() {
    alert("Welcome to CampusConnect! 🎓");
}

// Event registration
function register(eventName) {
    alert("You have registered for " + eventName + "!");
}

// Club joining
function joinClub(clubName) {
    alert("Welcome to " + clubName + "!");
}

// Contact form
function submitForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("result").innerHTML =
        "Thank you, " + name + "! Your message has been submitted.";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
function loginStudent(event) {
    event.preventDefault();

    let name = document.getElementById("studentName").value;

    document.getElementById("loginResult").innerHTML =
        "Welcome, " + name + "! Login successful 🎓";

    document.getElementById("studentName").value = "";
    document.getElementById("studentEmail").value = "";
}
// Student Registration
function registerStudent(event) {
    event.preventDefault();

    let name = document.getElementById("regName").value;

    document.getElementById("registerResult").innerHTML =
        "🎉 Congratulations " + name + "! Registration successful.";

    document.getElementById("regName").value = "";
    document.getElementById("regEmail").value = "";
    document.getElementById("regCourse").value = "";
    document.getElementById("regCollege").value = "";
}
// Dashboard
function showDashboard(type) {

    let message = "";

    if (type === "profile") {
        message = "👤 Student Profile: Your profile information is available here.";
    }

    if (type === "events") {
        message = "📅 Upcoming Events: Coding Workshop, Cultural Fest and Sports Day.";
    }

    if (type === "clubs") {
        message = "🏫 Clubs: Coding Club, Art Club and Photography Club.";
    }

    if (type === "notifications") {
        message = "🔔 No new notifications at the moment.";
    }

    document.getElementById("dashboardResult").innerHTML = message;
}
// Search Events
function searchEvents() {

    let searchText =
        document.getElementById("eventSearch").value.toLowerCase();

    let events =
        document.querySelectorAll(".search-event");

    events.forEach(function(event) {

        let eventName = event.innerText.toLowerCase();

        if (eventName.includes(searchText)) {
            event.style.display = "block";
        } else {
            event.style.display = "none";
        }

    });
}
// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
// Event Registration
function eventRegister(eventName) {
    alert("🎉 Successfully registered for " + eventName + "!");
}
// Edit Profile
function editProfile() {

    let name = prompt("Enter your name:");
    let email = prompt("Enter your email:");
    let course = prompt("Enter your course:");
    let college = prompt("Enter your college:");

    if (name) {
        document.getElementById("profileName").innerText = name;
    }

    if (email) {
        document.getElementById("profileEmail").innerText = email;
    }

    if (course) {
        document.getElementById("profileCourse").innerText = course;
    }

    if (college) {
        document.getElementById("profileCollege").innerText = college;
    }
}
// Logout
function logoutStudent() {
    alert("You have been logged out successfully. 👋");
}
function contactUs() {
    let name = prompt("Enter your name:");
    let message = prompt("Enter your question:");

    if (name && message) {
        alert("Thank you " + name + "! Your message has been received.");
    } else {
        alert("Please enter your name and question.");
    }
}
function connectFeature() {
    alert("Connect with students and build your campus community!");
}

function discoverFeature() {
    document.getElementById("events").scrollIntoView({
        behavior: "smooth"
    });
}

function growFeature() {
    alert("Join workshops, competitions and activities to develop new skills!");
}
function eventRegister(eventName) {
    let name = prompt("Enter your name:");

    if (name !== null && name.trim() !== "") {
        alert("Thank you " + name + "! You have registered for " + eventName + ".");
    } else {
        alert("Please enter your name.");
    }
}
// Event Registration Function
function registerStudent(event) {
  event.preventDefault();
  
  let name = document.getElementById("regName") ? document.getElementById("regName").value : "Student";
  let selectedEvent = document.getElementById("eventName").value;
  
  if (selectedEvent) {
    alert("🎉 Registration Successful!\n\nEvent: " + selectedEvent);
    document.querySelector(".registration-section form").reset();
  } else {
    alert("Please select an event!");
  }
}
// Logout Functionality
function logoutStudent(event) {
  if (event) event.preventDefault();
  
  // Professional English confirmation dialog
  let confirmLogout = confirm("Are you sure you want to log out?");
  
  if (confirmLogout) {
    // Clear user session/data
    localStorage.removeItem("loggedInUser");
    
    // English success alert
    alert("You have been successfully logged out!");
    
    // Redirect to Home section
    window.location.href = "#home";
  }
}
// Smooth Scroll for Explore Campus
function exploreCampus() {
  const eventsSection = document.getElementById('events');
  if (eventsSection) {
    eventsSection.scrollIntoView({ behavior: 'smooth' });
  }
}
