// Load Blog post details with
// associated element using local storage

function BlogObject (title, desc, body, link) {

    this.title = title;
    this.desc = desc
    this.body = body;
    this.link = link;

    this.returnInfo = function () {
        return [this.title, this.desc, this.body, this.link ];
    }

};

// Django text res
let article = `The Django object-relational mapper (ORM) is a powerful database abstraction API that lets you
                create, retrieve, update, and delete objects easily. An ORM allows you to generate SQL queries using
                the object-oriented paradigm of Python. You can think of it as a way to interact with your database in
                a Pythonic fashion instead of writing raw SQL queries.
                The ORM maps your models to database tables and provides you with a simple Pythonic interface to
                interact with your database. The ORM generates SQL queries and maps the results to model objects.
                The Django ORM is compatible with MySQL, PostgreSQL, SQLite, Oracle, and MariaDB.
                Remember that you can define the database of your project in the DATABASES setting of your project’s
                settings.py file. Django can work with multiple databases at a time, and you can program database
                routers to create custom data routing schemes.
                Once you have created your data models, Django gives you a free API to interact with them. You can
                find the model API reference of the official documentation at https://docs.djangoproject.com/
                en/5.0/ref/models/.
                The Django ORM is based on QuerySets. A QuerySet is a collection of database queries to retrieve objects
                from your database. You can apply filters to QuerySets to narrow down the query results based
                on given parameters. The QuerySet equates to a SELECT SQL statement and the filters are limiting SQL
                clauses such as WHERE or LIMIT. `;

let blog_desc = "Django Object Relational Mapper";
let djangoorm = new BlogObject("Django ORM", blog_desc, article, "blogger.com");


// Deepface
let article2 = `DeepFace AI is the most lightweight face recognition and facial attribute analysis library for Python. 
                The open-sourced DeepFace library includes all leading-edge AI models for modern face recognition and automatically handles all procedures for facial recognition in the background.
                While you can run DeepFace with just a few lines of code, you don’t need to acquire in-depth knowledge about all the processes behind it. In fact, you simply import the library and pass the exact image path as an input; that’s all!
                If you run face recognition with DeepFace, you get access to a set of features:
                Face Verification: The task of face verification refers to comparing a face with another to verify if it is a match or not. Hence, face verification is commonly used to compare a candidate’s face to another. This can be used to confirm that a physical face matches the one in an ID document.
                Face Recognition: The task refers to finding a face in an image database. Performing face recognition requires running face verification many times.
                Facial Attribute Analysis: The task of facial attribute analysis refers to describing the visual properties of face images. Accordingly, facial attributes analysis is used to extract attributes such as age, gender classification, emotion analysis, or race/ethnicity prediction.
                Real-Time Face Analysis: This feature includes testing face recognition and facial attribute analysis with the real-time video feed of your webcam.`;
let articledesc2 = "Deepface A Lightweight Face Recognition Library";
let articlelink2 = "akintolatech.blogspot.com"
let deepfacepost = new BlogObject("What is Deepface", articledesc2, article2, articlelink2);

// Gooogle Earth Engine

let article3 = "Google Earth Engine is Planetary Scale Analysis platform that utilizes cloud computing";
let articledesc3 = "Google Earth Engine";
let articlelink3 = "akintolatech.github.io";
let articlepost3 = new BlogObject("GEE", articledesc3, article3, articlelink3);

// Blog Dataset
let blog_posts = {
    1 : djangoorm.returnInfo(),
    2 : deepfacepost.returnInfo(),
    3 : articlepost3.returnInfo()
};


// extract id from local storage and use it to access related property
let BlogId = window.sessionStorage.getItem("blog_id");
let BlogObjectItem = blog_posts[BlogId];

console.log(BlogObjectItem);

// selext html element placeholders
let blog_title_element = document.querySelector(".blog_title");
let blog_desc_element = document.querySelector(".blog_desc");
let blog_post_element = document.querySelector(".blog_post");
let blog_link_element = document.querySelector(".blog_link");

// load data
blog_title_element.textContent = BlogObjectItem[0];
blog_desc_element.textContent = BlogObjectItem[1];
blog_post_element.textContent = BlogObjectItem[2];
blog_link_element.href = BlogObjectItem[3];

