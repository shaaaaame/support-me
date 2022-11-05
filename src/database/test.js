import {Client, Account, ID, Databases} from 'appwrite'


const client = new Client().setEndpoint('http://localhost/v1').setProject('SupportMe');
const account = new Account(client);

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

const databases = new Databases(client);
const promise = databases.createDocument('SupportMe', 'User', unique(), {});
promise.then(response => {
    console.log(response);
}, error => {
    conse
})