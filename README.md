<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <title>Scholarly HTML</title>
    <link rel="stylesheet" href="Schoolary.css">
    <script src="js/scholarly.min.js"></script>
  </head>
  
  <body>
    <header>
      <h1>Scholarly HTML </h1>
    </header>

    <section class="list">
        <ul>
            <li>1. Introduction
                <a href="#I1"><ul>1.1 Purpose</ul></a>
                <a href="#I2"><ul>1.2 Intended Audience and Reading Suggestions</ul></a>
                <a href="#I3"> <ul>1.3 Product Scope</ul></a>
                <a href="#I4">   <ul>1.4 References</ul></a>
            </li>
        </ul>
        <ul>
            <li>2. Overall Description
                <a href="#A1"><ul>2.1 Product Perspective</ul></a>
                <a href="#A2"><ul>2.2 Product Functions</ul></a>
                <a href="#A3"><ul>2.3 Design and Implementation Constraints</ul></a>
                <a href="#A4"><ul>2.4 User Classes and Characteristics</ul></a>
            </li>
        </ul>
        <ul>
            <li>3. Others
                <a href="#O"><ul>3.1 Incoming</ul></a>
                <a href="#O"><ul>3.2 Developing Team</ul></a>
            </li>
        </ul>
    </section>

    <section id= "introduction">
        <h1>1. Introduction</h1>
        <h4 id="I1">1.1 Purpose</h4>
        <p> We provided a web-application which allows the administrators of a company to communicate in real time - 1 to 1 or 1 to N - with the users. 
            On this platform you can ask for help from our support team, you can meet us, read the latest news and see specialized articles, 
            also you can become a member in our platform, enlarging our team. 
              </p>

        <h4 id="I2">1.2 Intended Audience and Reading Suggestions</h4>
        <p> Casa Fermierilor is a platform that unifies people specialized in farming-industry with those who are looking forward in becoming a better farmer everyday.
             Our target audience are people whose passion is agriculture and want to use the best products and services for an optimal solution.
            Whether as regular users or members, people can access our platform to receive different types of information with and about the farming ecosystem.
        </p>
        <h4 id="I3">1.3 Product Scope</h4>
        <p>Our goal is to find as many people as possible about the platform, so everyone who wants to be part of our team to jois us. 
            By doing this, we create a close community, in which everyone has something to gain.</p>
        <h4 id="I4">1.4 References</h4>
        <p>Documents and Web addresses that refers and/or includes user interface style guides, tutorials that might help, useful techniques and styling technologies</p>
    </section>

    <section id= "abstract">
        <h1>2. Overall Description</h1>
        <h4 id="A1">2.1 Product Perspective</h4>
        <p>We created this platform to combine the useful with the pleasant. We have a well-arranged and developed platform to present the beauty of farming in Romania,
             and for those who are really passionate, we also offer the possibility to join us in Casa Fermierilor.
              </p>

        <h4 id="A2">2.2 Product Functions</h4>
        <p> We have the presentation site, which presents several pages with different functionalities for users. There are two types of users in this platform:
            the ordinary users, and the members.
             An ordinary user can read the latest specialized news, can meet our team, and most important, by clicking the chat window will bring up a pop-up with Farmabot,
             our chatbot. Here, regular users can ask questions and have a conversation with member users.
              On the membership side, member users can see and answer the questions asked by the regular users, can decide what messages to reply to. 
              This web-application is full responsive, looking perfectly good on every type of device.
        </p>
        <h4 id="A3">2.3 Design and Implementation Constraints</h4>
        <p>To make this web application, so far I have used HTML5, CSS4 and Javascript.
            With the help of HTML tags, later being stylized with the CSS functions that are used as a value for various CSS properties,
             we managed to bring ReSC project in this form. With the help of Javascript we managed to modify the content of certain elements (containers) 
             so as to obtain the best visual effect (elements displayed or hidden, writting effects, changing images, etc). In order to have the best results, 
            everything is full responsive; that was possible because we used measurement units related to the elements and viewport, and we also used <code>@media</code>
              queries </p>
        <h4 id="A4">2.4 User Classes and Characteristics</h4>
        <p> 
            The content is mostly framed in container type elements, especially <code>div</code>. In order to stylize everything as aesthetically as possible, we used classes and ids to link the
            content in HTML with that in CSS, so that each container in HTML has a class assigned. 
       </p>

       <h1 id="O">Others</h1>
       <h4>Incoming...</h4>
       <p>This web-application has a lot to offer, but only the Frontend is ready so far. But the incoming functionalities which will be implemented
           on this platform are on back-end field. 
       </p>
       <p>This project was made by Ioan Mariciuc, Andrei Panainte and Cristi Cerbu.</p>
    </section>
    
  </body>
</html>
