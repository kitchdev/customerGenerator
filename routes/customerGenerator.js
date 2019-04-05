const faker = require('faker')

let realAddresses = require('../realAddress')

faker.locale = "en_CA";

module.exports = async () => {
  let customers = []
  for (let i = 0; i < realAddresses.length; i++) {
    const date = new Date('2019-03-31T22:54:28-04:00')
    // const customer = await faker.fake('{{name.firstName}}')
    const first_name = await faker.fake('{{name.firstName}}')
    const last_name = await faker.fake('{{name.lastName}}')
    const phone = await faker.phone.phoneNumberFormat(3)
    const email = await faker.fake('{{internet.email}}')
    const city = realAddresses[i][0]
    const province = realAddresses[i][1]
    const zip = realAddresses[i][2]

    const customer = {
        count: i,
        first_name,
        last_name,
        email,
        phone,
        date,
        verified_email: true,
        addresses: [
          {
            city,
            province,
            phone,
            zip,
            last_name,
            first_name,
            country: 'CA'
          }
        ]
    }
    customers.push(customer)
  }
  return customers
}

// example of response to create a user object for POST
/*
{ id: 1000603844653,
  email: null,
  accepts_marketing: false,
  created_at: '2019-03-04T15:49:59-05:00',
  updated_at: '2019-03-27T15:36:38-04:00',
  first_name: 'Thomas',
  last_name: 'test',
  orders_count: 0,
  state: 'disabled',
  total_spent: '0.00',
  last_order_id: null,
  note: '',
  verified_email: true,
  multipass_identifier: null,
  tax_exempt: false,
  phone: null,
  tags: '',
  last_order_name: null,
  currency: 'CAD',
  addresses: [ [Object] ],
  accepts_marketing_updated_at: '2019-03-27T15:36:38-04:00',
  marketing_opt_in_level: null,
  admin_graphql_api_id: 'gid://shopify/Customer/1000603844653',
  default_address: 
   { id: 1091529080877,
     customer_id: 1000603844653,
     first_name: 'Mathew',
     last_name: 'Kitching',
     company: '',
     address1: '211 ave fairmount ouest',
     address2: '5',
     city: 'Montreal',
     province: 'Quebec',
     country: 'Canada',
     zip: 'h2t 2m8',
     phone: '',
     name: 'Mathew Kitching',
     province_code: 'QC',
     country_code: 'CA',
     country_name: 'Canada',
     default: true } }
     */