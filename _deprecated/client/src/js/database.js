//! removed complex package 'idb' because it is more complex than required
//! using 'idb-keyval' for simplified db 
//! this will oprtate exatly as previous version
//! same API - npm i and everything will be installed
import { get, set } from 'idb-keyval';

const IDB_KEY = 'JATE_STORAGE_KEY'
// const initdb = async () =>
// // We are creating a new database named 'contact' which will be using version 1 of the database.
//   openDB('jate', 1, {
//     // Add our database schema if it has not already been initialized.
//     upgrade(db) {
//       if (db.objectStoreNames.contains('jate')) {
//         console.log('contact database already exists');
//         return;
//       }
//       // Create a new object store for the data and give it an key name of 'id' which needs to increment automatically.
//       db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
//       console.log('contact database created');
//     },
//   });

// // Export a function we will use to POST to the database.
// export const putDb = async (config)  => {
//   console.log('Post to the database');

//   // Create a connection to the database database and version we want to use.
//   const contactDb = await openDB('jate', 1);

//   // Create a new transaction and specify the database and data privileges.
//   const tx = contactDb.transaction('jate', 'readwrite');

//   // Open up the desired object store.
//   const store = tx.objectStore('jate');

//   // Use the .add() method on the store and pass in the content.
//   const request = store.add(config);

//   // Get confirmation of the request.
//   const result = await request;
//   console.log('🚀 - data saved to the database', result);
// };
// ;

// // Export a function we will use to GET to the database.
// export const getDb = async () => {
//   console.log('GET from the database');

//   // Create a connection to the database database and version we want to use.
//   const contactDb = await openDB('jate', 1);

//   // Create a new transaction and specify the database and data privileges.
//   const tx = contactDb.transaction('jate', 'readonly');

//   // Open up the desired object store.
//   const store = tx.objectStore('jate');

//   // Use the .getAll() method to get all data in the database.
//   const request = store.getAll();

//   // Get confirmation of the request.
//   const result = await request;
//   console.log('result.value', result);
//   return result;
// };


// // Export a function we will use to DELETE to the database.
// export const deleteDb = async (id) => {
//   console.log('DELETE from the database', id);

//   // Create a connection to the database database and version we want to use.
//   const contactDb = await openDB('jate', 1);

//   // Create a new transaction and specify the database and data privileges.
//   const tx = contactDb.transaction('jate', 'readwrite');

//   // Open up the desired object store.
//   const store = tx.objectStore('jate');

//   // Use the .delete() method to get all data in the database.
//   const request = store.delete(id);

//   // Get confirmation of the request.
//   const result = await request;
//   console.log('result.value', result);
//   return result?.value;
// };

// // Start the database.
// initdb();

export const putDb = content => set(IDB_KEY, content)
export const getDb = () => get(IDB_KEY)

