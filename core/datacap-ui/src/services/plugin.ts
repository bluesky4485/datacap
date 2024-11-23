import { ResponseModel } from '@/model/response'
import { HttpUtils } from '@/utils/http'

const DEFAULT_PATH = '/api/v1/plugin'

class PluginService
{
    getPlugins(): Promise<ResponseModel>
    {
        return new HttpUtils().get(`${ DEFAULT_PATH }`)
    }

    install(configure: { name: string, url: string }): Promise<ResponseModel>
    {
        return new HttpUtils().post(`${ DEFAULT_PATH }/install`, configure)
    }
}

export default new PluginService()
