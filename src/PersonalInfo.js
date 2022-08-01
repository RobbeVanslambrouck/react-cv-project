const PersonalInfo = (firstName, lastName) => {
  const personalInfo = {};

  personalInfo.firstName = firstName;
  personalInfo.lastName = lastName;
  personalInfo.title = "";
  personalInfo.email = "";
  personalInfo.summary = "";
  personalInfo.phoneNumber = NaN;
  personalInfo.profileImgUrl = "";

  personalInfo.setTitle = (title) => {
    personalInfo.title = title;
  };
  personalInfo.setEmail = (email) => {
    personalInfo.email = email;
  };
  personalInfo.setPhoneNumber = (phoneNumber) => {
    personalInfo.phoneNumber = phoneNumber;
  };
  personalInfo.setSummary = (summary) => {
    personalInfo.summary = summary;
  };

  personalInfo.setProfileImgUrl = (profileImgUrl) => {
    personalInfo.profileImgUrl = profileImgUrl;
  };

  return personalInfo;
};

export default PersonalInfo;
