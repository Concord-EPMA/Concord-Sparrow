import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Attribute } from "./Attribute"
import { Session } from "./Session"

@Index("__session_attribute_pkey", ["attributeId", "sessionId"], {
  unique: true,
})
@Index("__session_attribute_audit_id_key", ["auditId"], { unique: true })
@Entity("__session_attribute", { schema: "public" })
export class SessionAttribute {
  @Column("integer", { primary: true, name: "session_id" })
  sessionId: number

  @Column("integer", { primary: true, name: "attribute_id" })
  attributeId: number

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @ManyToOne(() => Attribute, (attribute) => attribute.sessionAttributes)
  @JoinColumn([{ name: "attribute_id", referencedColumnName: "id" }])
  attribute: Attribute

  @ManyToOne(() => Session, (session) => session.sessionAttributes)
  @JoinColumn([{ name: "session_id", referencedColumnName: "id" }])
  session: Session
}
