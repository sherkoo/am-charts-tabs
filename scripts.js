$(document).ready(function(){

  // vars
  var tabMenu = $('.tabs .menu li'),
      tabContent = $('.tabs .content');

  // initialize
  tabMenu.first().addClass('active');
  tabContent.not(":first").hide();

  // when user clicks
  tabMenu.click(function(e){
    tabMenu.removeClass('active');
    $(this).addClass('active');
    var id = $(e.target).index();
    tabContent.hide().eq(id).fadeIn(300);

    playerStatsKda.invalidateSize();
    playerStatsKda.animateAgain();

    playerStatsKp.invalidateSize();
    playerStatsKp.animateAgain();

    playerStatsGpm.invalidateSize();
    playerStatsGpm.animateAgain();

    playerStatsMkm.invalidateSize();
    playerStatsMkm.animateAgain();

  });

});