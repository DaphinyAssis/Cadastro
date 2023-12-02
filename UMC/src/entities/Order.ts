import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { v4 as uuid } from "uuid";
  
  @Entity("orders")
  class Order {
    @PrimaryColumn()
    readonly id!: string ;
  
    @Column()
      number!: string;
  
    @Column()
      email!: string;

    @Column()
      product!: string;
     
    @Column()
      quantity!: string;

      @Column()
      price!: string;
  
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
  
  export { Order };