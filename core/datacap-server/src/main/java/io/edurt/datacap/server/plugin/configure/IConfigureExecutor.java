package io.edurt.datacap.server.plugin.configure;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class IConfigureExecutor
{
    private String executor;
    private String type;
    private List<IConfigureExecutorField> fields;
}