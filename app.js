$(function() {
  function addStory(e) {
    e.preventDefault();
    console.log('yay');
    let $openStar = $('<i>').addClass('far fa-star');
    let $title = ' ' + $('#title').val();
    let $url = $('#url').val();
    let $newStory = $('<li>')
      .append($openStar)
      .append($title);
    $('ol').append($newStory);
  }

  $('ol').on('click', '.fa-star', function(e) {
    $(e.target).toggleClass('fas');
    $(e.target).toggleClass('far');
    console.log('yay');
  });

  $('.nav-link')
    .eq(1)
    .on('click', function() {
      $('.far')
        .parent()
        .toggleClass('invisible');
      // $('li').toggleClass('invisible-nums');
    });

  $('button').on('click', addStory);
});
