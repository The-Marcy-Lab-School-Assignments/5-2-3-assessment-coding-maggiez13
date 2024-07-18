class Phone {
  constructor(number) {
    this.phoneNumber = number; 
    this.contacts = [];
  }
  addContact(contact) {
    const { name, phoneNumber } = contact;
    if (!name || !phoneNumber || phoneNumber.length !== 10) {
      return "Invalid";
    }
    this.contacts.push(contact);
    return `${name} added.`; 
  }
  removeContact(name) {
    const idx = this.contacts.findIndex(contact => contact.name === name);
    if (idx === -1) return "Contact not found.";
    this.contacts.splice(idx, 1);
    return `${name} removed.`; 
  }
  makeCall(contactInfo) {
    if (contactInfo.length === 10) {
      const contactSearch = this.contacts.find(contact => contact.phoneNumber === contactInfo);
      if (contactSearch) {
        return `Calling ${contactSearch.name}...`;
      } else {
        return `Calling ${contactInfo}...`; // still valid phone #, just not in contacts
      }
    } else {
      const contactSearch = this.contacts.find(contact => contact.name === contactInfo);
      if (contactSearch) {
        return `Calling ${contactSearch.name}...`;
      } else {
        return "Invalid";
      }
    }
  }
}

class AppleIPhone extends Phone {
  constructor(number, model) {
    super(number);
    this.model = model; 
  }
  sendIMessage(model, message) {
    if (model instanceof AppleIPhone) {
      return `Message: ${message} - sent from ${this.model}`;
    } else {
      return "Message could not be sent."
    }
  }
}

module.exports = {
  Phone,
  AppleIPhone,
};
