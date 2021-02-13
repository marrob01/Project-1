





setTimeout(function(){
    openModal },
     2000);
  
  $(() => {
  
// used what I learned from the lesson to make the modal
  const $openBtn = $('#openModal')
  const $modal = $('#how-to-play-modal')
  const $closeBtn = $('#close')

  let $easyBtn = $('#easy-btn')
  const $hardBtn = $('#hard-btn')
  const $playBtn = $('#play-btn')
  
  const openModal = () => {
    $modal.css('display', 'block')
  }
  
  const closeModal = () => {
    $modal.css('display', 'none')
  }
  

  $openBtn.on('click', openModal)
  
  $closeBtn.on('click', closeModal)
  
  }) 
  