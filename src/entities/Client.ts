import {
  Entity,
  BaseEntity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm"; //decorator

@Entity("client")
// BaseEntity is for CRUD operations
export class Client extends BaseEntity {
  // defining the columns in our table

  //   primary Column ID
  @PrimaryColumn({
    type: "uuid",
  })
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  fist_name: string;

  @Column()
  last_name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    unique: true,
    length: 10,
  })
  card_number: string;

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

// inheritance