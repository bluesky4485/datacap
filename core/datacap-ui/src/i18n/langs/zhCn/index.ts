export default {
    state: {
        common: {
            create: '已创建',
            running: '运行中',
            success: '运行成功',
            failure: '运行失败',
            stop: '已停止',
            timeout: '运行超时',
            queue: '排队中'
        }
    },
    query: {
        common: {
            execute: '执行',
            executeSelection: '执行 (选中)',
            connectionTime: '连接耗时',
            executionTime: '执行耗时',
            format: '格式化',
            help: '帮助',
            showSql: '显示 SQL',
            quoteRecord: '引用记录',
            historyData: '历史数据',
            historyDataInfo: '[ $VALUE ] 历史数据'
        },
        tip: {
            pageShow: '打开 / 关闭分页',
            smallTips: '小技巧：按住键盘 Shift 鼠标选择数据行数会自动复制选中行内容',
            notPresetToken: '暂无可用的 Token，请到个人中心配置 Token'
        }
    },
    source: {
        common: {
            list: '数据源列表',
            modify: '修改数据源 [ $NAME ]',
            source: '数据源',
            configure: '配置',
            authorization: '授权',
            advanced: '高级',
            custom: '自定义',
            host: '主机地址',
            port: '端口',
            name: '名称',
            username: '用户名',
            password: '密码',
            database: '数据库',
            ssl: 'SSL',
            file: '文件',
            create: '创建数据源',
            delete: '删除数据源 [ $NAME ]',
            syncMetadata: '同步元数据',
            syncHistory: '同步历史',
            manager: '数据管理',
            info: '基本信息',
            notSpecified: '未指定',
            notUpdated: '未更新',
            engine: '引擎',
            notSpecifiedEngine: '未指定引擎',
            collation: '排序规则',
            notSpecifiedCollation: '未指定排序规则',
            dataInfo: '数据信息',
            totalRows: '总行数',
            format: '格式',
            notSpecifiedFormat: '未指定格式',
            avgRowLength: '平均行长度',
            dataSize: '数据大小',
            indexSize: '索引大小',
            notSpecifiedIndex: '未指定索引',
            autoIncrement: '自增列',
            notSpecifiedPrimaryKey: '未指定主键',
            resetAutoIncrement: '重置自增列',
            resetTo: '重置为',
            comment: '表注释',
            menuNew: '新建',
            menuNewTable: '新建表',
            tableName: '表名',
            columnName: '列名',
            columnType: '类型',
            columnLength: '长度',
            columnDefaultValue: '默认值',
            columnPrimaryKey: '主键',
            columnAutoIncrement: '自增列',
            columnIsNullable: '允许为空',
            columnComment: '列注释',
            newColumn: '新建列',
            menuExport: '导出',
            exportData: '导出数据',
            exportDataTable: '导出 [ $VALUE ] 表数据',
            exportDataFormat: '导出格式',
            exportDataCount: '导出条数',
            downloadPath: '下载路径',
            downloadFile: '下载文件',
            truncateTable: '截断表',
            truncateTableInfo: '截断 [ $VALUE ] 表',
            dropTable: '删除表',
            dropTableInfo: '删除 [ $VALUE ] 表',
            structure: '结构',
            isNullable: '允许为空',
            defaultValue: '默认值',
            extra: '额外信息',
            changeColumn: '修改列',
            changeColumnInfo: '修改 [ $VALUE ] 列',
            dropColumn: '删除列',
            dropColumnInfo: '删除 [ $VALUE ] 列',
            tableData: '表数据',
            firstPage: '首页',
            previousPage: '上一页',
            nextPage: '下一页',
            lastPage: '尾页',
            jumpPage: '跳转至',
            showPageSize: '每页显示',
            records: '条记录',
            addRows: '添加行',
            previewPendingChanges: '预览未保存的变更',
            previewDML: '预览 DML 语句',
            copyRows: '复制行',
            deleteRows: '删除行',
            visibleColumn: '可见列',
            filterData: '筛选数据',
            filterCondition: '筛选条件',
            addFilter: '添加筛选条件',
            statement: 'SQL 语句',
            erDiagram: 'ER 图形'
        },
        tip: {
            selectSource: '请选择数据源',
            deleteSourceSuccess: '删除数据源 [ $NAME ] 成功',
            deleteAlert1: '您正在删除数据源。此操作将永久删除所有与该数据源相关的数据和配置。请务必在继续操作之前确认您的操作。',
            deleteAlert2: '警告：执行此操作将不可逆。所有与该数据源相关的数据和配置都会被永久删除。',
            deleteAlert3: '要确认，请在下面的框中键入 [ $NAME ]',
            syncMetadata1: '同步元数据将在后台运行',
            syncMetadata2: '同步元数据将会覆盖当前的元数据，可能会导致数据丢失，是否继续？',
            syncMetadata3: '要确认，请在下面的框中键入 [ $NAME ]',
            syncMetadata4: '任务 [ $NAME ] 已开始',
            selectDatabase: '请选择数据库',
            notSelectedNode: '请在左侧选择节点方可展示结果',
            resetAutoIncrementSuccess: '重置自增列为 [ $VALUE ] 成功',
            createTableSuccess: '创建表 [ $VALUE ] 成功',
            createColumnSuccess: '创建列 [ $VALUE ] 成功',
            truncateTableSuccess: '截断表 [ $VALUE ] 成功',
            truncateTable1: '您即将执行截断表操作。这将会删除表中的所有数据。您确定要继续吗？',
            truncateTable2: '请注意，截断表操作是不可逆的。执行此操作将永久删除表中的所有数据。请确保您已经备份了重要数据。',
            truncateTable3: '执行截断表操作将立即删除表中的所有数据，这可能会对正在进行的工作造成影响。请确保您已经保存了需要的数据，并且其他用户不会受到影响。',
            truncateTable4: '我们建议您首先在非生产环境中测试截断表操作，以确保它不会对您的生产数据造成意外的影响。',
            truncateTable5: '如果您对执行截断表操作有任何疑问或需要帮助，请联系您的数据库管理员或技术支持团队。',
            dropTableSuccess: '删除表 [ $VALUE ] 成功',
            dropTable1: '您即将执行删除表的操作。此操作将永久删除表及其所有数据。您确定要继续吗？',
            dropTable2: '请注意，删除表操作是不可逆的。执行此操作将永久删除表及其所有数据。请确保您已经备份了重要数据。',
            dropTable3: '执行删除表操作将立即删除表及其所有数据，这可能会对正在进行的工作造成影响。请确保您已经保存了需要的数据，并且其他用户不会受到影响。',
            dropTable4: '我们建议您首先在非生产环境中测试删除表操作，以确保它不会对您的生产数据造成意外的影响。',
            dropTable5: '如果您对执行删除表操作有任何疑问或需要帮助，请联系您的数据库管理员或技术支持团队。',
            changeColumnSuccess: '修改列 [ $VALUE ] 成功',
            dropColumnSuccess: '删除列 [ $VALUE ] 成功',
            dropColumn1: '您即将执行删除列的操作。此操作将永久删除列及其所有数据。您确定要继续吗？',
            dropColumn2: '请注意，删除列操作是不可逆的。执行此操作将永久删除列及其所有数据。请确保您已经备份了重要数据。',
            dropColumn3: '执行删除列操作将立即删除列及其所有数据，这可能会对正在进行的工作造成影响。请确保您已经保存了需要的数据，并且其他用户不会受到影响。',
            dropColumn4: '我们建议您首先在非生产环境中测试删除列操作，以确保它不会对您的生产数据造成意外的影响。',
            dropColumn5: '如果您对执行删除列操作有任何疑问或需要帮助，请联系您的数据库管理员或技术支持团队。',
            updateSuccess: '更新成功',
            deleteSuccess: '删除成功'
        }
    },
    grid: {
        selectAll: '(选择全部)',
        selectAllSearchResults: '(选择全部查询结果)',
        searchOoo: '搜索...',
        blanks: '(Blanks)',
        noMatches: '未找到',
        filterOoo: '过滤...',
        equals: '等于',
        notEqual: '不等于',
        blank: 'Blank',
        notBlank: 'Not blank',
        empty: 'Choose One',
        lessThan: '小于',
        greaterThan: '大于',
        lessThanOrEqual: '小于或等于',
        greaterThanOrEqual: '大于或等于',
        inRange: 'In range',
        inRangeStart: 'from',
        inRangeEnd: 'to',
        contains: '包含',
        notContains: '不包含',
        startsWith: '以 ... 开始',
        endsWith: '以 ... 结束',
        dateFormatOoo: 'yyyy-mm-dd',
        andCondition: 'AND',
        orCondition: 'OR',
        applyFilter: '应用',
        resetFilter: '重置',
        clearFilter: '清空',
        cancelFilter: '取消',
        textFilter: 'Text Filter',
        numberFilter: 'Number Filter',
        dateFilter: 'Date Filter',
        setFilter: 'Set Filter',
        columns: 'Columns',
        filters: 'Filters',
        pivotMode: 'Pivot Mode',
        groups: 'Row Groups',
        rowGroupColumnsEmptyMessage: 'Drag here to set row groups',
        values: 'Values',
        valueColumnsEmptyMessage: 'Drag here to aggregate',
        pivots: 'Column Labels',
        pivotColumnsEmptyMessage: 'Drag here to set column labels',
        group: 'Group',
        rowDragRow: 'row',
        rowDragRows: 'rows',
        loadingOoo: 'Loading...',
        loadingError: 'ERR',
        noRowsToShow: 'No Rows To Show',
        enabled: 'Enabled',
        pinColumn: 'Pin Column',
        pinLeft: 'Pin Left',
        pinRight: 'Pin Right',
        noPin: 'No Pin',
        valueAggregation: 'Value Aggregation',
        autosizeThiscolumn: 'Autosize This Column',
        autosizeAllColumns: 'Autosize All Columns',
        groupBy: 'Group by',
        ungroupBy: 'Un-Group by',
        addToValues: 'Add ${variable} to values',
        removeFromValues: 'Remove ${variable} from values',
        addToLabels: 'Add ${variable} to labels',
        removeFromLabels: 'Remove ${variable} from labels',
        resetColumns: 'Reset Columns',
        expandAll: 'Expand All',
        collapseAll: 'Close All',
        copy: 'Copy',
        ctrlC: 'Ctrl+C',
        copyWithHeaders: 'Copy With Headers',
        copyWithGroupHeaders: 'Copy with Group Headers',
        paste: 'Paste',
        ctrlV: 'Ctrl+V',
        export: 'Export',
        csvExport: 'CSV Export',
        excelExport: 'Excel Export',
        sum: 'Sum',
        min: 'Min',
        max: 'Max',
        none: 'None',
        count: 'Count',
        avg: 'Average',
        filteredRows: 'Filtered',
        selectedRows: 'Selected',
        totalRows: '总行数',
        totalAndFilteredRows: 'Rows',
        more: '更多',
        to: '-',
        of: '至',
        page: '当前页',
        nextPage: '下一页',
        lastPage: '最后一页',
        firstPage: '第一页',
        previousPage: '上一页',
        pivotColumnGroupTotals: '总数',
        pivotChartAndPivotMode: 'Pivot Chart & Pivot Mode',
        pivotChart: 'Pivot Chart',
        chartRange: 'Chart Range',
        columnChart: 'Column',
        groupedColumn: 'Grouped',
        stackedColumn: 'Stacked',
        normalizedColumn: '100% Stacked',
        barChart: 'Bar',
        groupedBar: 'Grouped',
        stackedBar: 'Stacked',
        normalizedBar: '100% Stacked',
        pieChart: 'Pie',
        pie: 'Pie',
        doughnut: 'Doughnut',
        line: 'Line',
        xyChart: 'X Y (Scatter)',
        scatter: 'Scatter',
        bubble: 'Bubble',
        areaChart: 'Area',
        area: 'Area',
        stackedArea: 'Stacked',
        normalizedArea: '100% Stacked',
        histogramChart: 'Histogram',
        histogramFrequency: 'Frequency',
        combinationChart: 'Combination',
        columnLineCombo: 'Column & Line',
        AreaColumnCombo: 'Area & Column',
        pivotChartTitle: 'Pivot Chart',
        rangeChartTitle: 'Range Chart',
        settings: 'Settings',
        data: 'Data',
        format: 'Format',
        categories: 'Categories',
        defaultCategory: '(None)',
        series: 'Series',
        xyValues: 'X Y Values',
        paired: 'Paired Mode',
        axis: 'Axis',
        navigator: 'Navigator',
        color: 'Color',
        thickness: 'Thickness',
        xType: 'X Type',
        automatic: 'Automatic',
        category: 'Category',
        number: 'Number',
        time: 'Time',
        autoRotate: 'Auto Rotate',
        xRotation: 'X Rotation',
        yRotation: 'Y Rotation',
        ticks: 'Ticks',
        width: 'Width',
        height: 'Height',
        length: 'Length',
        padding: 'Padding',
        spacing: 'Spacing',
        chart: 'Chart',
        title: 'Title',
        titlePlaceholder: 'Chart title - double click to edit',
        background: 'Background',
        font: 'Font',
        top: 'Top',
        right: 'Right',
        bottom: 'Bottom',
        left: 'Left',
        labels: 'Labels',
        size: 'Size',
        minSize: 'Minimum Size',
        maxSize: 'Maximum Size',
        legend: 'Legend',
        position: 'Position',
        markerSize: 'Marker Size',
        markerStroke: 'Marker Stroke',
        markerPadding: 'Marker Padding',
        itemSpacing: 'Item Spacing',
        itemPaddingX: 'Item Padding X',
        itemPaddingY: 'Item Padding Y',
        layoutHorizontalSpacing: 'Horizontal Spacing',
        layoutVerticalSpacing: 'Vertical Spacing',
        strokeWidth: 'Stroke Width',
        lineDash: 'Line Dash',
        offset: 'Offset',
        offsets: 'Offsets',
        tooltips: 'Tooltips',
        callout: 'Callout',
        markers: 'Markers',
        shadow: 'Shadow',
        blur: 'Blur',
        xOffset: 'X Offset',
        yOffset: 'Y Offset',
        lineWidth: 'Line Width',
        normal: 'Normal',
        bold: 'Bold',
        italic: 'Italic',
        boldItalic: 'Bold Italic',
        predefined: 'Predefined',
        fillOpacity: 'Fill Opacity',
        strokeOpacity: 'Line Opacity',
        histogramBinCount: 'Bin count',
        columnGroup: 'Column',
        barGroup: 'Bar',
        pieGroup: 'Pie',
        lineGroup: 'Line',
        scatterGroup: 'X Y (Scatter)',
        areaGroup: 'Area',
        histogramGroup: 'Histogram',
        combinationGroup: 'Combination',
        groupedColumnTooltip: 'Grouped',
        stackedColumnTooltip: 'Stacked',
        normalizedColumnTooltip: '100% Stacked',
        groupedBarTooltip: 'Grouped',
        stackedBarTooltip: 'Stacked',
        normalizedBarTooltip: '100% Stacked',
        pieTooltip: 'Pie',
        doughnutTooltip: 'Doughnut',
        lineTooltip: 'Line',
        groupedAreaTooltip: 'Area',
        stackedAreaTooltip: 'Stacked',
        normalizedAreaTooltip: '100% Stacked',
        scatterTooltip: 'Scatter',
        bubbleTooltip: 'Bubble',
        histogramTooltip: 'Histogram',
        columnLineComboTooltip: 'Column & Line',
        areaColumnComboTooltip: 'Area & Column',
        customComboTooltip: 'Custom Combination',
        noDataToChart: 'No data available to be charted.',
        pivotChartRequiresPivotMode: 'Pivot Chart requires Pivot Mode enabled.',
        chartSettingsToolbarTooltip: 'Menu',
        chartLinkToolbarTooltip: 'Linked to Grid',
        chartUnlinkToolbarTooltip: 'Unlinked from Grid',
        chartDownloadToolbarTooltip: 'Download Chart',
        seriesChartType: 'Series Chart Type',
        seriesType: 'Series Type',
        secondaryAxis: 'Secondary Axis',
        ariaChecked: 'checked',
        ariaColumn: 'Column',
        ariaColumnGroup: 'Column Group',
        ariaColumnList: 'Column List',
        ariaColumnSelectAll: 'Toggle Select All Columns',
        ariaDateFilterInput: 'Date Filter Input',
        ariaDefaultListName: 'List',
        ariaFilterColumnsInput: 'Filter Columns Input',
        ariaFilterFromValue: 'Filter from value',
        ariaFilterInput: 'Filter Input',
        ariaFilterList: 'Filter List',
        ariaFilterToValue: 'Filter to value',
        ariaFilterValue: 'Filter Value',
        ariaFilteringOperator: 'Filtering Operator',
        ariaHidden: 'hidden',
        ariaIndeterminate: 'indeterminate',
        ariaInputEditor: 'Input Editor',
        ariaMenuColumn: 'Press CTRL ENTER to open column menu.',
        ariaRowDeselect: 'Press SPACE to deselect this row',
        ariaRowSelectAll: 'Press Space to toggle all rows selection',
        ariaRowToggleSelection: 'Press Space to toggle row selection',
        ariaRowSelect: 'Press SPACE to select this row',
        ariaSearch: 'Search',
        ariaSortableColumn: 'Press ENTER to sort',
        ariaToggleVisibility: 'Press SPACE to toggle visibility',
        ariaUnchecked: 'unchecked',
        ariaVisible: 'visible',
        ariaSearchFilterValues: 'Search filter values',
        ariaRowGroupDropZonePanelLabel: 'Row Groups',
        ariaValuesDropZonePanelLabel: 'Values',
        ariaPivotDropZonePanelLabel: 'Column Labels',
        ariaDropZoneColumnComponentDescription: 'Press DELETE to remove',
        ariaDropZoneColumnValueItemDescription: 'Press ENTER to change the aggregation type',
        ariaDropZoneColumnGroupItemDescription: 'Press ENTER to sort',
        ariaDropZoneColumnComponentAggFuncSeperator: ' of ',
        ariaDropZoneColumnComponentSortAscending: 'ascending',
        ariaDropZoneColumnComponentSortDescending: 'descending',
        ariaLabelColumnMenu: 'Column Menu',
        ariaLabelCellEditor: 'Cell Editor',
        ariaLabelDialog: 'Dialog',
        ariaLabelSelectField: 'Select Field',
        ariaLabelTooltip: 'Tooltip',
        ariaLabelContextMenu: 'Context Menu',
        ariaLabelSubMenu: 'SubMenu',
        ariaLabelAggregationFunction: 'Aggregation Function',
        thousandSeparator: ',',
        decimalSeparator: '.'
    },
    heatmap: {
        common: {
            jan: '一月',
            feb: '二月',
            mar: '三月',
            apr: '四月',
            mai: '五月',
            jun: '六月',
            jul: '七月',
            aug: '八月',
            sep: '九月',
            okt: '十月',
            nov: '十一月',
            dez: '十二月',
            so: '周日',
            mo: '周一',
            di: '周二',
            mi: '周三',
            do: '周四',
            fr: '周五',
            sa: '周六',
            am: '上午',
            less: '更少',
            more: '更多',
            query: '查询'
        }
    },
    region: {
        common: {
            selectLanguage: '选择语言',
            asia: {
                default: '亚洲',
                chineseSimple: '简体中文'
            },
            northAmerica: {
                default: '北美洲',
                english: '英语'
            }
        }
    },
    template: {
        common: {
            list: '模板列表',
            create: '创建模板',
            modify: '修改模板 [ $NAME ]'
        }
    },
    menu: {
        common: {
            list: '菜单列表',
            create: '创建菜单',
            modify: '修改菜单 [ $NAME ]',
            parent: '父菜单',
            redirect: '重定向菜单',
            new: '新菜单',
            i18nKey: '国际化标识',
            icon: '图标'
        },
        tip: {
            selectType: '请选择类型',
            selectParent: '请选择父菜单',
            selectRedirect: '请选择重定向菜单'
        }
    },
    snippet: {
        common: {
            list: '片段列表',
            create: '创建片段',
            modify: '修改片段 [ $VALUE ]',
            delete: '删除片段',
            deleteInfo: '删除片段 [ $VALUE ]'
        },
        tip: {
            createSuccess: '片段 [ $VALUE ] 创建成功',
            deleteSuccess: '片段 [ $VALUE ] 删除成功',
            deleteAlert1: '您确定要删除此代码片段吗？此操作无法撤销。',
            deleteAlert2: '删除代码片段后，与之相关的数据将被永久删除。',
            deleteAlert3: '删除代码片段后，它将无法恢复。',
            deleteAlert4: '要确认，请在下面的框中键入 [ $VALUE ]'
        },
        placeholder: {
            name: '请输入片段名称',
        },
        validator: {
            name: {
                required: '片段名称不能为空',
                match: '输入的片段名称不正确，请输入 [$VALUE]'
            }
        }
    },
    report: {
        common: {
            list: '报表列表',
            view: '查看报表 [ $VALUE ]',
            modify: '修改报表',
            delete: '删除报表',
            deleteInfo: '删除报表 [ $VALUE ]'
        },
        tip: {
            deleteSuccess: '删除报表 [ $VALUE ] 成功',
            deleteAlert1: '您正在删除报表。此操作将永久删除报表。在继续操作之前，请务必确认您的操作。',
            deleteAlert2: '警告：此操作无法撤销。',
            deleteAlert3: '要确认，请在下面的框中键入 [ $VALUE ]',
            publishSuccess: '报表 [ $VALUE ] 发布成功'
        },
        validator: {
            name: '请输入报表名称'
        }
    },
    pipeline: {
        common: {
            list: '流水线列表',
            logger: '流水线日志',
            loggerInfo: '流水线 [ $VALUE ] 日志',
            delete: '删除流水线',
            deleteInfo: '删除流水线 [ $VALUE ]',
            stop: '停止流水线',
            stopInfo: '停止流水线 [ $VALUE ]',
            flow: '流水线视图',
            flowInfo: '流水线 [ $VALUE ] 视图',
            create: '创建流水线',
            input: '输入源',
            output: '输出源',
            resetTransform: '重置变换'
        },
        validator: {
            from: '请配置输入源信息',
            to: '请配置输出源信息',
            edge: '请连接输入和输出源'
        },
        tip: {
            deleteSuccess: '删除流水线 [ $VALUE ] 成功',
            deleteAlert1: '您正在删除流水线。此操作将永久删除流水线。在继续操作之前，请务必确认您的操作。',
            deleteAlert2: '警告：此操作无法撤销。',
            deleteAlert3: '要确认，请在下面的框中键入 [ $VALUE ]',
            stopAlert1: '您正在停止流水线。此操作将永久停止流水线。在继续操作之前，请务必确认您的操作。',
            stopAlert2: '警告：此操作无法撤销。',
            stopAlert3: '要确认，请在下面的框中键入 [ $VALUE ]',
            stopSuccess: '流水线 [ $VALUE ] 停止成功',
            publishSuccess: '流水线 [ $VALUE ] 发布成功'
        }
    },
    common: {
        home: '首页',
        dashboard: '仪表盘',
        query: '查询',
        dataset: '数据集',
        admin: '管理员',
        system: '系统设置',
        source: '数据源',
        snippet: '代码片段',
        history: '查询历史',
        pipeline: '流水线',
        report: '数据报表',
        function: '函数',
        template: '模板',
        menu: '菜单',
        schedule: '调度',
        authority: '权限',
        user: '用户',
        pageNotFound: '哎呀！页面未找到！',
        pageNotFoundTip: '您要查找的页面，似乎不存在或可能已被删除。',
        pageNotAuthorized: '哎呀！页面未授权！',
        pageNotAuthorizedTip: '抱歉，您没有权限访问该页面。',
        backToHome: '返回首页',
        backToSignin: '返回登录',
        profile: '个人中心',
        id: 'ID',
        username: '用户名',
        createTime: '创建时间',
        updateTime: '更新时间',
        action: '操作',
        column: '列',
        description: '描述',
        name: '名称',
        code: '编码',
        editData: '编辑数据',
        successfully: '成功',
        expression: '表达式',
        active: '激活状态',
        type: '类型',
        elapsed: '执行时间',
        state: '状态',
        result: '结果',
        noData: '没有数据可以展示',
        invalidParam: '参数无效，请检查参数是否填写正确',
        role: '权限',
        cancel: '取消',
        scheduler: '调度器',
        executor: '执行器',
        configure: '配置',
        remove: '移除',
        publish: '发布',
        save: '保存',
        value: '值',
        alias: '别名',
        sort: '排序',
        count: '总数',
        content: '内容',
        feedback: '反馈',
        createEditor: '创建编辑器',
        device: '设备',
        client: '客户端',
        ip: 'IP 地址',
        ua: 'User Agent',
        loginTime: '登录时间',
        submit: '提交',
        create: '创建',
        plugin: '插件',
        group: '分组',
        sorted: '排序',
        url: '地址',
        pageNotNetwork: '哎呀！网络未连接！',
        protocol: '协议',
        host: '主机',
        port: '端口',
        public: '公开',
        version: '版本',
        available: '可用',
        test: '测试',
        field: '属性',
        upload: '上传',
        deleteData: '删除数据',
        apply: '应用',
        length: '长度',
        preview: '预览',
        refresh: '刷新',
        endTime: '结束时间',
        from: '来源',
        adhoc: '即席查询',
        error: '错误',
        realtime: '实时',
        to: '目标',
        work: '工作目录',
        chat: '聊天室',
        avatar: '头像',
        file: '文件',
        backTo: '返回',
        database: '数据库',
        table: '表',
        clear: '清空',
        reset: '重置',
        cropper: '裁剪',
        tip: {
            pageNotNetwork: '哎呀！无法连接到网络，请检查网络是否正常！'
        }
    },
    user: {
        common: {
            username: '用户名',
            password: '密码',
            confirmPassword: '确认密码',
            signin: '登录',
            signup: '注册',
            captcha: '验证码',
            sourceCount: '数据源',
            queryCount: '查询',
            signout: '退出登录',
            list: '用户列表',
            assignAuthority: '分配权限',
            assignRole: '分配路由',
            setting: '设置',
            info: '贡献信息',
            profile: '用户资料',
            contribution: '贡献',
            radar7Days: '7天内数据源雷达图',
            createTime: '创建时间',
            avatar: '头像',
            log: '登录日志',
            editor: '编辑器',
            fontSize: '字体大小',
            theme: '主题',
            assistant: 'AI 助手',
            host: '主机地址',
            token: '令牌',
            timeout: '超时时间',
            contentCount: '上下文数量',
            modifyUsername: '修改用户名',
            oldUsername: '旧用户名',
            newUsername: '新用户名',
            modifyPassword: '修改密码',
            oldPassword: '旧密码',
            newPassword: '新密码',
            create: '创建用户',
            edit: '编辑用户 [ $VALUE ]'
        },
        auth: {
            signinTip: '请输入用户名和密码登录',
            signupTip: '请输入用户名和密码注册',
            usernameTip: '请输入用户名',
            passwordTip: '请输入密码',
            confirmPasswordTip: '请输入确认密码',
            captchaTip: '请输入验证码',
            captchaIsNumberTip: '验证码必须为数字',
            notUserTip: '没有账号?',
            hasUserTip: '已有账号?',
            passwordNotMatchTip: '密码不匹配',
            usernameSizeTip: '用户名必须在3-20个字符之间',
            passwordSizeTip: '密码必须在6-20个字符之间',
            captchaSizeTip: '验证码必须在1-6个字符之间'
        },
        tip: {
            sourceCountTip: '创建数据源总数统计',
            queryCountTip: '访问查询总数统计',
            assignRoleSuccess: '分配路由成功',
            info: '这里主要展示的是一些个人的贡献信息，包含了一些查询，数据源等信息',
            contribution: '这里的贡献度是根据数据源的查询次数进行计算，数据源的查询次数越多，贡献度越高。',
            radar7Days: '这里的数据是指 7 天内的数据源使用次数情况',
            profile: '这里主要展示的是一些个人的基本信息，包含了一些头像，昵称等信息',
            username: '用户名是唯一的，当前不支持修改用户名',
            createTime: '用户的创建时间，默认为用户的首次注册时间，由系统生成',
            avatar: '默认为系统头像，用户可以自定义上传自己的头像',
            log: '这里主要展示的是一些登录日志信息，包含了登录时间、IP地址等信息',
            editor: '这里主要展示的是一些编辑器信息，包含了编辑器的一些配置信息，如代码高亮、主题等信息',
            fontSize: '这里可以修改一些文字的大小，默认为 12',
            theme: '这里可以修改一些主题，包含各种主题样式',
            assistant: '这里主要展示的是一些 AI 助手配置信息，包含了一些配置信息，如运营商，代理等信息',
            host: '这里主要用于配置 AI 助手的主机地址',
            token: '这里主要用于配置 AI 助手的令牌',
            timeout: '这里主要用于配置 AI 助手的超时时间',
            contentCount: '这里主要用于配置 AI 助手的上下文数量',
            modifyUsername: '这里主要用于修改用户的用户名',
            oldUsername: '这主要用于修改用户的旧用户名',
            newUsername: '这主要用于修改用户的新用户名',
            password: '密码是用户登录的密码',
            changeUsernameSuccessfully: '修改用户名成功，请重新登录',
            modifyPassword: '这里主要用于修改用户的密码',
            changePasswordSuccessfully: '修改密码成功，请重新登录',
            oldPassword: '这里主要用于修改用户的旧密码',
            newPassword: '这里主要用于修改用户的新密码',
            confirmPassword: '这里主要用于确认用户的新密码'
        },
        validate: {
            newPassword: '请输入新密码',
            confirmPassword: '请输入确认密码',
            passwordSize: '密码必须在6-20个字符之间',
            passwordNotMatch: '新密码与确认密码不匹配',
            username: '请输入用户名',
            usernameSize: '用户名必须在3-20个字符之间'
        }
    },
    role: {
        common: {
            list: '权限列表',
            create: '创建路由',
            edit: '编辑路由 [ $NAME ]',
            name: '路由名称',
            description: '路由描述',
            assignRole: '分配路由 [ $NAME ]',
            assignMenu: '分配菜单 [ $NAME ]'
        },
        tip: {
            name: '请输入路由名称',
            description: '请输入路由描述'
        },
        validate: {
            nameSize: '路由名称必须在3-20个字符之间',
            descriptionSize: '路由描述必须在3-50个字符之间'
        }
    },
    schedule: {
        common: {
            list: '调度列表',
            history: '调度历史'
        }
    },
    dashboard: {
        common: {
            list: '仪表盘列表',
            delete: '删除仪表盘',
            create: '创建仪表盘',
            modify: '修改仪表盘',
            modifyInfo: '修改仪表盘 [ $VALUE ]',
            addReport: '添加图表'
        },
        tip: {
            deleteTip1: '您正在删除仪表板。此操作将永久删除仪表板。在继续操作之前，请务必确认您的操作。',
            deleteTip2: '警告：此操作无法撤消。 ',
            deleteTip3: '要确认，请在下面的框中键入 [ $NAME ]',
            publishSuccess: '仪表板 [ $VALUE ] 发布成功',
            notFound: '仪表板 [ $VALUE ] 不存在'
        }
    },
    function: {
        common: {
            list: '函数列表',
            keyword: '关键字',
            operator: '运算符',
            function: '函数',
            example: '示例',
            import: '导入数据',
            importFromUrl: '从 URL 导入',
            create: '创建函数',
            modify: '修改函数 [ $NAME ]'
        },
        tip: {
            selectPluginHolder: '请选择插件',
            selectTypeHolder: '请选择类型'
        }
    },
    dataset: {
        common: {
            list: '数据集列表',
            adhoc: '即席查询',
            showPageSize: '每页显示行数',
            totalRows: '总行数',
            totalSize: '总大小',
            dataPreview: '数据预览',
            dataColumn: '数据列',
            dataConfigure: '数据配置',
            dataLifeCycle: '数据生命周期',
            onlyPreviewCreate: '仅支持预览数据创建数据集',
            returnQuery: '返回查询',
            columnName: '列名',
            columnAlias: '列别名',
            columnType: '列类型',
            columnTypeString: '字符串',
            columnTypeNumber: '数字',
            columnTypeNumberSigned: '数字 (符号)',
            columnTypeBoolean: '布尔',
            columnTypeDateTime: '日期时间',
            columnDescription: '列描述',
            columnComment: '列注释',
            columnDefaultValue: '列默认值',
            columnIsNullable: '是否允许为空',
            columnLength: '列长度',
            columnIsOrderByKey: '排序键',
            columnIsPartitionKey: '分区键',
            columnIsPrimaryKey: '主键',
            columnIsSampling: '是否抽样',
            columnExpression: '表达式',
            columnMode: '列模式',
            columnModeMetric: '指标',
            columnModeDimension: '维度',
            columnModeGroup: '分组',
            columnModeFilter: '筛选器',
            columnSortNone: '无',
            columnOrderAsc: '升序',
            columnOrderDesc: '降序',
            create: '创建数据集',
            modify: '修改数据集',
            actuator: '执行器',
            syncMode: '同步模式',
            syncModeManual: '手动',
            syncModeTiming: '定时同步',
            syncModeOutSync: '不同步',
            rebuild: '重新构建',
            complete: '完成',
            failed: '失败',
            stateOfStarted: '已启动',
            stateOfMetadata: '元数据状态',
            stateOfMetadataStarted: '元数据已启动',
            stateOfCreateTable: '创建表状态',
            syncData: '同步数据',
            visual: '可视化',
            visualType: '可视化类型',
            visualTypeTable: '表格',
            visualTypeLine: '折线图',
            visualTypeBar: '柱状图',
            visualTypeArea: '面积图',
            visualTypePie: '饼图',
            visualTypeHistogram: '直方图',
            visualTypeWordCloud: '词云图',
            visualTypeScatter: '散点图',
            visualTypeRadar: '雷达图',
            visualTypeFunnel: '漏斗图',
            visualTypeGauge: '仪表盘图',
            visualTypeRose: '玫瑰图',
            visualConfigure: '可视化配置',
            visualConfigureNotSpecified: '暂无可用配置项',
            visualConfigureXAxis: 'X轴',
            visualConfigureYAxis: 'Y轴',
            visualConfigureCategoryField: '类别',
            visualConfigureCategoryLeftField: '左类别',
            visualConfigureCategoryRightField: '右类别',
            visualConfigureValueField: '值',
            visualConfigureSeriesField: '系列',
            visualConfigureOuterRadius: '外半径',
            visualConfigureShowLegend: '显示图例',
            visualConfigureInnerRadius: '内半径',
            visualConfigureStartAngle: '起始角度',
            visualConfigureEndAngle: '结束角度',
            visualConfigureDataBreakpoint: '数据断点',
            visualConfigureDataBreakpointBreak: '断开',
            visualConfigureDataBreakpointContinuous: '连续',
            visualConfigureDataBreakpointZero: '补 0',
            visualConfigureDataBreakpointIgnore: '忽略',
            visualConfigureGeneralGroup: '通用配置',
            visualConfigureTitleGroup: '标题配置',
            visualConfigureTitleGroupVisible: '是否展示',
            visualConfigureTitleGroupText: '标题',
            visualConfigureTitleGroupSubText: '子标题',
            visualConfigureTitleGroupPosition: '位置',
            visualConfigureTitleGroupPositionLeft: '左',
            visualConfigureTitleGroupPositionRight: '右',
            visualConfigureTitleGroupPositionTop: '顶部',
            visualConfigureTitleGroupPositionBottom: '底部',
            visualConfigureTitleGroupAlign: '对齐方式',
            visualConfigureTitleGroupAlignLeft: '左对齐',
            visualConfigureTitleGroupAlignCenter: '居中对齐',
            visualConfigureTitleGroupAlignRight: '右对齐',
            visualConfigureLabelGroup: '标签配置',
            visualConfigureLabelGroupVisible: '是否展示',
            columnExpressionMax: '最大值',
            columnExpressionMin: '最小值',
            columnExpressionSum: '总和',
            columnExpressionAvg: '平均值',
            columnExpressionCount: '计数',
            columnExpressionEquals: '等于',
            columnExpressionNotEquals: '不等于',
            columnExpressionIsNull: '为空',
            columnExpressionIsNotNull: '不为空',
            columnExpressionIsIn: '在 ... 中',
            columnExpressionIsNotIn: '不在 ... 中',
            columnExpressionIsLike: '像',
            columnExpressionIsNotLike: '不像',
            columnExpressionIsContains: '包含',
            columnExpressionIsNotContains: '不包含',
            columnExpressionGreaterThan: '大于',
            columnExpressionGreaterThanOrEquals: '大于等于',
            columnExpressionLessThan: '小于',
            columnExpressionLessThanOrEquals: '小于等于',
            customFunction: '自定义函数',
            lifeCycleMonth: '月',
            lifeCycleWeek: '周',
            lifeCycleDay: '天',
            lifeCycleHour: '小时',
            notSpecifiedTitle: '未指定',
            history: '同步历史',
            clearData: '清除数据',
            error: '查看错误',
            info: '查看详情',
            lifeCycleColumn: '生命周期列',
            lifeCycleNumber: '生命周期数',
            continuousBuild: '连续构建'
        },
        validator: {
            duplicateColumn: '列名 [ $VALUE ] 已存在',
            specifiedColumn: '排序键或主键必须指定',
            specifiedName: '数据集名必须指定'
        },
        tip: {
            selectExpression: '请选择表达式',
            syncData: '数据同步计划将在后台运行，具体同步结果请参考日志',
            clearData: '清除数据后无法进行回滚，清除操作将在后台运行，请耐心等待',
            lifeCycle: '数据集生命周期会根据指定列表达式进行计算',
            validatorSampling: '排序键中必须包含抽样键',
            adhocDnd: '拖拽左侧指标｜维度到相应位置即可查询并渲染数据',
            rebuildProgress: '重建只会进行未完成进度',
            lifeCycleMustDateColumn: '生命周期必须包含一个日期列',
            modifyNotSupportDataPreview: '修改暂不支持数据预览',
            publishSuccess: '数据集 [ $VALUE ] 发布成功'
        }
    }
}
