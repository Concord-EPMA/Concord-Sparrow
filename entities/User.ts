import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Researcher } from "./Researcher"

@Index("user_audit_id_key", ["auditId"], { unique: true })
@Index("user_pkey", ["username"], { unique: true })
@Entity("user", { schema: "public" })
export class User {
  @Column("text", { primary: true, name: "username" })
  username: string

  @Column("text", { name: "password", nullable: true })
  password: string | null

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @ManyToOne(() => Researcher, (researcher) => researcher.users)
  @JoinColumn([{ name: "researcher_id", referencedColumnName: "id" }])
  researcher: Researcher
}
