function avtiveCome() {
  console.log('nnnn');
  $('.activity-detail').animate({
    left: '0',
    width: '75%',
    height: '100%'
  }, 2000, function () {
  $('.activity-detail__target').fadeIn(3000);
  $('.activity-detail__process').slideDown(3000);

  });
}
function activeLeave() {
  $('.activity-detail__target').slideUp('slow');
  $('.activity-detail__process').fadeOut(2000, function () {
  });
  $('.activity-detail').animate({
    left: '0',
    width: '0',
    height: '0'
  },3000);
}
$(function () {
  $('.test1').click(avtiveCome);
  $('.test').click(activeLeave);
});