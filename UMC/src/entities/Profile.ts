import { profile } from "console";
import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { v4 as uuid } from "uuid";
  
  @Entity("profiles")
  class Profile {
    @PrimaryColumn()
    readonly id!: string ;
  
    @Column()
      email!: string;

     @Column()
      password!: string;

  
    @CreateDateColumn()
      created_at!: Date;
  
    @UpdateDateColumn()
      updated_at!: Date;
 
    constructor() {
      if (!this.id) {
        this.id = uuid();
      }
    }
  }
  
  export { Profile };