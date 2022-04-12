import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Constant } from "./Constant"
import { Datum } from "./Datum"

@Index("datum_type_audit_id_key", ["auditId"], { unique: true })
@Index(
  "datum_type_parameter_unit_error_unit_error_metric_key",
  ["errorMetric", "errorUnit", "parameter", "unit"],
  { unique: true },
)
@Index("datum_type_pkey", ["id"], { unique: true })
@Index("datum_type_unique", ["parameter", "unit"], { unique: true })
@Entity("datum_type", { schema: "public" })
export class DatumType {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number

  @Column("text", { name: "parameter", unique: true })
  parameter: string

  @Column("text", { name: "unit", unique: true })
  unit: string

  @Column("text", { name: "error_unit", nullable: true, unique: true })
  errorUnit: string | null

  @Column("text", { name: "error_metric", nullable: true, unique: true })
  errorMetric: string | null

  @Column("boolean", {
    name: "is_computed",
    nullable: true,
    default: () => "false",
  })
  isComputed: boolean | null

  @Column("boolean", {
    name: "is_interpreted",
    nullable: true,
    default: () => "false",
  })
  isInterpreted: boolean | null

  @Column("text", { name: "description", nullable: true })
  description: string | null

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @OneToMany(() => Constant, (constant) => constant.type)
  constants: Constant[]

  @OneToMany(() => Datum, (datum) => datum.type2)
  data: Datum[]
}
