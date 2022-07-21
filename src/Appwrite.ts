import { Client, Databases, Account } from "appwrite";

export const client = new Client();

client.setEndpoint("https://apdb.light.network/v1").setProject("62d46e892cf08785397a");

// Project ID : 62d46e892cf08785397a
// Database ID: 62d46f270f7c4a972760
// User-Resume Collection: 62d533c41f4ace64319e
export const revueDB = new Databases(client, "62d46f270f7c4a972760");
export const account = new Account(client);

export const session = account.createEmailSession("bhardwaj@avb.dev", "Test1234");

export const revueJSON = () => {
  let res = {};
  const doc = revueDB.getDocument("62d533c41f4ace64319e", "62d53503b38d5cfe7435");

  doc.then(
    function (response) {
      res = JSON.parse(response.resumeJson);
      console.log(response); // Success
    },
    function (error) {
      console.log(error); // Failure
    }
  );
  return res;
};

// promise.then(
//   function (response) {
//     console.log(response); // Success
//   },
//   function (error) {
//     console.log(error); // Failure
//   }
// );
