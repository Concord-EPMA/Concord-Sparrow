import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { AnalysisAttribute } from "./AnalysisAttribute"
import { SessionAttribute } from "./SessionAttribute"

@Index("attribute_audit_id_key", ["auditId"], { unique: true })
@Index("attribute_pkey", ["id"], { unique: true })
@Index("attribute_value_parameter_key", ["parameter", "value"], {
  unique: true,
})
@Entity("attribute", { schema: "public" })
export class Attribute {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number

  @Column("text", { name: "parameter", unique: true })
  parameter: string

  @Column("text", { name: "value", unique: true })
  value: string

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @OneToMany(() => AnalysisAttribute, (analysisAttribute) => analysisAttribute.attribute)
  analysisAttributes: AnalysisAttribute[]

  @OneToMany(() => SessionAttribute, (sessionAttribute) => sessionAttribute.attribute)
  sessionAttributes: SessionAttribute[]
}
