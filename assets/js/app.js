$(document).ready(function () {
  $('body').scrollspy({ target: '#navbar-page' })

  $('.jsOpen').click(function () {

    $('.suspense-menu').removeClass('slideOutUp')
    $('.suspense-menu').addClass('active slideInDown')
    $('.disabled-Open').removeClass('slideInDown').addClass('slideOutUp')
    $('.open-menu').first().addClass('active')

    $('body').addClass('bover')

  })

  $('.jsClose').click(function () {

    $('.suspense-menu').removeClass('slideInDown')
    $('.suspense-menu').addClass('slideOutUp')
    $('.disabled-Open').removeClass('slideOutUp d-none').addClass('slideInDown')
    $('.open-menu').first().removeClass('active')

    $('body').removeClass('bover')

  })

  $('.jsAnchor').click(function () {
    $("html, body").animate({
      scrollTop: jQuery("body").offset().top
    }, 1e3)
  })

  $('.jsSearch').click(function () {
    $('.md-search').fadeIn();

    $('.suspense-menu').removeClass('slideInDown')
    $('.suspense-menu').addClass('slideOutUp')

    $('.open-menu').first().removeClass('active')

    $('header').addClass('blur')
    $('main').addClass('blur')
    $('footer').addClass('blur')

    $('body').addClass('bover')
  })

  $('.jsCloseSearch').click(function () {
    $('header').removeClass('blur')
    $('main').removeClass('blur')
    $('footer').removeClass('blur')


    $('.md-search').fadeOut()

    $('body').removeClass('bover')
  })


  $('img').lazyload();
  $('.lazyload__img').lazyload();

  getPostsMedium();
});

function getPostsMedium() {
  $.ajax({
    type: "GET",
    url: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@micheldeziderio',
    dataType: "json",
    success: function (data) {

      let boxPost = '';
      timer = 0.5;

      $.each(data.items, function (i, post) {

        timer += + 0.1;

        post.pubDate = convertDate(post.pubDate);
        post.thumbnail = getThumbnail(post.content);
        boxPost += createTemplatePostHTML(post, timer);

      });

      $(boxPost).appendTo('#getPosts');
    },
    error: function (errorThrown) {
      console.log(errorThrown);
    }

  });
};

function convertDate(date) {
  const d = date.split(' ')[0];
  const dpost = d.split('-')
  return `${dpost[2]}/${dpost[1]}/${dpost[0]}`;
};

function getThumbnail(content) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, 'text/html');

  const firstImage = doc.querySelector('img');

  const firstImageUrl = firstImage ? firstImage.src : null;
  return firstImageUrl;
};

function createTemplatePostHTML(post, timer) {
  return `
    <div class="col-lg-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay="${timer}s">

        <a href="${post.link}" class="box-posts" target="_blank">

            <div class="box-header">
                <figure>
                    <img src="${post.thumbnail}"
                    title="${post.title}" alt="${post.title}">
                </figure>
                
                <div class="date-post">${post.pubDate}</div>
            </div>

            <h3 class="box-title" title="${post.title}">
                ${post.title}
            </h3>

            <button>Ler artigo</button>
        </a>

    </div>  
  `
};

function getReposGithub() {

  $.ajax({
    type: "GET",
    url: 'https://api.github.com/users/micheldeziderio/repos',
    dataType: 'json',
    success: function (repos) {
      $.each(repos, function (i, repo) {
        $(createTemplateReposHTML(repo)).appendTo('#getRepositorys');
      });
    },
    error: function (errorThrown) {
      console.log(errorThrown);
    }

  });

};

function createTemplateReposHTML(repo) {

  if (repo.name != 'MichelDeziderio')

    return `
    <div class="col-lg-4">
        <a href="${repo.html_url}" target="_blank" class="box-repository">
            <div class="title">
                ${repo.name} - ${repo.language}
            </div>
            <div class="description">
               ${repo.description || '--'}
            </div>
        </a>
    </div>
  `
}

var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
$(document).keydown(function (e) {
  kkeys.push(e.keyCode);
  if (kkeys.toString().indexOf(konami) >= 0) {
    $(document).unbind('keydown', arguments.callee);

    $('#mrRobot').modal('show', 1000);

    document.querySelector('.modalAudio').innerHTML = '<audio autoplay><source src="assets/audio/toasty.mp3" type="audio/mpeg"></audio>';

    setTimeout(function () { $('#mrRobot').modal('hide'); }, 1500);

  }
});