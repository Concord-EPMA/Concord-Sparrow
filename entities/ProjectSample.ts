import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Project } from "./Project"
import { Sample } from "./Sample"

@Index("project_sample_audit_id_key", ["auditId"], { unique: true })
@Index("project_sample_pkey", ["projectId", "sampleId"], { unique: true })
@Entity("project_sample", { schema: "public" })
export class ProjectSample {
  @Column("integer", { primary: true, name: "project_id" })
  projectId: number

  @Column("integer", { primary: true, name: "sample_id" })
  sampleId: number

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @ManyToOne(() => Project, (project) => project.projectSamples, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "project_id", referencedColumnName: "id" }])
  project: Project

  @ManyToOne(() => Sample, (sample) => sample.projectSamples, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "sample_id", referencedColumnName: "id" }])
  sample: Sample
}
