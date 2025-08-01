const cards = [
    {
        img: "image/apna college 2.jpg",
        name: "Rafika Khatun",
        designation: "Frontend Developer",
        id: 34568987,
    },
    {
        img: "image/apna college 3.jpg",
        name: "Liam Anderson",
        designation: "Frontend Developer",
        id: 34568987
    },
    {
        img: "image/apna college 4.avif",
        name: "Olivia Nakamura",
        designation: "Backend Developer",
        id: 23456765
    },
    {
        img: "image/apna college 5.jpg",
        name: "Noah Schmidt",
        designation: "Full Stack Developer",
        id: 98765432
    },
    {
        img: "image/apna college 6.webp",
        name: "Emma Dubois",
        designation: "UI/UX Designer",
        id: 12345678
    },
    {
        img: "image/apna college 7.jpeg",
        name: "Lucas Rossi",
        designation: "Database Administrator",
        id: 56789123
    },
    {
        img: "image/apna college 8.jpeg",
        name: "Mia Lopez",
        designation: "DevOps Engineer",
        id: 11223344
    },
    {
        img: "image/apna college 9.jpeg",
        name: "Ethan Wang",
        designation: "Software Engineer",
        id: 99887766
    },
    {
        img: "image/apna college 10.jpeg",
        name: "Ava Kimlank",
        designation: "Mobile App Developer",
        id: 88776655
    },
    {
        img: "image/apna college 11.jpeg",
        name: "James Taylor",
        designation: "Quality Assurance Tester",
        id: 77665544
    },
    {
        img: "image/apna college 12.jpeg",
        name: "Sophia Fernandez",
        designation: "Network Engineer",
        id: 66554433
    },
    {
        img: "image/apna college 13.jpeg",
        name: "Elon Musk",
        designation: "Software Engineer",
        id: 23456789
    }
];

// Create container
const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");

// Loop through cards
cards.forEach(card => {
    // Create card wrapper
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card-div");

    // Create flex wrapper
    const flexWrapper = document.createElement("div");
    flexWrapper.classList.add("flexWrapper");

    // Profile picture
    const profilePicture = document.createElement("img");
    profilePicture.classList.add("img");
    profilePicture.src = `${card.img}`;

    // Employee details
    const employeeDetails = document.createElement("div");
    employeeDetails.classList.add("employeeDetails");

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = card.name;

    const designation = document.createElement("p");
    designation.classList.add("designation");
    designation.textContent = card.designation;

    const id = document.createElement("p");
    id.classList.add("id");
    id.textContent = `ID: ${card.id}`;

    // Append sections
    employeeDetails.appendChild(name);
    employeeDetails.appendChild(designation);
    employeeDetails.appendChild(id);

    flexWrapper.appendChild(profilePicture);
    flexWrapper.appendChild(employeeDetails);

    cardDiv.appendChild(flexWrapper);
    cardContainer.appendChild(cardDiv);
});

// Append to body
document.body.appendChild(cardContainer);
