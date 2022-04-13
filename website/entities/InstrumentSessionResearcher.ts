import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { InstrumentSession } from "./InstrumentSession"
import { Researcher } from "./Researcher"

@Index("instrument_session_researcher_audit_id_key", ["auditId"], {
  unique: true,
})
@Index("instrument_session_researcher_pkey", ["instrumentSessionId", "researcherId"], {
  unique: true,
})
@Entity("instrument_session_researcher", { schema: "public" })
export class InstrumentSessionResearcher {
  @Column("integer", { primary: true, name: "instrument_session_id" })
  instrumentSessionId: number

  @Column("integer", { primary: true, name: "researcher_id" })
  researcherId: number

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @ManyToOne(
    () => InstrumentSession,
    (instrumentSession) => instrumentSession.instrumentSessionResearchers,
    { onDelete: "CASCADE" },
  )
  @JoinColumn([{ name: "instrument_session_id", referencedColumnName: "id" }])
  instrumentSession: InstrumentSession

  @ManyToOne(() => Researcher, (researcher) => researcher.instrumentSessionResearchers, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "researcher_id", referencedColumnName: "id" }])
  researcher: Researcher
}
