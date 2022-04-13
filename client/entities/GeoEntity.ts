import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import { SampleGeoEntity } from "./SampleGeoEntity"

@Index("geo_entity_audit_id_key", ["auditId"], { unique: true })
@Index("geo_entity_pkey", ["id"], { unique: true })
@Entity("geo_entity", { schema: "public" })
export class GeoEntity {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number

  @Column("text", { name: "name" })
  name: string

  @Column("text", { name: "authority", nullable: true })
  authority: string | null

  @Column("text", { name: "ref_url", nullable: true })
  refUrl: string | null

  @Column("text", { name: "description", nullable: true })
  description: string | null

  @Column("text", { name: "type", nullable: true })
  type: string | null

  @Column("text", { name: "material", nullable: true })
  material: string | null

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @ManyToOne(() => GeoEntity, (geoEntity) => geoEntity.geoEntities)
  @JoinColumn([{ name: "part_of", referencedColumnName: "id" }])
  partOf: GeoEntity

  @OneToMany(() => GeoEntity, (geoEntity) => geoEntity.partOf)
  geoEntities: GeoEntity[]

  @OneToMany(() => SampleGeoEntity, (sampleGeoEntity) => sampleGeoEntity.geoEntity)
  sampleGeoEntities: SampleGeoEntity[]
}
