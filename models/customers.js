const mongoose = require('./init')

const customerSchema = mongoose.Schema({

  businessName: String,
  pointOfContacts: { //used for multi contact details
    department: String,
    contactType: {
      phoneNumber: [],
      email: String,
      fax: String
      },
    },
  address: String,
  notes: []

})

const customer = mongoose.model('customer', customerSchema)

module.exports = customer
