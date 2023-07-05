const datetime = document.getElementById('datetime');
setInterval(() => {
  const now = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = now.toLocaleDateString('en-US', options);
  const time = now.toLocaleTimeString();
  datetime.innerHTML = `${date} ${time}`;
}, 1000);

const navList = document.querySelector('#navList');
const navAdd = document.querySelector('#navAdd');
const navContact = document.querySelector('#navContact');
const listHeader = document.querySelector('#list');
const addNewHeader = document.querySelector('#add_new');
const contactHeader = document.querySelector('#contact');
const bookList = document.querySelector('#display-area');
const Addbook = document.querySelector('#input-form');

const contact = document.querySelector('#contact_sec');

navList.addEventListener('click', () => {
  listHeader.style.display = 'inline';
  bookList.style.display = 'inline';
  addNewHeader.style.display = 'none';
  Addbook.style.display = 'none';
  contactHeader.style.display = 'none';
  contact.style.display = 'none';
});

navAdd.addEventListener('click', () => {
  listHeader.style.display = 'none';
  bookList.style.display = 'none';
  addNewHeader.style.display = 'inline';
  Addbook.style.display = 'flex';
  contactHeader.style.display = 'none';
  contact.style.display = 'none';
});

navContact.addEventListener('click', () => {
  listHeader.style.display = 'none';
  bookList.style.display = 'none';
  contactHeader.style.display = 'inline';
  contact.style.display = 'inline';
  addNewHeader.style.display = 'none';
  Addbook.style.display = 'none';
});