import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Publication } from "./Publication"
import { Sample } from "./Sample"

@Index("sample_publication_audit_id_key", ["auditId"], { unique: true })
@Index("sample_publication_pkey", ["publicationId", "sampleId"], {
  unique: true,
})
@Entity("sample_publication", { schema: "public" })
export class SamplePublication {
  @Column("integer", { primary: true, name: "sample_id" })
  sampleId: number

  @Column("integer", { primary: true, name: "publication_id" })
  publicationId: number

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @ManyToOne(() => Publication, (publication) => publication.samplePublications, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "publication_id", referencedColumnName: "id" }])
  publication: Publication

  @ManyToOne(() => Sample, (sample) => sample.samplePublications, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "sample_id", referencedColumnName: "id" }])
  sample: Sample
}
