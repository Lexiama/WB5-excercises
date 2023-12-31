let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];
   

   // When does the PROG200 course start? -find
   
   //const course = courses.find(course => course.CourseId === "PROG200"); // NOT A COMMENT
   const startDate = course.StartDate;
   console.log(`The PROG200 course starts on ${startDate}.`);
   
//-----------------------------------------------------------------------------------------------//

// What is the title of the PROJ500 course? -find
const course = courses.find(course => course.CourseId === "PROJ500");
const title = course.Title;
console.log(`The PROJ500 course is titled "${title}".`);

  
//-----------------------------------------------------------------------------------------------//

// What are the titles of the courses that cost $50 or less? - filter
const inexpensiveCourses = courses.filter(course => parseFloat(course.Fee) <= 50);
const titles = inexpensiveCourses.map(course => course.Title);
console.log("Courses that cost $50 or less:");
titles.forEach(title => console.log(title));

//-----------------------------------------------------------------------------------------------//


// What classes meet in "Classroom 1"? - filterconst classroom1Courses = courses.filter(course => course.Location === "Classroom 1");
const classroom1Titles = classroom1Courses.map(course => course.Title);
console.log("Courses that meet in Classroom 1:");
classroom1Titles.forEach(title => console.log(title));
