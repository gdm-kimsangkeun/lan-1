$(function () {
    Splitting();
  
    // ---------------------------- main page --------------------------------
    if (document.querySelector('.main-page')) {
      mainBusiness();
      mainNewsSlide();
      mainInvestorSlide();
      sec06HideBg();
    }
    // ---------------------------- sub page --------------------------------
    if (document.querySelector('.sub-page')) {
      document.querySelector('.nav-bar') && navBarMob();
      document.querySelector('.dividend') && dividendSlide();
      document.querySelector('.ideal-slide') && careerSlide();
      if (document.querySelector('.market')) {
        marketAnim();
        marketBanner();
      }
      document.querySelector('.grecipe-slide')&& grecipeSlide();
      document.querySelector('.career-typo') && careerTypo();
      document.querySelector('.solution-visual') && solutionAnim();
      document.querySelector('.model') && modelAnim();
      document.querySelector('.personnel') && personnelImg();
      document.querySelector('.benefits') && benefitTypo();
      document.querySelector('.recruit01') && recruitStep();
      document.querySelector('.news') && newsSlide();
      document.querySelector('.split-style') && subTopAnim();
      document.querySelector('.leadership') && leadershipSlide();
      document.querySelector('.sub-nav') && subNav();
      document.querySelector('.engineering-img') && engineeringScreen();
      document.querySelector('.manufacturing-list') && manufacturingArcc();
      document.querySelector('.company-img') && companyScreen();
      document.querySelector('.box-carousel') && infiniteCarousel({
          trigger: '.box-carousel',
          duration: 7, 
          reverse: true, 
          pauseOnHover: false,
        });
      document.querySelector('.sus-slide') && susSlide();
      document.querySelector('.compliance-system') && complianceArrow();
      document.querySelector('.sub-form__file') && inputFileTxt();
      document.querySelector('.global-map') && globalClick();
      if(document.querySelector('.history') && $(window).innerWidth() < 1025) {
        historyNav();
        historyNavTab();
    }
      document.querySelector('.sub-tab') && subTab();
      document.querySelector('.tech-table') && senseTable();
    }
    // --------------------- header -------------------------
    const header = document.querySelector('.header');
    let headerHeight = parseFloat(getComputedStyle(header)['height']);
    document.documentElement.style.setProperty('--headerHeight', `${headerHeight}px`);
    window.addEventListener('resize', function () {
      let headerHeight = parseFloat(getComputedStyle(header)['height']);
      document.documentElement.style.setProperty('--headerHeight', `${headerHeight}px`);
    });
    gnbHover();
    sideMenu();
    scrollHeader();
    // ------------------------- footer ------------------------
    topBtn();
    footerFamily();
  
    // ------------------------- common ------------------------
    document.querySelector('.fade-anim') && fadeAnims();
    document.querySelector('.fade-in') && fadeItems();
    viewMore();
    // 새로고침시 페이지 상단으로 이동
    window.onload = function () {
      setTimeout(function () {
        scrollTo(0, 0);
      }, 100);
    };
    //  ----------------------- functions ----------------------------
    function fadeItems() {
      gsap.utils.toArray('.fade-in').forEach((ele) => {
        var y;
        var start;
        var delay;
        $(ele).hasClass('deeper') ? (y = 150) : (y = 60);
        $(ele).hasClass('slow') ? (start = '0%, 40%') : (start = '0%, 70%');
        $(ele).hasClass('delay') ? (delay = 0.5) : (delay = 0);
    
        if (ele.querySelector('.fade-in__ele')) {
          gsap.fromTo(
            ele.querySelectorAll('.fade-in__ele'),
            {
              y: y,
              autoAlpha: 0,
            },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.7,
              delay: delay,
              scrollTrigger: {
                trigger: ele,
                markers: false,
                start: start,
                // toggleActions: 'play play play reverse',
              },
            }
          );
        }
        if (ele.querySelector('.fade-in__right')) {
          gsap.fromTo(
            ele.querySelectorAll('.fade-in__right'),
            {
              x: -30,
              autoAlpha: 0,
            },
            {
              x: 0,
              autoAlpha: 1,
              duration: 0.5,
              scrollTrigger: {
                trigger: ele,
                markers: false,
                start: start,
                // toggleActions: 'play play play reverse',
              },
            }
          );
        }
      });
    }
    function fadeAnims() {
      gsap.utils.toArray('.fade-anim').forEach((ele) => {
        gsap.fromTo(
          ele,
          {
            y: 60,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            stagger: 0.15,
            duration: 0.7,
            scrollTrigger: {
              trigger: ele,
              markers: false,
              start: '0%, 80%',
              // toggleActions: 'play play play reverse',
            },
          }
        );
        if (ele.querySelector('.line')) {
          gsap.to(
            ele.querySelector('.line'),
          {
            width: '100%',
            duration: 0.7,
            scrollTrigger: {
              trigger: ele,
              markers: false,
              start: '0%, 70%',
            },
          }
          )
        }
      });
    }
    function scrollHeader() {
      if (document.querySelector('.market')) {
        $('.nav-bar').addClass('is-market');
      }
      let prevY = 0;
      addEventListener('scroll', (e) => {
        let headerHeight = parseFloat(getComputedStyle(header)['height']);
        document.documentElement.style.setProperty('--headerHeight', `${headerHeight}px`);
        window.addEventListener('resize', function () {
          let headerHeight = parseFloat(getComputedStyle(header)['height']);
          document.documentElement.style.setProperty('--headerHeight', `${headerHeight}px`);
        });
        let historyNav = document.querySelector('.company .sub-nav__area')
        if (!$('.header').hasClass('side-on')) {
          const currentY = scrollY;
          currentY > 160 ? header.classList.remove('top') : header.classList.add('top');
          currentY > prevY && currentY > 20 ? header.classList.add('hide') : header.classList.remove('hide');
          if(document.querySelector('.history') && $(window).innerWidth() < 1025){
            currentY > prevY && currentY > 20 ? historyNav.classList.add('hide') : historyNav.classList.remove('hide');
          }
          prevY = scrollY;
        }
        if ($('.header').hasClass('top')) {
          $('.top-btn').addClass('hide');
          if (document.querySelector('.market')) {
            $('.nav-bar').addClass('is-market');
          }
        } else {
          $('.top-btn').removeClass('hide');
          if (document.querySelector('.market')) {
            $('.nav-bar').removeClass('is-market');
          }
        }
      });
    }
    function viewMore() {
      if (document.querySelector('.view-more')) {
        $('.view-more')
          .on('mouseenter', function (e) {
            let parentOffset = $(this).offset(),
              relX = e.pageX - parentOffset.left,
              relY = e.pageY - parentOffset.top;
            $(this).find('span').css({ top: relY, left: relX });
          })
          .on('mouseout', function (e) {
            let parentOffset = $(this).offset(),
              relX = e.pageX - parentOffset.left,
              relY = e.pageY - parentOffset.top;
            $(this).find('span').css({ top: relY, left: relX });
          });
      }
    }
    function sideMenu() {
      const hbg = $('.hamburger-btn');
      let headerSideAnim;
      hbg.on('click', () => {
        if (hbg.hasClass('active')) {
          hbg.removeClass('active').addClass('not-active');
          scrollAble();
          $('.header').removeClass('side-on');
          $('.header-side')
            .stop()
            .animate({ opacity: 0 }, function () {
              $(this).hide();
            });
          if ($(window).innerWidth() > 1650) {
            $('.header-gnb').show().stop().animate({ opacity: 1 });
          }
          headerSideAnim.kill();
          if ($(window).innerWidth() < 1201) {
            $('.side-slide__wrap').stop().slideUp(10)
          }
          scrollY > 160 ? header.classList.remove('top') : header.classList.add('top');
        } else {
          hbg.addClass('active').removeClass('not-active');
          scrollDisable();
          $('.header').addClass('side-on');
          $('.header-side').show().stop().animate({ opacity: 1 });
          $('.header-gnb')
            .stop()
            .animate({ opacity: 0 }, function () {
              $(this).hide();
            });
          gsap.utils.toArray('.header-side .inner').forEach((ele) => {
            function responsiveCheck(pc, mo) {
              return innerWidth > 1200 ? pc : mo;
            }
            headerSideAnim = gsap.fromTo(
              ele.querySelectorAll('div'),
              {
                y: -20,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
                duration: () => {
                  return responsiveCheck(1, 0.8)
                },
                stagger: 0.1,
                delay: 0.3,
              }
            );
          });
        }
      });
      if ($(window).innerWidth() < 1201) {
        $('.header-side__dep01').on('click', function() {
          $(this).toggleClass('active').siblings('.side-slide__wrap').stop().slideToggle(200);
          $(this).parents('div').siblings().find('.header-side__dep01').removeClass('active').siblings('.side-slide__wrap').stop().slideUp(200);
        })
      }
    }
    function gnbHover() {
      $('.header-gnb > div').on('mouseover', function () {
        $(this).find('.header-gnb__dep02').show().stop().animate({ opacity: 1 }, 300);
        $(this)
          .siblings()
          .find('.header-gnb__dep02')
          .stop()
          .animate({ opacity: 0 }, 100, function () {
            $(this).hide();
          });
      });
      $('.header-gnb').on('mouseleave', function () {
        $('.header-gnb__dep02')
          .stop()
          .animate({ opactiy: 0 }, 100, function () {
            $(this).hide();
          });
        $('.dep02-bg').removeClass('active');
      });
      $('.header-gnb > div')
        .not('.news')
        .on('mouseover', function () {
          $('.dep02-bg').addClass('active');
        });
      $('.header-gnb .news').on('mouseover', function () {
        $('.dep02-bg').removeClass('active');
      });
    }
    function topBtn() {
      const footer = document.querySelector('.footer');
      let footerHeight = parseFloat(getComputedStyle(footer)['height']);
      document.documentElement.style.setProperty('--footerHeight', `${footerHeight}px`);
      window.addEventListener('resize', function () {
        let footerHeight = parseFloat(getComputedStyle(footer)['height']);
        document.documentElement.style.setProperty('--footerHeight', `${footerHeight}px`);
      });
      let topBtn = $('.top-btn');
      topBtn.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000, 'easeOutQuart');
      });
      gsap.timeline({
        scrollTrigger: {
          trigger: '.footer',
          markers: false,
          start: '-30px, 100%',
          onEnter: (e) => {
            topBtn.addClass('bottom');
          },
          onLeaveBack: (e) => {
            topBtn.removeClass('bottom');
          },
        },
      });
    }
    function dividendSlide() {
      $('.dividend-arccordion li:first-child .desc').stop().slideDown(100);
      $('.dividend-arccordion li').on('click', function (e) {
        if (e.target.classList.contains('year') || e.target.classList.contains('year-arrow')) {
          if ($(this).hasClass('active')) {
            $(this).removeClass('active').find('.desc').stop().slideUp();
          } else if (!$(this).hasClass('active')) {
            $(this).addClass('active').find('.desc').stop().slideDown();
            $(this).siblings().removeClass('active').find('.desc').stop().slideUp();
          }
        }
      });
    }
    function mainBusiness() {
      var mainMvSwiper = new Swiper('.main-business .swiper-container', {
        parallax: true,
        loop: true,
        speed: 1000,
        observer: true,
        loopedSlides: 1,
        observeParents: true,
        navigation: {
          nextEl: $('.main-business').find('.swiper-button-next'),
          prevEl: $('.main-business').find('.swiper-button-prev'),
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
    function subTopAnim() {
      function responsiveCheck(pc, mo) {
        return innerWidth > 720 ? pc : mo;
      }
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.sub-top',
            markers: false,
            start: '50%, 100%',
            onEnter: (e) => {
              $('.split-style').addClass('on');
            },
          },
        })
        .fromTo(
          '.sub-top__frame',
          {
            y: '50px',
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
          },
          '<'
        )
        .to('.sub-top__frame', {
          clipPath: 'circle(100vw at 50vw 50%)',
          duration: 1,
        })
        .to(
          '.sub-top__img',
          {
            backgroundSize: () => {
              return responsiveCheck('100vmax', '100%');
            },
            delay: 0.1,
            duration: 0.6,
          },
          '<'
        );
    }
  
    function marketAnim() {
      gsap.to('.market-screen', {
        top: '-250%',
        delay: 0.5,
        scrollTrigger: {
          trigger: '.market-visual',
          markers: false,
          start: '50%, 100%',
        },
      });
  
      // our market 페이지 스크롤 1초간 막기
      function removeDefaultEvent(e) {
        e.preventDefault();
        e.stopPropagation();
      }
      window.addEventListener('wheel', removeDefaultEvent, { passive: false });
  
      setTimeout(function () {
        window.removeEventListener('wheel', removeDefaultEvent);
      }, 1000);
  
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.market-visual',
            markers: false,
            start: '0, 0',
            end: '+=200%',
            pin: true,
            scrub: 0.6,
          },
        })
        .to('.market01', {
          y: -30,
          autoAlpha: 0,
          duration: 0.3,
        })
        .fromTo(
          '.market02',
          {
            y: 30,
            autoAlpha: 0,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.3,
          }
        )
        .to('.market02 p', {
          backgroundPosition: '-190% 0',
          duration: 0.3,
        })
        .to('.market-visual__bg', {
          top: 0,
          duration: 0.5,
        })
        .to(
          '.market02 p',
          {
            color: '#201f1e',
            duration: 0.3,
          },
          '>-0.3'
        );
    }
    function marketBanner() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.market-banner',
            markers: false,
            start: '0, 70%',
            toggleActions: 'play play play reverse',
          },
        })
        .to('.market-banner__screen', {
          width: 0,
          duration: 0.5,
        })
        .to('.market-banner p', {
          opacity: 0.4,
          y: 0,
          duration: 0.3,
        });
    }
    function careerTypo() {
      gsap.to('.career-typo__anim p', {
        backgroundPosition: '-200% 0',
        duration: 1,
        scrollTrigger: {
          trigger: '.career-typo',
          markers: false,
          start: '0, 70%',
          end: '+=50%',
          scrub: 1,
        },
      });
    }
    function careerSlide() {
      $('.ideal-slide__area').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.ideal-slide__nav',
        autoplay: true,
        autoplaySpeed: 3500,
      });
      $('.ideal-slide__nav').slick({
        slidesToShow: 4,
        asNavFor: '.ideal-slide__area',
        dots: false,
        focusOnSelect: true,
      });
    }
    function solutionAnim() {
  
      gsap
        .timeline({
          scrollTrigger: {
            trigger: '.solution-visual',
            markers: false,
            start: '0, 0',
            end: '+=250%',
            pin: true,
            scrub: 3,
          },
        })
        .to('.solution-logo', {
          opacity: 1,
          duration: 0.2,
        })
        .to('.solution-screen', {
          width: 0,
          duration: 0.7,
          delay: 0.3,
          ease: 'none',
        })
        .to('.solution-bg', {
          top: 0,
          duration: 0.5,
        })
        .to(
          '.solution-logo',
          {
            y: 0,
            duration: 0.5,
            filter: 'brightness(0) invert(1)',
          },
          '>-0.5'
        )
        .to(
          '.solution-desc',
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          '<'
        )
        .to('.solution-visual', {
          delay: 1,
        });
    }
    function mainNewsSlide() {
      $('.main-news_slide').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 250,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        slide: '.item',
        pauseOnHover: false,
        pauseOnFocus: false,
        variableWidth: true,
        responsive: [ 
                      {  
                          breakpoint: 1200,
                          settings: {
                              slidesToShow:3 
                          } 
                      },
                      { 
                          breakpoint: 720,
                          settings: {	
                              slidesToShow:1 
                          } 
                      }
                  ]
      });
    }
    function modelAnim() {
      gsap.fromTo(
        '.model-growing .item',
        {
          autoAlpha: 0,
          y: 20,
        },
        {
          autoAlpha: 1,
          y: 0,
          stagger: {
            amount: 1,
          },
          scrollTrigger: {
            trigger: '.model-growing',
            markers: false,
            start: '50%, 100%',
          },
        }
      );
    }
    function personnelImg() {
      gsap.utils.toArray('.personnel ul li').forEach((ele) => {
        let delay = '';
        ele.classList.contains('delay') ? (delay = 0.3) : (delay = 0);
        gsap.to($(ele).find('.personnel-img span'), {
          scrollTrigger: {
            trigger: ele,
            markers: false,
            start: '0%, 50%',
            end: '80%, 50%',
          },
          width: 0,
          delay: delay,
          duration: 0.5,
        });
      });
    }
    function benefitTypo() {
      gsap.fromTo(
        '.benefits-typo',
        {
          autoAlpha: 0,
          x: 300,
        },
        {
          autoAlpha: 1,
          x: 0,
          delay: 0.5,
          scrollTrigger: {
            trigger: '.benefits-typo',
            markers: false,
            start: '50%, 100%',
          },
        }
      );
    }
    function recruitStep() {
      gsap.fromTo(
        '.recruit01-step li',
        {
          autoAlpha: 0,
          x: 20,
        },
        {
          autoAlpha: 1,
          x: 0,
          delay: 0.5,
          stagger: {
            amount: 0.7,
          },
          scrollTrigger: {
            trigger: '.recruit01-step',
            markers: false,
            start: '50%, 100%',
          },
        }
      );
    }
    function newsSlide() {
      $('.board-news__slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.board-news__nav',
        autoplay: true,
        autoplaySpeed: 3500,
      });
      $('.board-news__nav').slick({
        arrows: false,
        slidesToShow: 1,
        asNavFor: '.board-news__slide',
        fade: true,
        dots: false,
        focusOnSelect: true,
      });
      $('.board-news__nav').slickNav('.item', {
        controls: true,
        progress: true,
      });
  
      $('.board-news__nav').on('beforeChange', function (e, s, c, n) {
        gsap.fromTo(
          s.$slides.eq(n),
          {
            opacity: 0,
            x: 100,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
          }
        );
      });
    }
    function footerFamily() {
      $('.footer-family button').on('click', function () {
        $('.footer-family ul').stop().slideToggle();
      });
    }
    function leadershipSlide() {
      $('.leadership-messages__right').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
      });
      $('.leadership-messages__right').on('beforeChange', function (e, s, c, n) {
        $('.leadership-messages__left nav button').eq(n).addClass('active').siblings().removeClass('active');
      });
      $('.leadership-messages__left nav button').on('click', function () {
        var slideIndex = $(this).index();
        $('.leadership-messages__right').slick('slickGoTo', slideIndex);
      });
    }
    const $body = document.querySelector('body');
    function preventScroll(e) {
      e.preventDefault();
    }
    function scrollDisable() {
      $body.classList.add('no-scroll');
      $body.addEventListener('wheel', preventScroll, { passive: false });    
      // $body.addEventListener('touchmove', preventScroll, { passive: false });    
    }
    function scrollAble() {
      $body.classList.remove('no-scroll');
      $body.removeEventListener('wheel', preventScroll, { passive: false });    
      // $body.removeEventListener('touchmove', preventScroll, { passive: false });    
    }
    function subNav() {
      $(window).scroll(function () {
        var $section = $('.tech-sec');
        var $thisTop = $(this).scrollTop();
        var tabsH = $('.sub-nav').outerHeight(true);
  
        $section.each(function (index) {
          var sectionTop = $('#sec' + (index + 1)).offset().top - tabsH;
          var sectionHeight = $('#sec' + (index + 1)).outerHeight(true);
          if ($thisTop + 20 >= sectionTop && sectionTop + sectionHeight > $thisTop) {
            $('.sub-nav a').removeClass('on');
            $('.sub-nav a:eq(' + index + ')').addClass('on');
          }
        });
        if ($(window).innerWidth() < 721) {
          $('.sub-nav__tit span').text($('.sub-nav a.on').text());
        }
      });
      $('.sub-nav a').on('click', function () {
        if ($(window).innerWidth() < 721) {
          $('html, body').animate(
            {
              scrollTop: $(this.hash).offset().top - 200,
            },
            300,
            function () {}
          );
        }else {
          $('html, body').animate(
            {
              scrollTop: $(this.hash).offset().top - 60,
            },
            300,
            function () {}
          );
        }
        $('.sub-nav a').removeClass('on');
        $(this).addClass('on');
      });
      if (document.querySelector('.is-bg')) {
        let navHeight = $('.sub-nav').height() * -1 + 'px';
        gsap.utils.toArray('.is-bg').forEach((ele, idx)=>{
          gsap.to(ele, {
            scrollTrigger: {
              trigger: ele,
              // markers: true,
              start: navHeight,
              end: '-=' + navHeight,
              toggleClass: {targets:'.sub-nav',className:'is-white'},
            }
          })
        })
      }
      
    }
    function engineeringScreen() {
      gsap.utils.toArray('.tech-sec').forEach((ele, idx) => {
        gsap.to(ele.querySelector('.engineering-screen'), {
          scrollTrigger: {
            trigger: ele,
            start: '0, 50%',
            end: '50%, 50%',
            // markers: true,
            toggleActions: 'play play play reverse',
          },
          width: 0,
          duration: 0.3,
        });
      });
    }
    function manufacturingArcc() {
      $('article').each(function (idx, ele) {
        $(ele)
          .find('.manufacturing-list li button')
          .on('click', function () {
            $(this)
              .toggleClass('active')
              .siblings('div')
              .stop()
              .slideToggle()
              .closest('li')
              .siblings()
              .find('button')
              .removeClass('active')
              .siblings('div')
              .stop()
              .slideUp();
          });
      });
    }
    function companyScreen() {
      gsap.to('.company-screen', {
        scrollTrigger: {
          trigger: '.company-img',
          start: '0, 50%',
          end: '50%, 50%',
          // markers: true,
          toggleActions: 'play play play reverse',
        },
        width: 0,
        duration: 0.5,
      });
    }
    function infiniteCarousel({ trigger, duration, reverse, pauseOnHover }) {
      trigger = document.querySelectorAll(trigger);
  
      trigger.forEach((trigger) => {
        trigger.style.overflow = 'hidden';
        trigger.style.visibility = 'visible';
  
        const items = trigger.querySelector('.carousel-items');
        const item = trigger.querySelectorAll('.carousel-item');
        const itemWidthArr = [...item].map((item) => {
          item.style.position = 'absolute';
          return item.clientWidth;
        });
        let totalWidth = 0;
  
        itemWidthArr.map((width, idx, arr) => {
          if (idx === 0) {
            totalWidth = itemWidthArr[arr.length - 1];
          } else if (arr[idx - 1]) {
            totalWidth = totalWidth + arr[idx - 1];
          }
          gsap.set(item[idx], {
            x: totalWidth,
          });
        });
  
        items.style.position = 'relative';
        items.style.height = `${item[0].offsetHeight}px`;
        items.style.left = `-${Math.max(...itemWidthArr)}px`;
  
        const tl = gsap.timeline();
        tl.to(item, duration * item.length, {
          x: () => {
            return reverse ? `-=${totalWidth}` : `+=${totalWidth}`;
          },
          ease: 'none',
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => {
              return reverse ? (x < 0 ? (parseFloat(x) % totalWidth) + totalWidth : x) : parseFloat(x) % totalWidth;
            }),
          },
        });
  
        if (pauseOnHover) {
          trigger.addEventListener('mouseover', () => {
            tl.pause();
          });
  
          trigger.addEventListener('mouseleave', () => {
            tl.play();
          });
        }
      });
    }
    function susSlide() {
      $('.sus-slide').each(function(idx, ele) {
        $(ele).find('.sus-slide__area').slick({
          dots: false,
          arrows: true,
          infinite: true,
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 5000,
        });
      })
    }
    function complianceArrow() {
      gsap.to('.compliance-system__arrows li path', {
        scrollTrigger: {
          trigger: '.compliance-system',
          // markers: true,
          start: '0, 50%',
        },
        strokeDashoffset: 0,
        delay: 0.5,
        stagger: 1,
        duration: 3,
      })
    }
    function inputFileTxt() {
      $(".sub-form__file input[type='file']").on('change',function(){
        var fileName = $(this).val();
        $(".sub-form__file div span").text(fileName);
        if (fileName) {
          $('.delete').show();
        }
      });
      $('.delete').on('click', function() {
        $(".sub-form__file input[type='file']").val('');
        $(".sub-form__file div span").text('첨부파일을 등록해 주세요');
        $('.delete').hide();
      })
    }
    function globalClick() {
      $('.global-map__circles').on('click', function() {
        $(this).addClass('on').closest('.global-map__cont').addClass('active');
        $(this).closest('.global-map__cont').siblings().removeClass('active').find('.global-map__circles').removeClass('on');
        let circleIdx = $(this).closest('.global-map__cont').index();
        console.log(circleIdx)
        $('.mob-global .global-map__info').eq(circleIdx).addClass('on').siblings().removeClass('on');
      })
    }
      
    function grecipeSlide() {
      $('.grecipe-slide').slick({
        dots: false,
        arrows: false,
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
      });
    }
    function sec06HideBg() {
      gsap.to('.sec06-bg', {
        scrollTrigger: {
          trigger: '.sec06',
          // markers: true,
          start: '-150%, 0',
          end: '+=100%',
        },
        opacity: 1,
      })
    }
    function mainInvestorSlide() {
      if ($(window).innerWidth() < 1201) {
        $('.main-investment_list').slick({
          dots: false,
          arrows: false,
          infinite: true,
          speed: 250,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          cssEase: 'linear',
          slide: '.list',
          pauseOnHover: false,
          pauseOnFocus: false,
          variableWidth: true,
          responsive: [ 
              { 
                breakpoint: 720,
                settings: {	
                  slidesToShow:1 
                } 
              }
            ]
        });
      }
    }
    function navBarMob() {
      if ($(window).innerWidth() < 1025) {
        let subNavPadding = $('.nav-bar a').eq(0).offset().left;
        let currentTab = $('.nav-bar a.on').offset().left;
        let subNavOff = $('.nav-bar').offset().left;
        document.querySelector('.nav-bar').scroll({left: currentTab - subNavOff - subNavPadding})
      }
    }
    function historyNav() {
      gsap.to('.sub-nav__area', {
        scrollTrigger: {
          trigger: '.history',
          start: '0, 50px',
          end: '100%, 50px',
          // markers: true,
          toggleClass: {targets:'.sub-nav__area', className:'fix'},
        }
      })
    }
    function historyNavTab() {
      $('.sub-nav__tit').on('click', function() {
        $('.sub-nav').stop().slideToggle();
        $(this).toggleClass('active');
      })
      if($(window).innerWidth() < 721) {
        $('.sub-nav a').on('click', function() {
          $('.sub-nav').stop().slideUp(10);
          $(this).removeClass('active');
        })
      }
    }
    function subTab() {
      $('.sub-nav__tit').on('click', function() {
        $('.sub-tab').stop().slideToggle();
        $(this).toggleClass('active');
      })
    }
    function senseTable() {
      let windowWidth = $(window).innerWidth();
      // let innerMargin = parseInt(windowWidth - $('.tech-table').innerWidth()) / 2;
      if (windowWidth < 1441) {
        $('.tech-table').each((idx, ele) => {
          if ($(ele).find('table').innerWidth() > windowWidth) {
            $(ele).siblings('p').append('<i></i>')
          }
  
          // $(ele).on('scroll', function() {
          //   console.log($(ele).find('table').offset().left, innerMargin)
          //   if ($(ele).find('table').offset().left < innerMargin) {
          //     $(ele).addClass('is-focus')
          //   }else if ($(ele).find('table').offset().left > innerMargin) {
          //     $(ele).removeClass('is-focus')
          //   }
          // })
        })
      }
    }
  });
  