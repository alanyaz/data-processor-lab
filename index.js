const courseinfo = {
  id:  "Intro to Java",
  name: 452
}
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



  function isnumber(course, info, sub) {
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



function isstring(course, info, sub) {
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


  

function isvalid(number, string) {
  switch (true) {
    case number && string:
      return true; 
      break;
    case !number && !string:
      return false; 
      break;
    default:
      return false; 
  }
}

let validateme=isvalid(checkfornumber,checkforstring);




function islate(duetime, submittedtime) {
  const dueDate = new Date(duetime);
  const submittedDate = new Date(submittedtime);
   
  
  if (submittedDate > dueDate) {
    return true; 
  } else {
    return false; 
  }
}



function extractassignmentdata(assignmentgroup) {
  return assignmentgroup.assignments.map(assignment => ({
    id: assignment.id,
    due_at: assignment.due_at,
    points_possible: assignment.points_possible,

  }));
}
function extractlearnerassignmentdata(learnersubmissions) {
  return learnersubmissions.map(submission => ({
    id: submission.assignment_id, 
    due_at: submission.submission.submitted_at, 
    score: submission.submission.score, 
  }));
}


const assignmentData = extractassignmentdata(assignmentgroup);
console.log("Assignment Data:", assignmentData);

const learnerAssignmentData = extractlearnerassignmentdata(learnersubmissions);
console.log("Learner Assignment Data:", learnerAssignmentData);






function processAssignmentData(assignmentgroup, learnersubmissions) {
  const result = [];

  const assignmentData = assignmentgroup.assignments;

  for (const submission of learnersubmissions) {
    const assignment = assignmentData.find(assignment => assignment.id === submission.assignment_id);

    if (assignment) {
      const dueDate = new Date(assignment.due_at);
      const submittedDate = new Date(submission.submission.submitted_at);

      let status;

      if (submittedDate > dueDate) {
        status = 'late';
      } else if (submittedDate < dueDate) {
        status = 'not yet due';
      } else {
        status = 'on time';
      }

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

  return result;
}
const processedData = processAssignmentData(assignmentgroup, learnersubmissions);
console.log(processedData); 







