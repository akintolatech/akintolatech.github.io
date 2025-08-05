// Load project post details with
// associated element using local storage

function projectObject (img, title, desc, body, link) {

    this.img = img;
    this.title = title;
    this.desc = desc
    this.body = body;
    this.link = link;

    this.returnInfo = function () {
        return [this.img, this.title, this.desc, this.body, this.link ];
    }

};



let projectImgLink = "../../img/proj/test_engine_c.jpg";
let project_article2 = 'Test Engine is a sleek and modern Computer Based Testing (CBT) Web application';
let project_desc2 = "Test Engine a Modern CBT software"
let projectObj2 = new projectObject(projectImgLink,"Test Engine", project_desc2, project_article2, "bit.ly/testengine")


// project Dataset
let project_posts = {
    1 : projectObj2.returnInfo(),
};


// extract id from local storage and use it to access related property
let projectId = window.sessionStorage.getItem("project_id");
console.log(projectId);
let projectObjectItem = project_posts[projectId];

console.log(projectObjectItem);

// selext html element placeholders
let project_img_element = document.querySelector(".project-img");
let project_title_element = document.querySelector(".project_title");
let project_desc_element = document.querySelector(".project_desc");
let project_post_element = document.querySelector(".project_post");
let project_link_element = document.querySelector(".project_link");

// load data
project_img_element.src = projectObjectItem[0]
project_title_element.textContent = projectObjectItem[1];
project_desc_element.textContent = projectObjectItem[2];
project_post_element.textContent = projectObjectItem[3];
project_link_element.href = projectObjectItem[4];

