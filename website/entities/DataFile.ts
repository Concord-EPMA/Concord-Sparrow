import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import { DataFileType } from "./DataFileType"
import { DataFileLink } from "./DataFileLink"

@Index("data_file_audit_id_key", ["auditId"], { unique: true })
@Index("data_file_pkey", ["fileHash"], { unique: true })
@Index("data_file_file_path_key", ["filePath"], { unique: true })
@Entity("data_file", { schema: "public" })
export class DataFile {
  @Column("uuid", { primary: true, name: "file_hash" })
  fileHash: string

  @Column("timestamp without time zone", { name: "file_mtime", nullable: true })
  fileMtime: Date | null

  @Column("text", { name: "basename", nullable: true })
  basename: string | null

  @Column("text", { name: "file_path", nullable: true, unique: true })
  filePath: string | null

  @Column("text", { name: "source_url", nullable: true })
  sourceUrl: string | null

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @ManyToOne(() => DataFileType, (dataFileType) => dataFileType.dataFiles)
  @JoinColumn([{ name: "type_id", referencedColumnName: "id" }])
  type: DataFileType

  @OneToMany(() => DataFileLink, (dataFileLink) => dataFileLink.fileHash2)
  dataFileLinks: DataFileLink[]
}
