import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { InstrumentSession } from "./InstrumentSession"
import { ProjectPublication } from "./ProjectPublication"
import { ProjectResearcher } from "./ProjectResearcher"
import { ProjectSample } from "./ProjectSample"
import { Session } from "./Session"

@Index("project_audit_id_key", ["auditId"], { unique: true })
@Index("project_pkey", ["id"], { unique: true })
@Entity("project", { schema: "public" })
export class Project {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number

  @Column("text", { name: "name" })
  name: string

  @Column("text", { name: "description", nullable: true })
  description: string | null

  @Column("timestamp without time zone", {
    name: "embargo_date",
    nullable: true,
  })
  embargoDate: Date | null

  @Column("text", { name: "location_name", nullable: true })
  locationName: string | null

  @Column("boolean", { name: "location_name_autoset", nullable: true })
  locationNameAutoset: boolean | null

  @Column("geometry", { name: "location", nullable: true })
  location: string | null

  @Column("integer", { name: "location_precision", nullable: true })
  locationPrecision: number | null

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @OneToMany(() => InstrumentSession, (instrumentSession) => instrumentSession.project)
  instrumentSessions: InstrumentSession[]

  @OneToMany(() => ProjectPublication, (projectPublication) => projectPublication.project)
  projectPublications: ProjectPublication[]

  @OneToMany(() => ProjectResearcher, (projectResearcher) => projectResearcher.project)
  projectResearchers: ProjectResearcher[]

  @OneToMany(() => ProjectSample, (projectSample) => projectSample.project)
  projectSamples: ProjectSample[]

  @OneToMany(() => Session, (session) => session.project)
  sessions: Session[]
}
