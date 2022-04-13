import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Analysis } from "./Analysis"
import { Sample } from "./Sample"

@Index("standard_sample_audit_id_key", ["auditId"], { unique: true })
@Index("standard_sample_pkey", ["name"], { unique: true })
@Entity("standard_sample", { schema: "public" })
export class StandardSample {
  @Column("text", { primary: true, name: "name" })
  name: string

  @Column("text", { name: "description", nullable: true })
  description: string | null

  @Column("text", { name: "authority", nullable: true })
  authority: string | null

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @OneToMany(() => Analysis, (analysis) => analysis.standardSample)
  analyses: Analysis[]

  @ManyToOne(() => Sample, (sample) => sample.standardSamples)
  @JoinColumn([{ name: "sample_id", referencedColumnName: "id" }])
  sample: Sample
}
