package io.edurt.datacap.file.txt

import com.google.common.base.Preconditions.checkArgument
import com.google.common.base.Preconditions.checkState
import io.edurt.datacap.common.utils.DateUtils
import io.edurt.datacap.file.File
import io.edurt.datacap.file.FileConvert
import io.edurt.datacap.file.model.FileRequest
import io.edurt.datacap.file.model.FileResponse
import org.apache.commons.io.FileUtils
import org.apache.commons.lang3.ObjectUtils.isNotEmpty
import org.slf4j.LoggerFactory.getLogger

class TxtFile : File
{
    private val log = getLogger(this::class.java)

    override fun writer(request: FileRequest): FileResponse
    {
        val response = FileResponse()
        try
        {
            checkArgument(isNotEmpty(request.delimiter), "Delimiter must not be empty")

            log.info("${name()} writer origin path [ ${request.path} ]")
            log.info("${name()} writer start time [ ${DateUtils.now()} ]")
            val file = FileConvert.formatFile(request, name())
            log.info("${name()} writer file absolute path [ ${file.absolutePath} ]")

            request.delimiter
                ?.let { delimiter ->
                    log.info("${name()} writer file headers start")
                    request.headers
                        .let { headers ->
                            FileUtils.writeStringToFile(file, headers.joinToString(separator = delimiter), Charsets.UTF_8)
                        }
                    log.info("${name()} writer file headers end")

                    log.info("${name()} writer file columns start")
                    request.columns
                        .forEach {
                            FileUtils.writeStringToFile(file, "\n", Charsets.UTF_8, true)
                            when (it)
                            {
                                is List<*> -> FileUtils.writeStringToFile(file, it.joinToString(separator = delimiter), Charsets.UTF_8, true)
                                else -> FileUtils.writeStringToFile(file, it.toString(), Charsets.UTF_8, true)
                            }
                        }
                    log.info("${name()} writer file columns end")
                }

            log.info("${name()} writer end time [ ${DateUtils.now()} ]")
            response.successful = true
        }
        catch (e: Exception)
        {
            response.successful = false
            response.message = e.message
        }
        return response
    }

    override fun reader(request: FileRequest): FileResponse
    {
        val response = FileResponse()
        try
        {
            checkArgument(isNotEmpty(request.delimiter), "Delimiter must not be empty")

            log.info("${name()} reader origin path [ ${request.path} ]")
            log.info("${name()} reader start time [ ${DateUtils.now()} ]")
            val file = FileConvert.formatFile(request, name())
            log.info("${name()} reader file absolute path [ ${file.absolutePath} ]")

            request.delimiter
                ?.let { delimiter ->
                    val lines = FileUtils.readLines(file, Charsets.UTF_8)

                    checkState(lines.isNotEmpty(), "The file is empty")
                    log.info("${name()} reader file headers start")
                    response.headers = lines.first()
                        .split(delimiter)
                    log.info("${name()} reader file headers end")

                    log.info("${name()} reader file columns start")
                    val columns = mutableListOf<Any>()
                    lines.drop(1)
                        .forEach {
                            columns.add(it.split(delimiter))
                        }
                    response.columns = columns
                    log.info("${name()} reader file columns end")
                }

            log.info("${name()} reader end time [ ${DateUtils.now()} ]")
            response.successful = true
        }
        catch (e: Exception)
        {
            response.successful = false
            response.message = e.message
        }
        return response
    }
}