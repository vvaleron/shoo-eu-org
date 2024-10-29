import { Fragment } from 'react';

import Link from 'next/link';

// Define types for the data
interface Feature {
    name: string;
}

interface Plugin {
    name: string;
    githubUrl: string;
}

// Define constant arrays with types
const FEATURES: Feature[] = [{ name: 'Shadcn UI' }];

const ESLINT_PLUGINS: Plugin[] = [
    { name: '@eslint/js', githubUrl: 'https://github.com/eslint/eslint' },
    { name: 'typescript-eslint', githubUrl: 'https://github.com/typescript-eslint/typescript-eslint' },
    { name: 'eslint-plugin-react', githubUrl: 'https://github.com/jsx-eslint/eslint-plugin-react' },
    { name: '@next/eslint-plugin-next', githubUrl: 'https://github.com/vercel/next.js' },
    { name: 'eslint-plugin-tailwindcss', githubUrl: 'https://github.com/francoismassart/eslint-plugin-tailwindcss' },
    { name: 'eslint-config-prettier', githubUrl: 'https://github.com/prettier/eslint-config-prettier' },
    { name: 'eslint-plugin-import', githubUrl: 'https://github.com/import-js/eslint-plugin-import' },
    { name: 'eslint-plugin-promise', githubUrl: 'https://github.com/eslint-community/eslint-plugin-promise' }
];

// Component with TypeScript
const SetupDetails: React.FC = () => {
    return (
        <div>
            <div>
                <ol className='flex flex-wrap justify-center gap-3 gap-y-1 sm:gap-y-3'>
                    {FEATURES.map((feature, index) => (
                        <Fragment key={feature.name}>
                            <li>
                                <h2 className='text-sm sm:text-lg'>{feature.name}</h2>
                            </li>
                            {index < FEATURES.length - 1 && <span>•</span>}
                        </Fragment>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default SetupDetails;
