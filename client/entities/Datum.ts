import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Analysis } from "./Analysis"
import { DatumType } from "./DatumType"

@Index("datum_analysis_type_key", ["analysis", "type"], { unique: true })
@Index("datum_audit_id_key", ["auditId"], { unique: true })
@Index("datum_pkey", ["id"], { unique: true })
@Entity("datum", { schema: "public" })
export class Datum {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number

  @Column("integer", { name: "analysis", unique: true })
  analysis: number

  @Column("integer", { name: "type", unique: true })
  type: number

  @Column("numeric", { name: "value" })
  value: string

  @Column("numeric", { name: "error", nullable: true })
  error: string | null

  @Column("boolean", { name: "is_bad", nullable: true })
  isBad: boolean | null

  @Column("boolean", { name: "is_accepted", nullable: true })
  isAccepted: boolean | null

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @ManyToOne(() => Analysis, (analysis) => analysis.data2, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "analysis", referencedColumnName: "id" }])
  analysis2: Analysis

  @ManyToOne(() => DatumType, (datumType) => datumType.data)
  @JoinColumn([{ name: "type", referencedColumnName: "id" }])
  type2: DatumType
}
