const Experience = (id) => {
  const experience = {};

  experience.id = id;
  experience.company = "";
  experience.position = "";
  experience.location = "";
  experience.startDate = new Date();
  experience.endDate = new Date();

  experience.setCompany = (company) => {
    experience.company = company;
  };

  experience.setPosition = (position) => {
    experience.position = position;
  };

  experience.setLocation = (location) => {
    experience.location = location;
  };

  experience.setStartDate = (date) => {
    experience.startDate = date;
  };

  experience.setEndDate = (date) => {
    experience.endDate = date;
  };

  return experience;
};

export default Experience;
