import { Registry } from '@/registry/schema';

export const charts: Registry = [
    // Area Charts
    {
        name: 'chart-area-axes',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-area-axes.tsx'],
        category: 'Charts',
        subcategory: 'Area'
    },
    {
        name: 'chart-area-default',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-area-default.tsx'],
        category: 'Charts',
        subcategory: 'Area'
    },
    {
        name: 'chart-area-gradient',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-area-gradient.tsx'],
        category: 'Charts',
        subcategory: 'Area'
    },
    {
        name: 'chart-area-icons',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-area-icons.tsx'],
        category: 'Charts',
        subcategory: 'Area'
    },
    {
        name: 'chart-area-interactive',
        type: 'registry:block',
        registryDependencies: ['card', 'chart', 'select'],
        files: [
            {
                path: 'block/chart-area-interactive.tsx',
                type: 'registry:component'
            }
        ],
        category: 'Charts',
        subcategory: 'Area'
    },
    {
        name: 'chart-area-legend',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-area-legend.tsx'],
        category: 'Charts',
        subcategory: 'Area'
    },
    {
        name: 'chart-area-linear',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-area-linear.tsx'],
        category: 'Charts',
        subcategory: 'Area'
    },
    {
        name: 'chart-area-stacked-expand',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-area-stacked-expand.tsx'],
        category: 'Charts',
        subcategory: 'Area'
    },
    {
        name: 'chart-area-stacked',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-area-stacked.tsx'],
        category: 'Charts',
        subcategory: 'Area'
    },
    {
        name: 'chart-area-step',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-area-step.tsx'],
        category: 'Charts',
        subcategory: 'Area'
    },

    // Bar Charts
    {
        name: 'chart-bar-active',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-bar-active.tsx'],
        category: 'Charts',
        subcategory: 'Bar'
    },
    {
        name: 'chart-bar-default',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-bar-default.tsx'],
        category: 'Charts',
        subcategory: 'Bar'
    },
    {
        name: 'chart-bar-horizontal',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-bar-horizontal.tsx'],
        category: 'Charts',
        subcategory: 'Bar'
    },
    {
        name: 'chart-bar-interactive',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-bar-interactive.tsx'],
        category: 'Charts',
        subcategory: 'Bar'
    },
    {
        name: 'chart-bar-label-custom',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-bar-label-custom.tsx'],
        category: 'Charts',
        subcategory: 'Bar'
    },
    {
        name: 'chart-bar-label',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-bar-label.tsx'],
        category: 'Charts',
        subcategory: 'Bar'
    },
    {
        name: 'chart-bar-mixed',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-bar-mixed.tsx'],
        category: 'Charts',
        subcategory: 'Bar'
    },
    {
        name: 'chart-bar-multiple',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-bar-multiple.tsx'],
        category: 'Charts',
        subcategory: 'Bar'
    },
    {
        name: 'chart-bar-negative',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-bar-negative.tsx'],
        category: 'Charts',
        subcategory: 'Bar'
    },
    {
        name: 'chart-bar-stacked',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-bar-stacked.tsx'],
        category: 'Charts',
        subcategory: 'Bar'
    },

    // Line Charts
    {
        name: 'chart-line-default',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-line-default.tsx'],
        category: 'Charts',
        subcategory: 'Line'
    },
    {
        name: 'chart-line-dots-colors',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-line-dots-colors.tsx'],
        category: 'Charts',
        subcategory: 'Line'
    },
    {
        name: 'chart-line-dots-custom',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-line-dots-custom.tsx'],
        category: 'Charts',
        subcategory: 'Line'
    },
    {
        name: 'chart-line-dots',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-line-dots.tsx'],
        category: 'Charts',
        subcategory: 'Line'
    },
    {
        name: 'chart-line-interactive',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-line-interactive.tsx'],
        category: 'Charts',
        subcategory: 'Line'
    },
    {
        name: 'chart-line-label-custom',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-line-label-custom.tsx'],
        category: 'Charts',
        subcategory: 'Line'
    },
    {
        name: 'chart-line-label',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-line-label.tsx'],
        category: 'Charts',
        subcategory: 'Line'
    },
    {
        name: 'chart-line-linear',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-line-linear.tsx'],
        category: 'Charts',
        subcategory: 'Line'
    },
    {
        name: 'chart-line-multiple',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-line-multiple.tsx'],
        category: 'Charts',
        subcategory: 'Line'
    },
    {
        name: 'chart-line-step',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-line-step.tsx'],
        category: 'Charts',
        subcategory: 'Line'
    },

    // Pie Charts
    {
        name: 'chart-pie-donut-active',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-pie-donut-active.tsx'],
        category: 'Charts',
        subcategory: 'Pie'
    },
    {
        name: 'chart-pie-donut-text',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-pie-donut-text.tsx'],
        category: 'Charts',
        subcategory: 'Pie'
    },
    {
        name: 'chart-pie-donut',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-pie-donut.tsx'],
        category: 'Charts',
        subcategory: 'Pie'
    },
    {
        name: 'chart-pie-interactive',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-pie-interactive.tsx'],
        category: 'Charts',
        subcategory: 'Pie'
    },
    {
        name: 'chart-pie-label-custom',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-pie-label-custom.tsx'],
        category: 'Charts',
        subcategory: 'Pie'
    },
    {
        name: 'chart-pie-label-list',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-pie-label-list.tsx'],
        category: 'Charts',
        subcategory: 'Pie'
    },
    {
        name: 'chart-pie-label',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-pie-label.tsx'],
        category: 'Charts',
        subcategory: 'Pie'
    },
    {
        name: 'chart-pie-legend',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-pie-legend.tsx'],
        category: 'Charts',
        subcategory: 'Pie'
    },
    {
        name: 'chart-pie-separator-none',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-pie-separator-none.tsx'],
        category: 'Charts',
        subcategory: 'Pie'
    },
    {
        name: 'chart-pie-simple',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-pie-simple.tsx'],
        category: 'Charts',
        subcategory: 'Pie'
    },
    {
        name: 'chart-pie-stacked',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-pie-stacked.tsx'],
        category: 'Charts',
        subcategory: 'Pie'
    },

    // Radar Charts
    {
        name: 'chart-radar-default',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-radar-default.tsx'],
        category: 'Charts',
        subcategory: 'Radar'
    },
    {
        name: 'chart-radar-dots',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-radar-dots.tsx'],
        category: 'Charts',
        subcategory: 'Radar'
    },
    {
        name: 'chart-radar-grid-circle-fill',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-radar-grid-circle-fill.tsx'],
        category: 'Charts',
        subcategory: 'Radar'
    },
    {
        name: 'chart-radar-grid-circle-no-lines',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-radar-grid-circle-no-lines.tsx'],
        category: 'Charts',
        subcategory: 'Radar'
    },
    {
        name: 'chart-radar-grid-circle',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-radar-grid-circle.tsx'],
        category: 'Charts',
        subcategory: 'Radar'
    },
    {
        name: 'chart-radar-grid-custom',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-radar-grid-custom.tsx'],
        category: 'Charts',
        subcategory: 'Radar'
    },
    {
        name: 'chart-radar-grid-fill',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-radar-grid-fill.tsx'],
        category: 'Charts',
        subcategory: 'Radar'
    },
    {
        name: 'chart-radar-grid-none',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-radar-grid-none.tsx'],
        category: 'Charts',
        subcategory: 'Radar'
    },
    {
        name: 'chart-radar-icons',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-radar-icons.tsx'],
        category: 'Charts',
        subcategory: 'Radar'
    },
    {
        name: 'chart-radar-label-custom',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-radar-label-custom.tsx'],
        category: 'Charts',
        subcategory: 'Radar'
    },
    {
        name: 'chart-radar-legend',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-radar-legend.tsx'],
        category: 'Charts',
        subcategory: 'Radar'
    },
    {
        name: 'chart-radar-lines-only',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-radar-lines-only.tsx'],
        category: 'Charts',
        subcategory: 'Radar'
    },
    {
        name: 'chart-radar-multiple',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-radar-multiple.tsx'],
        category: 'Charts',
        subcategory: 'Radar'
    },
    {
        name: 'chart-radar-radius',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-radar-radius.tsx'],
        category: 'Charts',
        subcategory: 'Radar'
    },

    // Radial Charts
    {
        name: 'chart-radial-grid',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-radial-grid.tsx'],
        category: 'Charts',
        subcategory: 'Radial'
    },
    {
        name: 'chart-radial-label',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-radial-label.tsx'],
        category: 'Charts',
        subcategory: 'Radial'
    },
    {
        name: 'chart-radial-shape',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-radial-shape.tsx'],
        category: 'Charts',
        subcategory: 'Radial'
    },
    {
        name: 'chart-radial-simple',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-radial-simple.tsx'],
        category: 'Charts',
        subcategory: 'Radial'
    },
    {
        name: 'chart-radial-stacked',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-radial-stacked.tsx'],
        category: 'Charts',
        subcategory: 'Radial'
    },
    {
        name: 'chart-radial-text',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-radial-text.tsx'],
        category: 'Charts',
        subcategory: 'Radial'
    },
    {
        name: 'chart-tooltip-default',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-tooltip-default.tsx'],
        category: 'Charts',
        subcategory: 'Tooltip'
    },
    {
        name: 'chart-tooltip-indicator-line',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-tooltip-indicator-line.tsx'],
        category: 'Charts',
        subcategory: 'Tooltip'
    },
    {
        name: 'chart-tooltip-indicator-none',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-tooltip-indicator-none.tsx'],
        category: 'Charts',
        subcategory: 'Tooltip'
    },
    {
        name: 'chart-tooltip-label-none',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-tooltip-label-none.tsx'],
        category: 'Charts',
        subcategory: 'Tooltip'
    },
    {
        name: 'chart-tooltip-label-custom',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-tooltip-label-custom.tsx'],
        category: 'Charts',
        subcategory: 'Tooltip'
    },
    {
        name: 'chart-tooltip-label-formatter',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-tooltip-label-formatter.tsx'],
        category: 'Charts',
        subcategory: 'Tooltip'
    },
    {
        name: 'chart-tooltip-formatter',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-tooltip-formatter.tsx'],
        category: 'Charts',
        subcategory: 'Tooltip'
    },
    {
        name: 'chart-tooltip-icons',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-tooltip-icons.tsx'],
        category: 'Charts',
        subcategory: 'Tooltip'
    },
    {
        name: 'chart-tooltip-advanced',
        type: 'registry:block',
        registryDependencies: ['card', 'chart'],
        files: ['block/chart-tooltip-advanced.tsx'],
        category: 'Charts',
        subcategory: 'Tooltip'
    }
];
