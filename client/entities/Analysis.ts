import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import { AnalysisAttribute } from "./AnalysisAttribute"
import { AnalysisConstant } from "./AnalysisConstant"
import { Session } from "./Session"
import { StandardSample } from "./StandardSample"
import { DataFileLink } from "./DataFileLink"
import { Datum } from "./Datum"

@Index(
  "analysis_session_id_session_index_analysis_name_key",
  ["analysisName", "sessionId", "sessionIndex"],
  { unique: true },
)
@Index("analysis_audit_id_key", ["auditId"], { unique: true })
@Index("analysis_pkey", ["id"], { unique: true })
@Entity("analysis", { schema: "public" })
export class Analysis {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number

  @Column("integer", { name: "session_id", unique: true })
  sessionId: number

  @Column("integer", { name: "session_index", nullable: true, unique: true })
  sessionIndex: number | null

  @Column("text", { name: "analysis_name", nullable: true, unique: true })
  analysisName: string | null

  @Column("text", { name: "analysis_type", nullable: true })
  analysisType: string | null

  @Column("timestamp without time zone", { name: "date", nullable: true })
  date: Date | null

  @Column("text", { name: "material", nullable: true })
  material: string | null

  @Column("boolean", { name: "is_standard", nullable: true })
  isStandard: boolean | null

  @Column("boolean", { name: "is_accepted", nullable: true })
  isAccepted: boolean | null

  @Column("boolean", { name: "is_bad", nullable: true })
  isBad: boolean | null

  @Column("boolean", { name: "is_interpreted", nullable: true })
  isInterpreted: boolean | null

  @Column("jsonb", { name: "data", nullable: true })
  data: object | null

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @OneToMany(() => AnalysisAttribute, (analysisAttribute) => analysisAttribute.analysis)
  analysisAttributes: AnalysisAttribute[]

  @OneToMany(() => AnalysisConstant, (analysisConstant) => analysisConstant.analysis)
  analysisConstants: AnalysisConstant[]

  @ManyToOne(() => Session, (session) => session.analyses, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "session_id", referencedColumnName: "id" }])
  session: Session

  @ManyToOne(() => StandardSample, (standardSample) => standardSample.analyses)
  @JoinColumn([{ name: "standard_sample", referencedColumnName: "name" }])
  standardSample: StandardSample

  @OneToMany(() => DataFileLink, (dataFileLink) => dataFileLink.analysis)
  dataFileLinks: DataFileLink[]

  @OneToMany(() => Datum, (datum) => datum.analysis2)
  data2: Datum[]
}
