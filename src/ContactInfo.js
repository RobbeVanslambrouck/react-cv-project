const ContactInfo = () => {
  const contactInfo = {};

  contactInfo.email = "";
  contactInfo.location = "";
  contactInfo.phoneNumber = NaN;
  contactInfo.websiteLink = "";
  contactInfo.linkedinLink = "";

  contactInfo.setEmail = (email) => {
    contactInfo.email = email;
  };
  contactInfo.setLocation = (location) => {
    contactInfo.location = location;
  };
  contactInfo.setPhoneNumber = (phoneNumber) => {
    contactInfo.phoneNumber = phoneNumber;
  };
  contactInfo.setWebsiteLink = (websiteLink) => {
    contactInfo.websiteLink = websiteLink;
  };
  contactInfo.setLinkedinLink = (linkedinLink) => {
    contactInfo.linkedinLink = linkedinLink;
  };

  return contactInfo;
};

export default ContactInfo;
