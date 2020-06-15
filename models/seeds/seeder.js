const mongoose = require('mongoose')
const restList = require('../../rest.json')
const Todo = require('../todo')


mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection


db.on('error', () => {
  console.log('mongodb error!')
})


db.once('open', () => {
  console.log('mongodb connected!')
  for (let i = 0; i < restList.results.length; i++) {
    Todo.create({
      name: restList.results[i].name,
      image: restList.results[i].image,
      category: restList.results[i].category,
      phone: restList.results[i].phone,
      location: restList.results[i].location,
      description: restList.results[i].description
    })

  }


  console.log('done')
})




