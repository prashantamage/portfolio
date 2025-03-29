require.config({
    baseUrl: "js",
    paths: {
        jquery: "jquery.min",
        bootstrap: "bootstrap.bundle.min",
        aos: "aos",
        gsap: "gsap.min",
        fontawesome: "font-awesome-all.min"
    },
    shim: {
        bootstrap: {
            deps: ["jquery"]
        },
        aos: {
            exports: "AOS"
        },
        gsap: {
            exports: "gsap"
        }
    }
});

require(["jquery", "bootstrap", "aos", "gsap", "fontawesome"], function ($, bootstrap, AOS, gsapModule) {
    console.log("All dependencies loaded");

    var gsap = gsapModule.gsap || gsapModule;

    AOS.init({
        duration: 1000,
        once: true
    });

    gsap.from("#home h1", {
        opacity: 0,
        y: -50,
        duration: 1,
        delay: 0.5
    });

    gsap.from("#home p", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.8
    });

    gsap.from("social-icons", {
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2
    });

    console.log("Animations initialized");
});
