$(document).ready(function(){
  var modal = $(".modal");
  var modal_content = $(".modal-content");
  var sol_btn = $(".btn");
  var close_btn = $(".close");

  sol_btn.unbind().click(function(){
    const url = this.dataset.imgUrl;
    modal_content.attr("src", url);
    modal.css("display", "block");
  });

  close_btn.unbind().click(function(){
    modal.css("display", "none");
  })
});
