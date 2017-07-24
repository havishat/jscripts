var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

for(var i=0; i<students.length; i++) {

console.log(students[i].first_name, students[i].last_name);

}


var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

console.log("Studetns")
var count = 0;
for(var i=0; i < users.Students.length; i++ ) {
count = count + 1;
var length = users.Students[i].first_name.length + users.Students[i].last_name.length;
console.log(count, users.Students[i].first_name, users.Students[i].last_name, length);

}
var count1 = 0;
console.log("Instructors")
for(var i=0; i < users.Instructors.length; i++ ) {
count1 = count1 + 1;
var length = users.Instructors[i].first_name.length + users.Instructors[i].last_name.length;
console.log(count1, users.Instructors[i].first_name, users.Instructors[i].last_name, length);

}
