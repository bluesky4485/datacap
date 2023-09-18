package io.edurt.datacap.service.entity.metadata;

import edu.umd.cs.findbugs.annotations.SuppressFBWarnings;
import io.edurt.datacap.service.entity.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import lombok.experimental.SuperBuilder;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Getter
@ToString
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "datacap_metadata_table")
@EntityListeners(AuditingEntityListener.class)
@SuppressFBWarnings(value = {"EI_EXPOSE_REP"})
public class TableEntity
        extends BaseEntity
{
    @Column(name = "description")
    private String description;

    @Column(name = "type")
    private String type;

    @Column(name = "engine")
    private String engine;

    @Column(name = "format")
    private String format;

    @Column(name = "in_rows")
    private String rows;

    @Column(name = "in_create_time")
    private String inCreateTime;

    @Column(name = "in_update_time")
    private String inUpdateTime;

    @Column(name = "collation")
    private String collation;

    @Column(name = "comment")
    private String comment;

    @ManyToOne
    @JoinTable(name = "datacap_metadata_table_database_relation",
            joinColumns = @JoinColumn(name = "table_id"),
            inverseJoinColumns = @JoinColumn(name = "database_id"))
    private DatabaseEntity database;
}
