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
        "id": 11223344
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
        name: "Elon musk",
        designation: "Software Engineer",
        id: 23456789
    }

]


const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");


cards.forEach(card=>{

<<<<<<< HEAD
    // create card div
=======

// create card div
>>>>>>> 3234e08 (Added responsive layout for card container using media queries)

 const cardDiv = document.createElement("div");
 cardDiv.classList.add("card-div");

 // flex wrapper

 const flexWrapper = document.createElement("div");
 flexWrapper.classList.add("flexWrapper");

 // candidate details 

 const employeeDetails = document.createElement("div")
 employeeDetails.classList.add("employeeDetails");

<<<<<<< HEAD
=======



>>>>>>> 3234e08 (Added responsive layout for card container using media queries)
 // profile picture section

 const profilePicture = document.createElement("img");
 profilePicture.classList.add("img");
 profilePicture.src =`${card.img}`;

<<<<<<< HEAD
  // name section 
=======
 

 // name section 
>>>>>>> 3234e08 (Added responsive layout for card container using media queries)
  
 const name = document.createElement("p");
 name.classList.add("name");
 name.textContent = ` ${card.name}`;

 // designation section

 const designation = document.createElement("p");
 designation.classList.add("designation");
 designation.textContent = `${card.designation}`;

<<<<<<< HEAD
  // id number section
=======
 // id number section
>>>>>>> 3234e08 (Added responsive layout for card container using media queries)

 const id = document.createElement("p");
 id.classList.add("id");
 id.textContent = `id : ${card.id}`



<<<<<<< HEAD
=======
 
 
>>>>>>> 3234e08 (Added responsive layout for card container using media queries)






<<<<<<< HEAD


 // append section

cardContainer.appendChild(cardDiv);
cardDiv.appendChild(flexWrapper);
flexWrapper.appendChild(employeeDetails);
flexWrapper.appendChild(profilePicture);
=======
// append section

cardContainer.appendChild(cardDiv);
cardDiv.appendChild(flexWrapper)
flexWrapper.appendChild(profilePicture);
flexWrapper.appendChild(employeeDetails);
>>>>>>> 3234e08 (Added responsive layout for card container using media queries)
employeeDetails.appendChild(name);
employeeDetails.appendChild(designation);
employeeDetails.appendChild(id)




<<<<<<< HEAD


    })


document.body.appendChild(cardContainer);
=======
})











document.body.appendChild(cardContainer);

// flex wrapper ar moddhe 2 to div ache

// 1 tai profile picture ache

// 1 tai text content ache

>>>>>>> 3234e08 (Added responsive layout for card container using media queries)
