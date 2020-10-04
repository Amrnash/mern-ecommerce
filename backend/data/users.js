import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@exaple.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "admin@exaple.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "admin@exaple.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
