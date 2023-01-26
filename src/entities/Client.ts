import {
  Entity,
  Column,
} from "typeorm"; //decorator
import { Person } from "./utils/Person";

@Entity("client")
// inheriting from Person
export class Client extends Person {
  @Column({
    type: "numeric",
    // numeric is used for money
  })
  balance: number;

  @Column({
    default: true,
    name: "active",
    // ^ this is the name we can give in the DB
  })
  is_active: boolean;

  @Column({
    type: "simple-json",
    nullable: true,
  })
  additional_info: {
    age: number;
    hair_color: string;
  };

  @Column({
    type: "simple-array",
    default: [],
  })
  family_members: string[];
}
