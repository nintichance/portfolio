$(document).ready(function(){

$('nav > a').addClass('animated pulse')
$('.section > img').addClass('animated pulse')
let personality = ['placeholder','outgoing', 'hard working', 'inquisitive', 'bubbly.']
let clicked = 0
$('article > h1').on('click', this, function(){
clicked +=1
$(this).append('<article><p>' + personality[clicked] + '</p></article>')
if (clicked === 4){
    $(this).off()
}
})

})