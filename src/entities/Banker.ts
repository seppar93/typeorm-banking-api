import {
  Entity,
  Column,
} from "typeorm"; //decorators
import { Person } from "./utils/Person";

@Entity("banker")
export class Banker extends Person {
 
  @Column({
    unique: true,
    length: "10",
  })
  employee_number: number;

}
