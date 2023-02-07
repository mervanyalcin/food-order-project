import Realm from 'realm';

// Define the schema for the MongoDB collection
const schema = {
  name: 'User',
  properties: {
    name: 'string',
    email: 'string',
    age: 'int'
  }
};

// Connect to the MongoDB database
const realm = new Realm({ schema: [schema] });

// Insert a new document into the MongoDB collection
realm.write(() => {
  realm.create('User', {
    name: 'John Doe',
    email: 'johndoe@example.com',
    age: 30
  });
});

// Query the MongoDB collection for documents
const users = realm.objects('User');
console.log(users);
