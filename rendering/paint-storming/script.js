const $box = $('.box');

$box.on('click', () => {
  $box.addClass('move');
});


$box.on('mouseenter',()=>{
  $box.style.willChange = 'transform';
})

$box.on('transitionend',()=>{
  $box.style.willChange = 'auto';
})
$box.on('mouseleave',()=>{
  $box.style.willChange = 'auto';
})