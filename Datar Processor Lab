/*{
  "id": number,
  "name": string,
}

An AssignmentGroup object, which looks like this:
{
  "id": number,
  "name": string,
  // the ID of the course the assignment group belongs to
  "course_id": number,
  // the percentage weight of the entire assignment group
  "group_weight": number,
  "assignments": [AssignmentInfo],
}

Each AssignmentInfo object within the assignments array looks like this:
{
  "id": number,
  "name": string,
  // the due date for the assignment
  "due_at": Date string,
  // the maximum points possible for the assignment
  "points_possible": number,
}*/

const courseinfo = {
  id:  "Intro to Java",
  name: 452
}
// The provided assignment group.
const assignmentgroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 452,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "2023-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const learnersubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },

  
    




  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];



  // We define this function
  function isnumber(course, info, sub) {
    // This if statement will return false if any entry is not a number
    if (
      typeof course.id !== 'number' ||
      typeof info.id !== 'number' ||
      typeof info.course_id !== 'number' ||
      typeof info.group_weight !== 'number' ||
      !Array.isArray(info.assignments) ||
      info.assignments.some(assign => typeof assign.id !== 'number' || typeof assign.points_possible !== 'number') ||
      !Array.isArray(sub) ||
      sub.some(
        s =>
          typeof s.learner_id !== 'number' ||
          typeof s.assignment_id !== 'number' ||
          typeof s.submission.score !== 'number'
      )
    ) {
      return false;
    }
  
    return true;

  }

  let checkfornumber =isnumber(courseinfo , assignmentgroup ,learnersubmissions )

  //console.log(checkfornumber);


 // We define is string function to check for string entries
function isstring(course, info, sub) {
  // This if function will check if the entries are strings
  if (
    typeof course.name !== 'string' ||
    typeof info.name !== 'string' ||
    !Array.isArray(info.assignments) ||
    info.assignments.some(
      assign =>
        typeof assign.name !== 'string' ||
        typeof assign.due_at !== 'string'
    ) ||
    !Array.isArray(sub) ||
    sub.some(
      s =>
        typeof s.submission.submitted_at !== 'string'
    )
  ) {
    return false;
  } else {
    return true;
  }
}

let checkforstring =isstring(courseinfo , assignmentgroup ,learnersubmissions );
//console.log(checkforstring);


function courseidmatch(courseinfo, assignmentgroup) {
  if (courseinfo.id === assignmentgroup.course_id) {
    console.log('courseId match');
    return true;
  } else {
    console.log('courseId no match');

    return false;
  }
}


const iscourseidmatch = courseidmatch(courseinfo, assignmentgroup);

//console.log(isCourseIdMatch);

  
//this function will generate a switch statement to break
//If checkfor number and checkforstring are true will return true
//If checkfornumber is false and checkforstring is false it will return false
//if checkfornumber is true and checkforstring is false it will return false
////if checkfornumber is false and checkforstring is true it will return false
function isvalid(number, string) {
  switch (true) {
    case number && string:
      return true; // Both are true
      break;
    case !number && !string:
      return false; // Both are false
      break;
    default:
      return false; // In all other cases
  }
}

let validateme=isvalid(checkfornumber,checkforstring);

//console.log(validateme);


// This function will check if submission is late
// Returns true for on time and false for late
// Compares the due time and submitted time for lateness
function islate(duetime, submittedtime) {
  const dueDate = new Date(duetime);
  const submittedDate = new Date(submittedtime);
   
  // Compare the due date and submitted date
  if (submittedDate > dueDate) {
    return true; // Assignment on time
  } else {
    return false; // Assignment late
  }
}


// this functuon will print assignment data into rows of object

function extractassignmentdata(assignmentgroup) {
  return assignmentgroup.assignments.map(assignment => ({
    id: assignment.id,
    due_at: assignment.due_at,
    points_possible: assignment.points_possible,

  }));
}
// this functuon will print learner assignment data into rows of object
function extractlearnerassignmentdata(learnersubmissions) {
  return learnersubmissions.map(submission => ({
    id: submission.assignment_id, // Using assignment_id instead of id
    due_at: submission.submission.submitted_at, // Using submitted_at instead of due_at
    score: submission.submission.score, // Using score instead of points_possible
  }));
}


const assignmentData = extractassignmentdata(assignmentgroup);
console.log("Assignment Data:", assignmentData);

// Print learner assignment data
const learnerAssignmentData = extractlearnerassignmentdata(learnersubmissions);
console.log("Learner Assignment Data:", learnerAssignmentData);

//this function will filter learner assignment data if id and due date are equal we print new learner assignment data that
//the new learner assignment print will not include the id and due_at that are similar that in the assignment data





// Function to process assignment data and learner submissions
function processAssignmentData(assignmentgroup, learnersubmissions) {
  // Result array to store processed data
  const result = [];

  // Extract assignments data from the assignment group
  const assignmentData = assignmentgroup.assignments;

  // Iterate through each learner submission
  for (const submission of learnersubmissions) {
    // Find the corresponding assignment for the submission
    const assignment = assignmentData.find(assignment => assignment.id === submission.assignment_id);

    // If the assignment is found
    if (assignment) {
      // Convert due date and submitted date to Date objects
      const dueDate = new Date(assignment.due_at);
      const submittedDate = new Date(submission.submission.submitted_at);

      // Initialize status variable
      let status;

      // Determine the status based on submission and due dates
      if (submittedDate > dueDate) {
        status = 'late';
      } else if (submittedDate < dueDate) {
        status = 'not yet due';
      } else {
        status = 'on time';
      }

      // Add processed data to the result array
      result.push({
        learner_id: submission.learner_id,
        assignment_id: submission.assignment_id,
        assignment_name: assignment.name,
        due_at: assignment.due_at,
        points_possible: assignment.points_possible,
        submitted_at: submission.submission.submitted_at,
        score: submission.submission.score,
        status: status,
      });
    }
  }

  // Return the processed result array
  return result;
}
// Example usage
const processedData = processAssignmentData(assignmentgroup, learnersubmissions);
console.log(processedData); 

//turn processeddata into row of arrays 












//Main FUnction
//use try and catch error

// Main function
function getLearnerData(courseinfo, assignmentgroup, learnersubmissions) {
  const errors = [];

  // Check if all entries are numbers
  if (!isnumber(courseInfo, assignmentGroup, learnerSubmissions)) {
    errors.push('Please make sure to enter valid numbers for course, assignment, and submission');
  }

  // Check if all entries are strings
  if (!isstring(courseInfo, assignmentGroup, learnerSubmissions)) {
    errors.push('Please make sure to enter valid strings for course, assignment, and submission');
  }

  // Check if course IDs match
  if (!courseidmatch(courseinfo, assignmentgroup)) {
    errors.push('Please make sure that the course IDs match');
  }

  // If there are errors, throw a single error with all messages
  if (errors.length > 0) {
    throw new Error(errors.join('\n'));
  }
  
  


try {
  getLearnerData(courseInfo, assignmentaroup, learnersubmissions);
} catch (error) {
  console.error(error.message);
}
}





