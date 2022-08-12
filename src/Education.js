const Education = (id) => {
  const education = {};

  education.id = id;
  education.school = "";
  education.location = "";
  education.degree = "";
  education.startDate = new Date();
  education.endDate = new Date();

  education.setSchool = (school) => {
    education.school = school;
  };

  education.setLocation = (location) => {
    education.location = location;
  };

  education.setDegree = (degree) => {
    education.degree = degree;
  };

  education.setStartDate = (date) => {
    education.startDate = date;
  };

  education.setEndDate = (date) => {
    education.endDate = date;
  };

  return education;
};

export default Education;
