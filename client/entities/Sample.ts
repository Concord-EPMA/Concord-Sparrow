import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import { DataFileLink } from "./DataFileLink"
import { ProjectSample } from "./ProjectSample"
import { SampleGeoEntity } from "./SampleGeoEntity"
import { SamplePublication } from "./SamplePublication"
import { Session } from "./Session"
import { StandardSample } from "./StandardSample"

@Index("sample_audit_id_key", ["auditId"], { unique: true })
@Index("sample_pkey", ["id"], { unique: true })
@Index("sample_igsn_key", ["igsn"], { unique: true })
@Index("sample_uuid_key", ["uuid"], { unique: true })
@Entity("sample", { schema: "public" })
export class Sample {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number

  @Column("text", { name: "name", nullable: true })
  name: string | null

  @Column("uuid", {
    name: "uuid",
    unique: true,
    default: () => "uuid_generate_v4()",
  })
  uuid: string

  @Column("text", { name: "igsn", nullable: true, unique: true })
  igsn: string | null

  @Column("text", { name: "material", nullable: true })
  material: string | null

  @Column("integer", {
    name: "location_precision",
    nullable: true,
    default: () => "0",
  })
  locationPrecision: number | null

  @Column("text", { name: "location_name", nullable: true })
  locationName: string | null

  @Column("boolean", { name: "location_name_autoset", nullable: true })
  locationNameAutoset: boolean | null

  @Column("geometry", { name: "location", nullable: true })
  location: string | null

  @Column("numeric", { name: "elevation", nullable: true })
  elevation: string | null

  @Column("numeric", { name: "depth", nullable: true })
  depth: string | null

  @Column("timestamp without time zone", {
    name: "embargo_date",
    nullable: true,
  })
  embargoDate: Date | null

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @OneToMany(() => DataFileLink, (dataFileLink) => dataFileLink.sample)
  dataFileLinks: DataFileLink[]

  @OneToMany(() => ProjectSample, (projectSample) => projectSample.sample)
  projectSamples: ProjectSample[]

  @ManyToOne(() => Sample, (sample) => sample.samples)
  @JoinColumn([{ name: "member_of", referencedColumnName: "id" }])
  memberOf: Sample

  @OneToMany(() => Sample, (sample) => sample.memberOf)
  samples: Sample[]

  @OneToMany(() => SampleGeoEntity, (sampleGeoEntity) => sampleGeoEntity.sample)
  sampleGeoEntities: SampleGeoEntity[]

  @OneToMany(() => SamplePublication, (samplePublication) => samplePublication.sample)
  samplePublications: SamplePublication[]

  @OneToMany(() => Session, (session) => session.sample)
  sessions: Session[]

  @OneToMany(() => StandardSample, (standardSample) => standardSample.sample)
  standardSamples: StandardSample[]
}
