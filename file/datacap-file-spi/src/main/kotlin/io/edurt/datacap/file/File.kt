package io.edurt.datacap.file

import io.edurt.datacap.file.model.FileRequest
import io.edurt.datacap.file.model.FileResponse

interface File
{
    fun name(): String
    {
        return this.javaClass
            .simpleName
            .removeSuffix("File")
    }

    fun description(): String
    {
        return "Integrate ${name()} file"
    }

    fun writer(request: FileRequest): FileResponse

    fun reader(request: FileRequest): FileResponse
}