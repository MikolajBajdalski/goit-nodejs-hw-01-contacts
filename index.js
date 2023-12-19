const { program } = require("commander");
const contactsOperations = require("./contacts");

program
  .option("-a, --action <type>", "action type")
  .option("-i, --id <type>", "contact id")
  .option("-n, --name <type>", "contact name")
  .option("-e, --email <type>", "contact email")
  .option("-p, --phone <type>", "contact phone");

program.parse(process.argv);

const options = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contactsOperations.listContacts();
      break;
    case "get":
      contactsOperations.getContactById(id);
      break;
    case "add":
      contactsOperations.addContact(name, email, phone);
      break;
    case "remove":
      contactsOperations.removeContact(id);
      break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

if (options.action) {
  invokeAction(options);
} else {
  program.help();
}
