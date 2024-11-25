package io.edurt.datacap.server.controller.admin;

import io.edurt.datacap.common.response.CommonResponse;
import io.edurt.datacap.server.controller.BaseController;
import io.edurt.datacap.service.entity.MenuEntity;
import io.edurt.datacap.service.repository.admin.MenuRepository;
import io.edurt.datacap.service.service.MenuService;
import io.edurt.datacap.service.validation.ValidationGroup;
import org.apache.commons.lang3.StringUtils;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping(value = "/api/v1/menu")
public class MenuController
        extends BaseController<MenuEntity>
{
    private final MenuRepository repository;
    private final MenuService service;

    public MenuController(MenuRepository repository, MenuService service)
    {
        super(repository, service);
        this.repository = repository;
        this.service = service;
    }

    @RequestMapping(method = {RequestMethod.POST, RequestMethod.PUT})
    public CommonResponse<MenuEntity> saveOrUpdate(@RequestBody @Validated(ValidationGroup.Crud.Create.class) MenuEntity configure)
    {
        if (StringUtils.isEmpty(configure.getCode())) {
            configure.setCode(UUID.randomUUID().toString());
        }
        return this.service.saveOrUpdate(repository, configure);
    }
}
