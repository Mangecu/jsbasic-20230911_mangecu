/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {

  elem = null;
  #rows = [];

  constructor(rows) {
    this.#rows = rows || this.#rows;
    this.#render();
    this.#deleteRow()
  }
  #render() {
    this.elem = this.createDOMElement(this.#template());
  }

  createDOMElement (html) {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    return temp.firstElementChild;

  }

  #template() {
    return `
      <table>
         <thead>
            <tr>
              <th>Имя</th>
              <th>Возраст</th>
              <th>Зарплата</th>
              <th>Город</th>
              <th></th>
            </tr>
         </thead>
         <tbody>
            ${this.#rows
              .map(item => `<tr>
                              <td>${item.name}</td>
                              <td>${item.age}</td>
                              <td>${item.salary}</td>
                              <td>${item.city}</td>
                              <td><button>X</button></td>
                            </tr>`)
              .join('\n')}
         </tbody>
      </table>
    `
  }

  #deleteRow() {
    let btn = this.elem.querySelectorAll('button');
    btn.forEach((elem) => {
      elem.addEventListener('click', (btn) => {
        btn.target.closest("tr").remove()

      })
    })
  }
}


