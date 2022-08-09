("");
export type Gender = "Male" | "Female" | "Nonbinary";
export type SaveType = "Saved" | "Draft";
//** User Info interface  */
export interface UserInterface {
  id: string;
  saveType: SaveType;
  name: string;
  gender: Gender;
  email: string;
  age: number;
  designation: string;
  address: string;
  description: string;
}
