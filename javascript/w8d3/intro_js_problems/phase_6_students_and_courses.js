/*
PHASE 6

Instructions

Write classes to model students and the courses they can enroll in.

  * Student class
    * Student - a constructor function which should take a first and last name, 
      and set both of those as attributes. It should also set a courses 
      attribute to an empty array.
    * Student.prototype.name - returns the concatenation of the student's first 
      and last name
    * Student.prototype.enroll - receives Course object, adds it to the 
      student's list of courses, and updates the Course's list of enrolled 
      students
        * enroll should ignore attempts to re-enroll a student
    * Student.prototype.courseLoad - returns a hash of departments to number of 
      credits the student is taking in that department
  * Course class
    * Course, a constructor function which should take the course name, 
      department, and number of credits. It should also initialize students 
      attribute to an empty array.
    * Course.prototype.addStudent should add a student to the class
      * Probably can rely upon Student.prototype.enroll
  * Overlapping Courses
    * Each course should also take a set of days of the week ('mon', 'tue', 
      ...), plus a time block (assume each day is broken into 8 consecutive 
      time blocks). So a course could meet ['mon', 'wed', 'fri'] during block 
      #1.
    * Update your constructor function to also take a time block and days of 
      the week
    * Write a method Course.prototype.conflictsWith which takes a second Course
      and returns true if they conflict
    * Update Student.prototype.enroll so that an error is raised if a Student 
      enrolls in a course that conflicts with an existing course time
    * Write a Student.prototype.hasConflict helper method
*/

function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
}

Student.prototype.name = function() {
  return `${firstName} ${this.lastName}`;
}

Student.prototype.enroll = function(course) {
  if (course.students.include(this)) {
    throw `Error: ${this.name} is already enrolled in ${course}!`
  } else if (this.hasConflict(course)) {
    throw `Error: ${course} conflicts with ${this.name}'s scheduled classes!`;
  } else {
    this.courses.push(course);
    course.students.push(this);
    return `Success! ${this.name} is now enrolled in ${course}.`;;
  }
}

Student.prototype.hasConflict = function(newCourse) {
  this.courses.forEach((course) => {
    if (course.conflictsWith(newCourse)) {
      return true;
    }
  });
  return false;
}

function Course(
  courseName, 
  department, 
  numCredits,
  days,
  timeBlock
  ) {
  this.courseName = courseName;
  this.department = department;
  this.numCredits = numCredits;
  this.days = days;
  this.timeBlock = timeBlock;
  this.students = [];
}

Course.prototype.addStudent = function(student) {
  return student.enroll(this);
}

Course.prototype.conflictsWith = function(course) {
  function compareDates(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.include(arr1[i])) return true;
    }
    return false;
  }
  
  if (this.timeBlock === course.timeBlock) {
    return compareDates(this.days, course.days);
  } else {
    return false;
  }
}