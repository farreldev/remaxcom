const App = (() => {
  function myModal(id) {
    $(`#${id}`).toggleClass("is-visible");
  }

  $(".modal-toggle").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".custom-modal").removeClass("is-visible");
  });

  return {
    myModal,
  };
})();
