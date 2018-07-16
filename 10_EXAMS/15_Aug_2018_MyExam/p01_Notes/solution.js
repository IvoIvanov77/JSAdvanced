function addSticker() {
   let stickerList = $('#sticker-list');
   let titleInput = $('input[class="title"]');
   let textInput = $('input[class="content"]');

   if(titleInput.val() === '' || textInput.val() === ''){
      return;
   }

   let li = $('<li>').addClass('note-content')
       .append($('<a>').addClass('button').text('x')
           .on('click', function () {
               $(this).parent().remove();
           }))
       .append($('<h2>').text(titleInput.val()))
       .append($('<hr>'))
       .append($('<p>').text(textInput.val()));

   stickerList.append(li);

   titleInput.val('');
   textInput.val('');


}