import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { InstrumentSessionResearcher } from "./InstrumentSessionResearcher"
import { ProjectResearcher } from "./ProjectResearcher"
import { User } from "./User"

@Index("researcher_audit_id_key", ["auditId"], { unique: true })
@Index("researcher_pkey", ["id"], { unique: true })
@Index("researcher_orcid_key", ["orcid"], { unique: true })
@Entity("researcher", { schema: "public" })
export class Researcher {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number

  @Column("text", { name: "name" })
  name: string

  @Column("text", { name: "orcid", nullable: true, unique: true })
  orcid: string | null

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @OneToMany(
    () => InstrumentSessionResearcher,
    (instrumentSessionResearcher) => instrumentSessionResearcher.researcher,
  )
  instrumentSessionResearchers: InstrumentSessionResearcher[]

  @OneToMany(() => ProjectResearcher, (projectResearcher) => projectResearcher.researcher)
  projectResearchers: ProjectResearcher[]

  @OneToMany(() => User, (user) => user.researcher)
  users: User[]
}
