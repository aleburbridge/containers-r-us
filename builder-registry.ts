'use client';

import { builder, Builder, withChildren } from '@builder.io/react';
import React from 'react';
import type { ComponentProps } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { builderContainer } from './components/Container/Builder';
import { builderContainerConfig } from './components/Container/Builder';
import type { PropsWithChildren } from 'react';
import CustomHero from './components/CustomHero';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.register('editor.settings', {
    customEditorTheme: {
        typography: {
            fontFamily: 'Figtree, Helvetica, Arial, sans-serif',
            fontWeights: {
                regular: 400,
                medium: 500,
            },
            baseFontSize: '18px',
            responsive: {
                tablet: {
                    baseFontSize: '16px',
                },
                mobile: {
                    baseFontSize: '16px',
                },
            },
            paragraph: {
                fontSize: '18px',
                lineHeight: '1.5',
                margin: '0 0 1em 0',
            },
        },
        colors: {
            background: 'var(--gray-50)',
            text: 'var(--indigo, #333366)',
            primary: 'var(--berry-bridge-500, #963862)',
            secondary: 'var(--color-secondary)',
            highlight: 'var(--berry-bridge-400)',
        },
        buttons: {
            borderRadius: '6px', // Global setting
            primary: {
                backgroundColor: 'var(--berry-bridge-500, #963862)',
                color: 'var(--button-text)',
                textDecoration: 'none',
                borderRadius: '6px', // Add explicit setting here
                border: '1px solid var(--berry-bridge-500, #963862)', // Add border definition
                hover: {
                    backgroundColor: 'var(--berry-bridge-600, #7e2e51)',
                    borderColor: 'var(--berry-bridge-600, #7e2e51)',
                },
            },
            secondary: {
                backgroundColor: 'transparent',
                borderColor: 'var(--btnSec-text)',
                color: 'var(--btnSec-text)',
                textDecoration: 'none',
                borderRadius: '6px', // Add explicit setting here
                border: '1px solid var(--btnSec-text)', // Add border definition
                hover: {
                    borderColor: 'var(--btnSec-text-hover)',
                    color: 'var(--btnSec-text-hover)',
                },
            },
        },
        spacing: {
            small: '8px',
            medium: '16px',
            large: '24px',
        },
        borders: {
            default: '1px solid var(--gray-200)',
            input: '1px solid var(--gray-300)',
        },
        inputs: {
            borderRadius: '4px',
            backgroundColor: 'var(--gray-100)',
            borderColor: 'var(--gray-300)',
            textColor: 'var(--indigo)',
            focus: {
                borderColor: 'var(--color-primary)',
                boxShadow: '0 0 0 2px var(--color-primary)',
            },
        },
        cards: {
            backgroundColor: 'var(--component-bg)',
            borderColor: 'var(--component-border)',
            borderRadius: '8px',
            shadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        headers: {
            marginTop: '0',
            marginBottom: '0.5em',
            h1: { fontSize: '2.5rem', marginTop: '0' },
            h2: { fontSize: '2rem', marginTop: '0' },
            h3: { fontSize: '1.75rem', marginTop: '0' },
            h4: { fontSize: '1.5rem', marginTop: '0' },
            h5: { fontSize: '1.25rem', marginTop: '0' },
            h6: { fontSize: '1rem', marginTop: '0' },
        },
        footer: {
            marginTop: '0',
            paddingTop: '0',
        },
        sections: {
            default: {
                paddingTop: '8px',
                paddingBottom: '8px',
            },
        },
    },
    designTokens: {
        colors: [
            { name: 'Transparent', value: 'transparent' },
            { name: 'Indigo (Primary)', value: 'var(--indigo, #333366)' },
            /* Primary Colors */
            { name: 'Berry 200', value: 'var(--berry-bridge-200, #e3c5d3)' },
            { name: 'Berry 300', value: 'var(--berry-bridge-300, #c99bb0)' },
            { name: 'Berry 400', value: 'var(--berry-bridge-400, #b06486)' },
            { name: 'Berry 500', value: 'var(--berry-bridge-500, #963862)' },
            { name: 'Berry 900', value: 'var(--berry-bridge-900, #4a1c30)' },
            { name: 'Brave Blue 200', value: 'var(--brave-blue-200, #d8ddf0)' },
            { name: 'Brave Blue 300', value: 'var(--brave-blue-300, #afb8d6)' },
            { name: 'Brave Blue 400', value: 'var(--brave-blue-400, #8b9cd6)' },
            { name: 'Brave Blue 500', value: 'var(--brave-blue-500, #617bd6)' },
            { name: 'Brave Blue 600', value: 'var(--brave-blue-600, #495dba)' },
            { name: 'Brave Blue 700', value: 'var(--brave-blue-700, #3c50a6)' },
            { name: 'Brave Blue 800', value: 'var(--brave-blue-800, #314394)' },
            { name: 'Brave Blue 900', value: 'var(--brave-blue-900, #22398a)' },
            /* Neutrals */
            { name: 'Neutral White', value: 'var(--gray-0, #fff)' },
            { name: 'Neutral Gray 50', value: 'var(--gray-50, #fafafa)' },
            { name: 'Neutral Gray 100', value: 'var(--gray-100, #f5f5f5)' },
            { name: 'Neutral Gray 200', value: 'var(--gray-200, #e8eeed)' },
            { name: 'Neutral Gray 300', value: 'var(--gray-300, #d4d4d4)' },
            { name: 'Neutral Gray 400', value: 'var(--gray-400, #a3a3a3)' },
            { name: 'Neutral Gray 500', value: 'var(--gray-500, #737373)' },
            { name: 'Neutral Gray 600', value: 'var(--gray-600, #525252)' },
            { name: 'Neutral Gray 700', value: 'var(--gray-700, #404040)' },
            { name: 'Neutral Gray 800', value: 'var(--gray-800, #262626)' },
            { name: 'Neutral Gray 900', value: 'var(--gray-900, #171717)' },
            { name: 'Neutral Black', value: 'var(--gray-1000, #000)' },
            /* Status Colors */
            { name: 'Success', value: 'var(--success-500, #16a34a)' },
            { name: 'Warning', value: 'var(--warning-500, #f59e0b)' },
            { name: 'Error', value: 'var(--error-500, #ef4444)' },
            /* Accent Colors */
            { name: 'Coral', value: 'var(--coral, #ff7c6f)' },
            { name: 'Yellow', value: 'var(--yellow, #edd780)' },
        ],
        spacing: [
            { name: 'None', value: '0' }, // Add none option
            { name: 'Small', value: '0.8em' },
            { name: 'Medium', value: '1.2em' },
            { name: 'Large', value: '2.4em' },
        ],
        fontFamily: [
            { name: 'Body Font', value: 'var(--body-font, Figtree, Helvetica, Arial, sans-serif)' },
            {
                name: 'Header Font',
                value: 'var(--header-font, Figtree, Helvetica, Arial, sans-serif)',
            },
        ],
        fontWeight: [
            { name: 'Regular', value: 'var(--font-weight-regular, 400)' },
            { name: 'Medium', value: 'var(--font-weight-medium, 500)' },
        ],
    },
});

// Fix the SimpleGrid component registration
Builder.registerComponent(
    (props: ComponentProps<typeof SimpleGrid> & {
        tabletColumns?: number;
        desktopColumns?: number;
        spacing?: number;
    }) => {
        const { spacing = 4, tabletColumns = 2, desktopColumns = 3, children, ...rest } = props;

        return React.createElement(
            SimpleGrid,
            {
                spacing: spacing,
                columns: {
                    base: 1, // Mobile (0-767px)
                    md: tabletColumns, // Tablet (768px-1439px)
                    lg: desktopColumns, // Desktop (1440px+)
                },
                ...rest,
            },
            children
        );
    },
    {
        name: 'Responsive Grid',
        inputs: [
            {
                name: 'tabletColumns',
                type: 'number',
                defaultValue: 2,
            },
            {
                name: 'desktopColumns',
                type: 'number',
                defaultValue: 3,
            },
            {
                name: 'spacing',
                type: 'number',
                defaultValue: 4,
            },
        ],
    }
);





// IMPORTANT: withChildren is required to enable child block functionality
const HeroWithBuilderChildren = withChildren(CustomHero);

// Register with Builder
Builder.registerComponent(HeroWithBuilderChildren, {
  name: 'CustomHero',
  inputs: [],
  canHaveChildren: true,
  defaultChildren: [
    {
      '@type': '@builder.io/sdk:Element',
      component: {
        name: 'Text',
        options: {
          text: 'This is Builder text',
        },
      },
    },
  ],
});

// Register with Builder
Builder.registerComponent(HeroWithBuilderChildren, {
    name: 'CustomHero',
    inputs: [],
    canHaveChildren: true,
    defaultChildren: [
      {
        '@type': '@builder.io/sdk:Element',
        component: {
          name: 'Text',
          options: {
            text: 'This is Builder text',
          },
        },
      },
    ],
  });
  

Builder.registerComponent(builderContainer, builderContainerConfig);
// *********** Builder IO TYPES
// 'string'
// 'number'
// 'boolean'
// 'longText' // String type but with a multiline text field editor
// 'richText' // Displays a rich text editor and provides the value as html
// 'file' // Uploads a file and provides the value as a url string
// 'color'
// 'date'
// 'email'
// 'object'
// 'list'
// 'reference' // displays a content entry picker to reference