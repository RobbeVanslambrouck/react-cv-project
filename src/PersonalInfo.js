const PersonalInfo = (firstName, lastName) => {
  const personalInfo = {};

  personalInfo.firstName = firstName;
  personalInfo.lastName = lastName;
  personalInfo.email = "";
  personalInfo.phoneNumber = NaN;

  personalInfo.setEmail = (email) => {
    personalInfo.email = email;
  };
  personalInfo.setPhoneNumber = (phoneNumber) => {
    personalInfo.phoneNumber = phoneNumber;
  };

  return personalInfo;
};

export default PersonalInfo;
