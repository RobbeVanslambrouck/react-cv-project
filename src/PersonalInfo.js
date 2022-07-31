const PersonalInfo = (firstName, lastName) => {
  const personalInfo = {};

  personalInfo.firstName = firstName;
  personalInfo.lastName = lastName;
  personalInfo.title = "";
  personalInfo.email = "";
  personalInfo.phoneNumber = NaN;

  personalInfo.setTitle = (title) => {
    personalInfo.title = title;
  };
  personalInfo.setEmail = (email) => {
    personalInfo.email = email;
  };
  personalInfo.setPhoneNumber = (phoneNumber) => {
    personalInfo.phoneNumber = phoneNumber;
  };

  return personalInfo;
};

export default PersonalInfo;
