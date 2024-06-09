package io.edurt.datacap.spi.adapter;

import edu.umd.cs.findbugs.annotations.SuppressFBWarnings;
import io.edurt.datacap.spi.connection.Connection;
import io.edurt.datacap.spi.model.Response;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@SuppressFBWarnings(value = {"RCN_REDUNDANT_NULLCHECK_WOULD_HAVE_BEEN_A_NPE"},
        justification = "I prefer to suppress these FindBugs warnings")
public class HttpAdapter
        implements Adapter
{
    protected Connection connection;

    public HttpAdapter(Connection connection)
    {
        this.connection = connection;
    }

    @Override
    public Response handlerExecute(String content)
    {
        return null;
    }
}
