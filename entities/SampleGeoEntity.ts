import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { GeoEntity } from "./GeoEntity"
import { Sample } from "./Sample"

@Index("sample_geo_entity_audit_id_key", ["auditId"], { unique: true })
@Index("sample_geo_entity_pkey", ["geoEntityId", "sampleId"], { unique: true })
@Entity("sample_geo_entity", { schema: "public" })
export class SampleGeoEntity {
  @Column("integer", { primary: true, name: "sample_id" })
  sampleId: number

  @Column("integer", { primary: true, name: "geo_entity_id" })
  geoEntityId: number

  @Column("text", { name: "ref_datum", nullable: true })
  refDatum: string | null

  @Column("text", { name: "ref_unit", nullable: true })
  refUnit: string | null

  @Column("numeric", { name: "ref_distance", nullable: true })
  refDistance: string | null

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @ManyToOne(() => GeoEntity, (geoEntity) => geoEntity.sampleGeoEntities)
  @JoinColumn([{ name: "geo_entity_id", referencedColumnName: "id" }])
  geoEntity: GeoEntity

  @ManyToOne(() => Sample, (sample) => sample.sampleGeoEntities, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "sample_id", referencedColumnName: "id" }])
  sample: Sample
}
