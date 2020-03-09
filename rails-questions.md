# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

$ rails new app_name -d postgresql -T


2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - this is asking to retrieve information it is an http verb
library - this is part of the url where this item is shown
:id - this is the primary id that is given to the database item upon creation of the entry
book - is the name of the controller
show - is the name of the method found in the controller

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

1. generate migration $ rails generate migration add_foreignkey_to_model
2. go to db/migrate and update the migration directory to add a column
3. type in rails db:migrate to update the database
4. update the model so it corresponds with the belongs_to / has_many relatonship
5. 



4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

$ rails generate model Person shirt:string pants:string shoes:string




5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

class Person < XXXXX
  validates :shirt, :pants, :shoes, presence: true
end