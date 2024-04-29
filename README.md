## Introduction of our Project

### Main Idea

We all share a common issue in San Diego, and that is trying to find authentic Chinese food. Other websites such as yelp or google do not always help, as some of the reviews are innacurate. That is why in our website, we will have a chinese food informational website based in San Diego and nearby. When you open up our website you will see three main sections:

### Section 0: Main Page

In our Main page, we have a signup button for users that first time visiting our website or users who want to make another account, the button will link to our sign up page. We also have a login button for users that already have a account to our website.

### Section 1: Users

Simple user login that will have a login and a signup page. We will complete this by using POST requests specifically for user login, signup, and submitting reviews. The POST request will send form data to our server, effectively allowing user side actions to be saved on the website.

- Signup
  Users will need to enter the Name, User ID, and password and cclick the signup button and send a request. Our backend system will store the data from the user. If users didn't enter one of the 3 requirement, then they will fail to signup.

- Login
  Users will need to first signup an account, otherwise the login system will not work. After signup an accout, users will need to enter correct Name, User ID, and password to get into our webpage. If enter incorrect Name, User ID, or password, then the website will pop up a message saying that login fail and users will need to enter the login again.

### Section 2: Table of content

The is a simple useful tool that after users login success, the webpage will change to this page and users can choose which page they want to go to, either the Food Chart or the comments page.

### Section 3: Food Chart

Most people do not know that "Chinese" cuisine is split into 8 cuisines: Anhui, Guangdong, Fujian, Hunan, Jiangsu, Shandong, Sichuan, Zhejiang. After getting to the food chart, users will first see a + button in the middle of the page, after clicking the + button, eight button will show up, each button represent one cuisine. 

In the eight cuisines, we describe the unique of eight different cuisines. In the slide, we talk about the features, the representative dishes, and the restaurant of these cuisines.

### Section 4: User Reviewing and Comments

In this section, users will be able to leave reviews under restaurants they’ve been to. This will be helpful, as it will help others discover good Chinese food and they will know what to order when they go there. POST requests will be used to allow users to submit reviews, and GET requests will be used to fetch the list of reviews.