import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import { SessionAttribute } from "./SessionAttribute"
import { Analysis } from "./Analysis"
import { DataFileLink } from "./DataFileLink"
import { Instrument } from "./Instrument"
import { InstrumentSession } from "./InstrumentSession"
import { Project } from "./Project"
import { Publication } from "./Publication"
import { Sample } from "./Sample"

@Index("session_audit_id_key", ["auditId"], { unique: true })
@Index(
  "session_sample_id_date_instrument_technique_key",
  ["date", "instrument", "sampleId", "technique"],
  { unique: true },
)
@Index("session_pkey", ["id"], { unique: true })
@Index("session_uuid_key", ["uuid"], { unique: true })
@Entity("session", { schema: "public" })
export class Session {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number

  @Column("uuid", {
    name: "uuid",
    unique: true,
    default: () => "uuid_generate_v4()",
  })
  uuid: string

  @Column("integer", { name: "sample_id", nullable: true, unique: true })
  sampleId: number | null

  @Column("timestamp without time zone", {
    name: "date",
    unique: true,
    default: () => "'-infinity'",
  })
  date: Date

  @Column("timestamp without time zone", { name: "end_date", nullable: true })
  endDate: Date | null

  @Column("text", { name: "date_precision", nullable: true })
  datePrecision: string | null

  @Column("text", { name: "name", nullable: true })
  name: string | null

  @Column("integer", { name: "instrument", nullable: true, unique: true })
  instrument: number | null

  @Column("text", { name: "technique", nullable: true, unique: true })
  technique: string | null

  @Column("text", { name: "target", nullable: true })
  target: string | null

  @Column("timestamp without time zone", {
    name: "embargo_date",
    nullable: true,
  })
  embargoDate: Date | null

  @Column("jsonb", { name: "data", nullable: true })
  data: object | null

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @OneToMany(() => SessionAttribute, (sessionAttribute) => sessionAttribute.session)
  sessionAttributes: SessionAttribute[]

  @OneToMany(() => Analysis, (analysis) => analysis.session)
  analyses: Analysis[]

  @OneToMany(() => DataFileLink, (dataFileLink) => dataFileLink.session)
  dataFileLinks: DataFileLink[]

  @ManyToOne(() => Instrument, (instrument) => instrument.sessions)
  @JoinColumn([{ name: "instrument", referencedColumnName: "id" }])
  instrument2: Instrument

  @ManyToOne(() => InstrumentSession, (instrumentSession) => instrumentSession.sessions)
  @JoinColumn([{ name: "instrument_session_id", referencedColumnName: "id" }])
  instrumentSession: InstrumentSession

  @ManyToOne(() => Project, (project) => project.sessions, {
    onDelete: "SET NULL",
  })
  @JoinColumn([{ name: "project_id", referencedColumnName: "id" }])
  project: Project

  @ManyToOne(() => Publication, (publication) => publication.sessions, {
    onDelete: "SET NULL",
  })
  @JoinColumn([{ name: "publication_id", referencedColumnName: "id" }])
  publication: Publication

  @ManyToOne(() => Sample, (sample) => sample.sessions)
  @JoinColumn([{ name: "sample_id", referencedColumnName: "id" }])
  sample: Sample
}
