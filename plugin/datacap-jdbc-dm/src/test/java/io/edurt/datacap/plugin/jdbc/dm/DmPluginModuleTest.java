package io.edurt.datacap.plugin.jdbc.dm;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.Key;
import com.google.inject.TypeLiteral;
import io.edurt.datacap.spi.PluginService;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.Set;

public class DmPluginModuleTest
{
    private Injector injector;

    @Before
    public void before()
    {
        this.injector = Guice.createInjector(new DmPluginModule());
    }

    @Test
    public void test()
    {
        Set<PluginService> plugins = injector.getInstance(Key.get(new TypeLiteral<Set<PluginService>>() {}));
        Assert.assertTrue(plugins.size() > 0);
    }
}