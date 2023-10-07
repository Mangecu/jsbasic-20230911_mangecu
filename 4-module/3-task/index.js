function highlight(table) {
  table.querySelectorAll('tbody tr').forEach(elem => {

    switch (elem.cells[3].dataset.available) {
      case "true":
        elem.classList.add('available');
        break;
      case "false":
        elem.classList.add('unavailable');
        break;
      default:
        elem.hidden = 'true';
    }

    switch (elem.cells[2].textContent) {
      case "m":
        elem.classList.add('male');
        break;
      case "f":
        elem.classList.add('female');
        break;
    }

    if (elem.cells[1].textContent < 18) {
      elem.style.textDecoration = 'line-through';
    }
  })
}
