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
  }
  #render() {
    this.elem = this.createDOMElement(this.#template());

  }

  #templateRows(item) {
    let list = document.createElement('tr');
    for (let index in item) {
      let row = document.createElement('td');
      row.innerText = `${item[index]}`
      list.append(row);
    }
    return list
  }

  createDOMElement (html) {
    const temp = document.createElement('table');
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
            ${this.#rows.forEach(item => this.#templateRows(item))};
         </tbody>
      </table>
    `
  }


}


