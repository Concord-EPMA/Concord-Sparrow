import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Analysis } from "./Analysis"
import { DataFile } from "./DataFile"
import { InstrumentSession } from "./InstrumentSession"
import { Sample } from "./Sample"
import { Session } from "./Session"

@Index(
  "data_file_link_file_hash_session_id_analysis_id_sample_id_i_key",
  ["analysisId", "fileHash", "instrumentSessionId", "sampleId", "sessionId"],
  { unique: true },
)
@Index("data_file_link_audit_id_key", ["auditId"], { unique: true })
@Index("data_file_link_pkey", ["id"], { unique: true })
@Entity("data_file_link", { schema: "public" })
export class DataFileLink {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number

  @Column("uuid", { name: "file_hash", unique: true })
  fileHash: string

  @Column("timestamp without time zone", {
    name: "date",
    default: () => "now()",
  })
  date: Date

  @Column("text", { name: "error", nullable: true })
  error: string | null

  @Column("integer", { name: "session_id", nullable: true, unique: true })
  sessionId: number | null

  @Column("integer", { name: "analysis_id", nullable: true, unique: true })
  analysisId: number | null

  @Column("integer", { name: "sample_id", nullable: true, unique: true })
  sampleId: number | null

  @Column("integer", {
    name: "instrument_session_id",
    nullable: true,
    unique: true,
  })
  instrumentSessionId: number | null

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @ManyToOne(() => Analysis, (analysis) => analysis.dataFileLinks, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "analysis_id", referencedColumnName: "id" }])
  analysis: Analysis

  @ManyToOne(() => DataFile, (dataFile) => dataFile.dataFileLinks, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "file_hash", referencedColumnName: "fileHash" }])
  fileHash2: DataFile

  @ManyToOne(
    () => InstrumentSession,
    (instrumentSession) => instrumentSession.dataFileLinks,
    { onDelete: "CASCADE" },
  )
  @JoinColumn([{ name: "instrument_session_id", referencedColumnName: "id" }])
  instrumentSession: InstrumentSession

  @ManyToOne(() => Sample, (sample) => sample.dataFileLinks, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "sample_id", referencedColumnName: "id" }])
  sample: Sample

  @ManyToOne(() => Session, (session) => session.dataFileLinks, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "session_id", referencedColumnName: "id" }])
  session: Session
}
