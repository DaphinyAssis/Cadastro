import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { v4 as uuid } from "uuid";
  
  @Entity("stocks")
  class Stock {
    @PrimaryColumn()
    readonly id!: string ;
  
    @Column()
      product!: string;
  
    @Column()
      quantity!: string;
  
    @Column()
      category!: string;

    @Column()
      supplier!: string;
  
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
  
  export { Stock };