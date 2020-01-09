const formEvents = (function () {
  const closeForm = function() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'none';
    let currentForm = document.querySelector('.current-form');
    document.querySelector('.modal-content').removeChild(currentForm);
    modal.style.display = 'none';
  };

  return { closeForm };
}());

export { formEvents as default }