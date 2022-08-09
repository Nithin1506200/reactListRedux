import { UserInterface } from "../util/userinfo";
import { v4 as uuidv4 } from "uuid";

const testUsers: UserInterface[] = [
  {
    id: uuidv4(),
    email: "johndoe@gmail.com",
    name: "John Doe",
    saveType: "Saved",
    age: 21,
    gender: "Male",
    designation: "Frontend Engineer",
    address: "Long island ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus velit sit amet dignissim aliquam. Cras interdum nec ante nec maximus. Sed ante orci, convallis id venenatis quis, commodo sagittis quam. Fusce nibh felis, auctor non arcu nec, tincidunt eleifend est. Ut cursus risus id hendrerit semper. Nullam molestie tincidunt sem eget hendrerit. Morbi leo lectus, facilisis id nisl quis, tincidunt posuere libero. Suspendisse facilisis nunc at nisi dapibus, ac euismod nunc elementum. Fusce nec lorem facilisis, aliquam ante in, tempus urna. ",
  },
  {
    id: uuidv4(),
    email: "janedoe@gmail.com",
    name: "Jane Doe",
    age: 25,
    saveType: "Draft",
    gender: "Female",
    designation: "Ml Engineer",
    address: " Russia ",
    description:
      " convallis id venenatis quis, commodo sagittis quam. Fusce nibh felis, auctor non arcu nec, tincidunt eleifend est. Ut cursus risus id hendrerit semper. Nullam molestie tincidunt sem eget hendrerit. Morbi leo lectus, facilisis id nisl quis, tincidunt posuere libero. Suspendisse facilisis nunc at nisi dapibus, ac euismod nunc elementum. Fusce nec lorem facilisis, aliquam ante in, tempus urna. ",
  },
];

export default testUsers;
