import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { ProjectPublication } from "./ProjectPublication"
import { SamplePublication } from "./SamplePublication"
import { Session } from "./Session"

@Index("publication_audit_id_key", ["auditId"], { unique: true })
@Index("publication_pkey", ["id"], { unique: true })
@Entity("publication", { schema: "public" })
export class Publication {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number

  @Column("text", { name: "doi", nullable: true })
  doi: string | null

  @Column("text", { name: "title", nullable: true })
  title: string | null

  @Column("integer", { name: "year", nullable: true })
  year: number | null

  @Column("text", { name: "journal", nullable: true })
  journal: string | null

  @Column("text", { name: "author", nullable: true })
  author: string | null

  @Column("text", { name: "link", nullable: true })
  link: string | null

  @Column("jsonb", { name: "data", nullable: true })
  data: object | null

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @OneToMany(
    () => ProjectPublication,
    (projectPublication) => projectPublication.publication,
  )
  projectPublications: ProjectPublication[]

  @OneToMany(
    () => SamplePublication,
    (samplePublication) => samplePublication.publication,
  )
  samplePublications: SamplePublication[]

  @OneToMany(() => Session, (session) => session.publication)
  sessions: Session[]
}
