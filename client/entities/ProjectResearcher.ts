import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Project } from "./Project"
import { Researcher } from "./Researcher"

@Index("project_researcher_audit_id_key", ["auditId"], { unique: true })
@Index("project_researcher_pkey", ["projectId", "researcherId"], {
  unique: true,
})
@Entity("project_researcher", { schema: "public" })
export class ProjectResearcher {
  @Column("integer", { primary: true, name: "project_id" })
  projectId: number

  @Column("integer", { primary: true, name: "researcher_id" })
  researcherId: number

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @ManyToOne(() => Project, (project) => project.projectResearchers, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "project_id", referencedColumnName: "id" }])
  project: Project

  @ManyToOne(() => Researcher, (researcher) => researcher.projectResearchers, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "researcher_id", referencedColumnName: "id" }])
  researcher: Researcher
}
