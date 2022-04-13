import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { DataFile } from "./DataFile"

@Index("data_file_type_audit_id_key", ["auditId"], { unique: true })
@Index("data_file_type_pkey", ["id"], { unique: true })
@Entity("data_file_type", { schema: "public" })
export class DataFileType {
  @Column("text", { primary: true, name: "id" })
  id: string

  @Column("text", { name: "description", nullable: true })
  description: string | null

  @PrimaryGeneratedColumn({ type: "bigint", name: "audit_id", unique: true })
  auditId: string

  @OneToMany(() => DataFile, (dataFile) => dataFile.type)
  dataFiles: DataFile[]
}
