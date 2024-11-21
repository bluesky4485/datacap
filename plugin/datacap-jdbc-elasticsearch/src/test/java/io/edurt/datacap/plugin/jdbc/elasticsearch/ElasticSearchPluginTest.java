package io.edurt.datacap.plugin.jdbc.elasticsearch;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.Key;
import com.google.inject.TypeLiteral;
import io.edurt.datacap.spi.PluginService;
import io.edurt.datacap.spi.model.Configure;
import org.junit.Before;
import org.junit.Test;

import java.util.Optional;
import java.util.Set;

public class ElasticSearchPluginTest
{
    private Injector injector;
    private Configure configure;

    @Before
    public void before()
    {
        injector = Guice.createInjector(new ElasticSearchPluginModule());
        configure = new Configure();
        configure.setHost("127.0.0.1");
        configure.setPort(9200);
    }

    @Test
    public void test()
    {
        Set<PluginService> plugins = injector.getInstance(Key.get(new TypeLiteral<Set<PluginService>>() {}));
        Optional<PluginService> pluginOptional = plugins.stream()
                .filter(v -> v.name().equalsIgnoreCase("ElasticSearch"))
                .findFirst();
        if (pluginOptional.isPresent()) {
            PluginService plugin = pluginOptional.get();
            plugin.connect(configure);
            System.out.println(plugin.execute("SHOW TABLES"));
            plugin.destroy();
        }
    }
}
