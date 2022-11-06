// import {Client, Account, ID, Databases, Query} from 'appwrite'


// const client = new Client().setEndpoint('http://localhost/v1').setProject('SupportMe');
// const account = new Account(client);


// account.create(
//     ID.unique(),
//     'andyliu200488@gmail.com',
//     'Lsh#20040808',
//     'Andy Liu'
// ).then(response => {
//     console.log(response);
// }, error => {
//     console.log(error);
// });


// const databases = new Databases(client);


// create data
// const create = databases.createDocument('SupportMe', 'User', 'unique()', {ID: '0', FirstName: 'Rose', LastName: '?'});
// create.then(response => {
//     console.log(response);
// }, error => {
//     console.log(error);
// });


// list data
// const list = databases.listDocuments('SupportMe', 'User');
// list.then(response => {
//     console.log(response);
// }, error => {
//     console.log(error);
// });


// get data
// const get = databases.getDocument('SupportMe', 'User', '6366e1d4a18fd05a2845');
// get.then(repsonse => {
//     console.log(repsonse);
// }, error => {
//     console.log(error);
// });


// update data
// const update = databases.updateDocument('SupportMe', 'User', '6366e1d4a18fd05a2845', {FirstName: 'Joe', LastName: 'Zhang'});
// update.then(reponse => {
//     console.log(reponse);
// }, error => {
//     console.log(error);
// });


// delete data
// const del = databases.deleteDocument('SupportMe', 'User', '6366e1d4a18fd05a2845');
// del.then(response => {
//     console.log(response);
// }, error => {
//     console.log(error);
// });


// query data
// const query = databases.listDocuments('SupportMe', 'User', [Query.equal('FirstName', 'Joe')]);
// query.then(response => {
//     console.log(response);
// }, error => {
//     console.log(error);
// });


// Query.orderAsc() 升序
// Query.orderDesc() 降序

