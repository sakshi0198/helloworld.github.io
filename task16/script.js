// Student Data

let students = [

{
    name:"Salmaan Ahmed",
    marks:38,
    class:"3rd",
    address:"India"
},

{
    name:"Riya Sharma",
    marks:85,
    class:"10th",
    address:"123, ABC Colony, Delhi"
},

{
    name:"Rohan Patel",
    marks:70,
    class:"12th",
    address:"456, XYZ Street, Mumbai"
},

{
    name:"Priya Singh",
    marks:95,
    class:"8th",
    address:"789, PQR Nagar, Bangalore"
},

{
    name:"Ankit Gupta",
    marks:60,
    class:"9th",
    address:"101, LMN Road, Kolkata"
},

{
    name:"Neha Verma",
    marks:80,
    class:"11th",
    address:"222, DEF Avenue, Chennai"
},

{
    name:"Manoj Kumar",
    marks:75,
    class:"10th",
    address:"333, GHI Lane, Hyderabad"
},

{
    name:"Pooja Mishra",
    marks:88,
    class:"12th",
    address:"444, STU Colony, Pune"
},

{
    name:"Rajesh Singhania",
    marks:92,
    class:"9th",
    address:"555, VWX Street, Jaipur"
}

];



// Function to display cards

function displayStudents(studentList){

    let cards = studentList.map(function(student){

        return `

        <div class="card">

            <h3>Student Name: ${student.name}</h3>

            <p>Marks: ${student.marks}%</p>

            <p>Class: ${student.class}</p>

            <p>Address: ${student.address}</p>

        </div>

        `;

    });

    document.getElementById("studentContainer").innerHTML = cards.join("");

}



// Show all students initially

displayStudents(students);



// Search Button

document.getElementById("searchBtn").addEventListener("click",function(){

    let searchText = document.getElementById("searchBox").value.toLowerCase();

    let filteredStudents = students.filter(function(student){

        return student.name.toLowerCase().includes(searchText);

    });


    if(searchText==""){

        document.getElementById("resultTitle").innerHTML="";

        displayStudents(students);

    }

    else{

        document.getElementById("resultTitle").innerHTML=
        "<h2>Search Results for " + searchText + "...</h2>";

        displayStudents(filteredStudents);

    }

});