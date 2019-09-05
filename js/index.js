const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo

// =========== HEADER ===========
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let navItems = document.querySelectorAll("header nav a");
navItems[0].innerText = siteContent.nav["nav-item-1"];
navItems[1].innerText = siteContent.nav["nav-item-2"];
navItems[2].innerText = siteContent.nav["nav-item-3"];
navItems[3].innerText = siteContent.nav["nav-item-4"];
navItems[4].innerText = siteContent.nav["nav-item-5"];
navItems[5].innerText = siteContent.nav["nav-item-6"];

// =========== CTA ===========
let ctaText = document.querySelector(".cta .cta-text h1");
ctaText.innerText = siteContent.cta["h1"];

let ctaButton = document.querySelector("button");
ctaButton.innerText = siteContent.cta.button;

let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.cta["img-src"];

// =========== MAIN CONTENT ===========
// ===== TOP =====
let topH4 = document.querySelectorAll(
  ".main-content .top-content .text-content h4"
);
topH4[0].innerText = siteContent["main-content"]["features-h4"];
topH4[1].innerText = siteContent["main-content"]["about-h4"];

let topP = document.querySelectorAll(
  ".main-content .top-content .text-content p"
);
topP[0].innerText = siteContent["main-content"]["features-content"];
topP[1].innerText = siteContent["main-content"]["about-content"];

let mainImg = document.querySelector(".main-content #middle-img");
mainImg.src = siteContent["main-content"]["middle-img-src"];

// ===== BOTTOM =====
let bottomH4 = document.querySelectorAll(
  ".main-content .bottom-content .text-content h4"
);
bottomH4[0].innerText = siteContent["main-content"]["services-h4"];
bottomH4[1].innerText = siteContent["main-content"]["product-h4"];
bottomH4[2].innerText = siteContent["main-content"]["vision-h4"];

let bottomP = document.querySelectorAll(
  ".main-content .bottom-content .text-content p"
);
bottomP[0].innerText = siteContent["main-content"]["services-content"];
bottomP[1].innerText = siteContent["main-content"]["product-content"];
bottomP[2].innerText = siteContent["main-content"]["vision-content"];

// =========== CONTACT ===========
let contactH4 = document.querySelector(".contact h4");
contactH4.innerText = siteContent.contact["contact-h4"];

let contactP = document.querySelectorAll(".contact p");
contactP[0].innerText = siteContent.contact.address;
contactP[1].innerText = siteContent.contact.phone;
contactP[2].innerText = siteContent.contact.email;
