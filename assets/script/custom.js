document.addEventListener("DOMContentLoaded", function () {
  var okButton = document.querySelector("#p_modal_button3");

  okButton.addEventListener("click", function () {
    var response = document.querySelector("#userResponse").value;
    console.log(response);
  });

  // The ability to leave a comment

  const commentSection = document.querySelector('.comments_face');
  const commentInput = document.getElementById('comment-input');
  const submitButton = document.getElementById('submit-comment');

  submitButton.addEventListener('click', function () {
    const comment = commentInput.value;
  
    const newComment = document.createElement('div');
    newComment.classList.add('comments');
    newComment.setAttribute('id', `comment${commentSection.children.length}`);
    newComment.style.display = 'block';
  
    // Set the innerHTML of the new comment element
    newComment.innerHTML = `
    <div class="profile">
    <img src="assets/img/anonymous.webp"></div>
  <div class="comment-content">
    <p class="name">
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Inês</font>
      </font>
    </p>
    <p>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;"> ${comment}</font>
      </font>
    </p>
  </div>
  <div class="clr"></div>
  <div class="comment-status">
    <span>
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">Curte·comente</font>
      </font>
      <img src="assets/img/3.webp" width="15px" height="15px">
      <font style="vertical-align: inherit;">
        <font style="vertical-align: inherit;">29</font>
      </font>
    </span>
    <font style="vertical-align: inherit;">
      <small>
        <font style="vertical-align: inherit;">·</font>
      </small>


      <small>
        <u>
          <font style="vertical-align: inherit;">4 minutos antes</font>
        </u>
      </small>
    </font>
    <small>
      <font style="vertical-align: inherit;"></font>
      <u>
        <font style="vertical-align: inherit;"></font>
      </u>
    </small>
  </div>
      `

    commentSection.insertBefore(newComment, commentSection.children[1]);
    commentInput.value = '';
  });

});
