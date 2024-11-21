package io.edurt.datacap.plugin.solr

import com.google.inject.multibindings.Multibinder
import io.edurt.datacap.spi.AbstractPluginModule
import io.edurt.datacap.spi.PluginService
import io.edurt.datacap.spi.PluginModule
import io.edurt.datacap.spi.PluginType

class SolrModule : AbstractPluginModule(), PluginModule
{
    override fun getType(): PluginType
    {
        return PluginType.JDBC
    }

    override fun get(): AbstractPluginModule
    {
        return this
    }

    override fun configure()
    {
        Multibinder.newSetBinder(binder(), _root_ide_package_.io.edurt.datacap.spi.PluginService::class.java)
            .addBinding()
            .to(SolrPlugin::class.java)
    }
}
