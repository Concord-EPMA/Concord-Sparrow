import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Analysis } from "./Analysis"
import { Constant } from "./Constant"

@Index("__analysis_constant_pkey", ["analysisId", "constantId"], {
  unique: true,
})
@Index("__analysis_constant_audit_id_key", ["auditId"], { unique: true })
@Entity("__analysis_constant", { schema: "public" })
export class AnalysisConstant {
  @Column("integer", { primary: true, name: "analysis_id" })
  analysisId: number

  @Column("integer", { primary: true, name: "constant_id" })
  constantId: number

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @ManyToOne(() => Analysis, (analysis) => analysis.analysisConstants)
  @JoinColumn([{ name: "analysis_id", referencedColumnName: "id" }])
  analysis: Analysis

  @ManyToOne(() => Constant, (constant) => constant.analysisConstants)
  @JoinColumn([{ name: "constant_id", referencedColumnName: "id" }])
  constant: Constant
}
