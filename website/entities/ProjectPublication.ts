import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Project } from "./Project"
import { Publication } from "./Publication"

@Index("project_publication_audit_id_key", ["auditId"], { unique: true })
@Index("project_publication_pkey", ["projectId", "publicationId"], {
  unique: true,
})
@Entity("project_publication", { schema: "public" })
export class ProjectPublication {
  @Column("integer", { primary: true, name: "project_id" })
  projectId: number

  @Column("integer", { primary: true, name: "publication_id" })
  publicationId: number

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @ManyToOne(() => Project, (project) => project.projectPublications, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "project_id", referencedColumnName: "id" }])
  project: Project

  @ManyToOne(() => Publication, (publication) => publication.projectPublications, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "publication_id", referencedColumnName: "id" }])
  publication: Publication
}
