import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Analysis } from "./Analysis"
import { Attribute } from "./Attribute"

@Index("__analysis_attribute_pkey", ["analysisId", "attributeId"], {
  unique: true,
})
@Index("__analysis_attribute_audit_id_key", ["auditId"], { unique: true })
@Entity("__analysis_attribute", { schema: "public" })
export class AnalysisAttribute {
  @Column("integer", { primary: true, name: "analysis_id" })
  analysisId: number

  @Column("integer", { primary: true, name: "attribute_id" })
  attributeId: number

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @ManyToOne(() => Analysis, (analysis) => analysis.analysisAttributes)
  @JoinColumn([{ name: "analysis_id", referencedColumnName: "id" }])
  analysis: Analysis

  @ManyToOne(() => Attribute, (attribute) => attribute.analysisAttributes)
  @JoinColumn([{ name: "attribute_id", referencedColumnName: "id" }])
  attribute: Attribute
}
