$(function () {
    // Function
    var getHeader = function () {
        // fetch("../views/common/header.html")
        // .then(response => {
        //     return response.text();
        // })
        // .then(data => {
        //     document.querySelector("header").innerHTML = data;
        // });
        
        $('header').load("../views/common/header.html");
    };

    var getNav = function () {
        $('nav').load("../views/common/nav.html", function () {
            $('.menu__item').eq(0).addClass('menu__item--active');
        });
    };

    var getSection = function () {
        $('section').load("../views/pages/menuManagement.html");
    };

    var getFooter = function () {
        $('footer').load("../views/common/footer.html");
    };

    var getModal = function () {
        $('.modal').load("../views/common/modal.html");
    };

    var openModal = function () {
        $('.modal').addClass('modal--active');
    };

    var closeModal = function () {
        $('.modal').removeClass('modal--active');
    };
    
    
    // Event Listeners
    $(document).on('click', '.menu__item span', function (e) {
        $('.menu__item').removeClass('menu__item--active');
        $(e.target).parent().addClass('menu__item--active');
    });
    
    $(document).on('click', '.profile__logout', function () {
        openModal();
    });

    $(document).on('click', '.modal__close, .modal__submit, .modal__cancel', function () {
        closeModal();
    });


    // Initialize
    getHeader();
    getNav();
    getSection();
    getFooter();
    getModal();
});