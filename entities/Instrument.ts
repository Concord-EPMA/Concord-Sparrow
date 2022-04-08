import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { InstrumentSession } from "./InstrumentSession"
import { Session } from "./Session"

@Index("instrument_audit_id_key", ["auditId"], { unique: true })
@Index("instrument_pkey", ["id"], { unique: true })
@Index("instrument_name_key", ["name"], { unique: true })
@Entity("instrument", { schema: "public" })
export class Instrument {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number

  @Column("text", { name: "name", unique: true })
  name: string

  @Column("text", { name: "description", nullable: true })
  description: string | null

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @OneToMany(() => InstrumentSession, (instrumentSession) => instrumentSession.instrument)
  instrumentSessions: InstrumentSession[]

  @OneToMany(() => Session, (session) => session.instrument2)
  sessions: Session[]
}
