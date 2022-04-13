import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import { AnalysisConstant } from "./AnalysisConstant"
import { DatumType } from "./DatumType"

@Index("constant_audit_id_key", ["auditId"], { unique: true })
@Index("constant_pkey", ["id"], { unique: true })
@Entity("constant", { schema: "public" })
export class Constant {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number

  @Column("numeric", { name: "value" })
  value: string

  @Column("numeric", { name: "error", nullable: true })
  error: string | null

  @Column("text", { name: "description", nullable: true })
  description: string | null

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @OneToMany(() => AnalysisConstant, (analysisConstant) => analysisConstant.constant)
  analysisConstants: AnalysisConstant[]

  @ManyToOne(() => DatumType, (datumType) => datumType.constants)
  @JoinColumn([{ name: "type", referencedColumnName: "id" }])
  type: DatumType
}
