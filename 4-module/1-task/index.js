function makeFriendsList(friends) {
  let list = document.createElement('ul');
  for (let index in friends) {
    let item = document.createElement('li');
    item.innerText = `${friends[index].firstName} ${friends[index].lastName}`;
    list.append(item);
  }
  return list
}
