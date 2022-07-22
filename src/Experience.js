const Experience = (companyName, position) => {
  const experience = {};

  experience.companyName = companyName;
  experience.position = position;
  experience.startDate = new Date();
  experience.endDate = new Date();

  experience.setStartDate = (date) => {
    experience.startDate = date;
  };
  experience.setEndDate = (date) => {
    experience.endDate = date;
  };

  return experience;
};

export default Experience;
