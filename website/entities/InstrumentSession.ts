import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import { DataFileLink } from "./DataFileLink"
import { Instrument } from "./Instrument"
import { Project } from "./Project"
import { InstrumentSessionResearcher } from "./InstrumentSessionResearcher"
import { Session } from "./Session"

@Index("instrument_session_audit_id_key", ["auditId"], { unique: true })
@Index("instrument_session_pkey", ["id"], { unique: true })
@Entity("instrument_session", { schema: "public" })
export class InstrumentSession {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number

  @Column("timestamp without time zone", { name: "start_date", nullable: true })
  startDate: Date | null

  @Column("timestamp without time zone", { name: "end_date", nullable: true })
  endDate: Date | null

  @Column("text", { name: "name", nullable: true })
  name: string | null

  @Column("jsonb", { name: "data", nullable: true })
  data: object | null

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @OneToMany(() => DataFileLink, (dataFileLink) => dataFileLink.instrumentSession)
  dataFileLinks: DataFileLink[]

  @ManyToOne(() => Instrument, (instrument) => instrument.instrumentSessions)
  @JoinColumn([{ name: "instrument", referencedColumnName: "id" }])
  instrument: Instrument

  @ManyToOne(() => Project, (project) => project.instrumentSessions)
  @JoinColumn([{ name: "project_id", referencedColumnName: "id" }])
  project: Project

  @OneToMany(
    () => InstrumentSessionResearcher,
    (instrumentSessionResearcher) => instrumentSessionResearcher.instrumentSession,
  )
  instrumentSessionResearchers: InstrumentSessionResearcher[]

  @OneToMany(() => Session, (session) => session.instrumentSession)
  sessions: Session[]
}
