import del from 'del';

del('public').then(() => {
  console.log('Папка public удалена.');
})
