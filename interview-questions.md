# ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.   

1. Rails follows an MVC pattern. What does that mean?

  Your answer: Model View Controller

  Researched answer:

Model
The central component of the pattern. It is the application's dynamic data structure, independent of the user interface. It directly manages the data, logic and rules of the application.
View
Any representation of information such as a chart, diagram or table. Multiple views of the same information are possible.
Controller
Accepts input and converts it to commands for the model or view.


2. What is a gem?

  Your answer: A gem is a special package of code that will assist your current code to do what it is assigned to do most efficiently. 

  Researched answer:

In Ruby, a gem is a library that contains a specific piece of functionality as well as any files or assets related to that functionality. Gems can be found for all sorts of common functionality in an application -- things like handling money and currency, integrating with credit card processing, tools to make ruby coding even easier, and more. You could write these things yourself but one big benefit to using a gem instead is that it saves time.


3. Why is it important to have validations in your application?

  Your answer:to make sure the information your are inputting into your database can be properly acted upon with full information and no missing elements. 

  Researched answer:

Validations are used to ensure that only valid data is saved into your database. For example, it may be important to your application to ensure that every user provides a valid email address and mailing address. Model-level validations are the best way to ensure that only valid data is saved into your database. They are database agnostic, cannot be bypassed by end users, and are convenient to test and maintain. Rails makes them easy to use, provides built-in helpers for common needs, and allows you to create your own validation methods as well.


4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer: A person CAN HAVE MANY Computers // A Computer BELONGS TO a Person - The foreign key would belong to the Computer

  Researched answer:
  The foreign key always goes on the belongs_to side. By convention the foreign key should always be the modelname_id and the data type should be integer. The has_many model is singular, the belongs_to model is plural. A Person (singular) has_many Computers (plural).



5. What is object-relational mapping?

  Your answer: I believe it relates to the belongs_to/has_many model.

  Researched answer:
  
  SELECT * FROM users WHERE email = 'test@test.com';
Object-relational-mapping is the idea of being able to write queries like the one above, as well as much more complicated ones, using the object-oriented paradigm of your preferred programming language.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes : REST (i.e. Representation State Transfer) is an architectural style for defining our routes. It is a way of mapping HTTP routes and the CRUD functionalities. Routes are the code that are responsible for listening and receiving requests and then deciding what to send back.When building APIs, we want to provide the four basic types of functionality. There must be a way to Create, Read, Update, and Delete resources. In a REST environment, CRUD often corresponds to the HTTP methods POST, GET, PUT, and DELETE, respectively.
7 RESTful routes: Index, New, Create, Show, Edit, Update, Destroy

- json : JSON stands for JavaScript Object Notation

JSON is a lightweight format for storing and transporting data

JSON is often used when data is sent from a server to a web page

JSON is "self-describing" and easy to understand

- API: a set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service.

- Endpoints : Simply put, an endpoint is one end of a communication channel. When an API interacts with another system, the touchpoints of this communication are considered endpoints. For APIs, an endpoint can include a URL of a server or service. Each endpoint is the location from which APIs can access the resources they need to carry out their function.

APIs work using ‘requests’ and ‘responses.’ When an API requests information from a web application or web server, it will receive a response. The place that APIs send requests and where the resource lives, is called an endpoint.

All over the world, companies leverage APIs to transfer vital information, processes, transactions, and more. API usage will only increase as time goes on, and making sure that each touchpoint in API communication is intact is vital to the success of each API. Endpoints specify where resources can be accessed by APIs and play a key role in guaranteeing the correct functioning of the software that interacts with it.  In short, API performance relies on its ability to communicate effectively with API Endpoints.

- Strong params :
- Strong Parameters is a feature of Rails that prevents assigning request parameters to objects unless they have been explicitly permitted. It has its own DSL (Domain Specific Language, or in other words, a predefined syntax it understands), that allows you to indicate what parameters should be allowed. It also lets you indicate if each parameter should be a hash, array or scalar (i.e. integer, string, etc.), as well as some other functionality.
