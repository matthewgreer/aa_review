# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



kittehs = Cat.create([
  {
    name: 'Satan',
    sex: 'M',
    color: 'black',
    birth_date: '6/6/2006',
    description: 'Prince of Darkness'
  },
  {
    name: 'Beelzebub',
    sex: 'M',
    color: 'gray/blue',
    birth_date: '31/10/2016',
    description: 'Lord of the Flies'
  },
  {
    name: 'Bathory',
    sex: 'F',
    color: 'white',
    birth_date: '31/3/2019',
    description: 'Queen of Blood'
  },
  {
    name: 'Bob',
    sex: 'F',
    color: 'tabby',
    birth_date: '1/1/2021',
    description: 'Hi. I am Bob.'
  },
])