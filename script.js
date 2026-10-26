// Student Registration

const studentForm = document.getElementById("studentForm");

if (studentForm) {

  studentForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const studentClass = document.getElementById("studentClass").value.trim();
    const subject = document.getElementById("studentSubject").value.trim();
    const phone = document.getElementById("parentPhone").value.trim();

    if(name.length < 3){
      alert("Please enter a valid student name.");
      return;
    }

    if(studentClass === ""){
      alert("Please enter class.");
      return;
    }

    if(subject === ""){
      alert("Please enter subject.");
      return;
    }

    if(!/^[0-9]{10}$/.test(phone)){
      alert("Please enter a valid 10 digit mobile number.");
      return;
    }

    const message =
`🎓 STUDENT ENQUIRY

Student Name: ${name}
Class: ${studentClass}
Subject: ${subject}
Parent Mobile: ${phone}`;

    window.open(
      "https://wa.me/916299397100?text=" +
      encodeURIComponent(message),
      "_blank"
    );

  });

}


// Tutor Registration

const tutorForm = document.getElementById("tutorForm");

if (tutorForm) {

  tutorForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("tutorName").value.trim();
    const qualification = document.getElementById("qualification").value.trim();
    const experience = document.getElementById("experience").value.trim();
    const subject = document.getElementById("teachSubject").value.trim();
    const location = document.getElementById("location").value.trim();
    const mobile = document.getElementById("mobile").value.trim();

    if(name.length < 3){
      alert("Please enter a valid full name.");
      return;
    }

    if(qualification.length < 2){
      alert("Please enter qualification.");
      return;
    }

    if(experience.length < 1){
      alert("Please enter teaching experience.");
      return;
    }

    if(subject.length < 2){
      alert("Please enter subject name.");
      return;
    }

    if(location.length < 2){
      alert("Please enter location.");
      return;
    }

    if(!/^[0-9]{10}$/.test(mobile)){
      alert("Please enter a valid 10 digit mobile number.");
      return;
    }

    const message =
`👨‍🏫 TUTOR REGISTRATION

Name: ${name}
Qualification: ${qualification}
Experience: ${experience}
Subject: ${subject}
Location: ${location}
Mobile: ${mobile}`;

    window.open(
      "https://wa.me/916299397100?text=" +
      encodeURIComponent(message),
      "_blank"
    );

  });

}