# Mohitul Islam Frontend Engineer

## How to deploy next js project on github pages

> First: Create your project visible to public
> Second: Add output type in next config file like

    const nextConfig: NextConfig = {
        output: "export", // added this
        /* config options here */
    };

> Third: Add script in package.json file is

     "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint",
        "export": "next export" // added this
    },

> Fourth: Build your project and push to github repo

> Fifth: Then go to settings and there find pages from sidebar
>
> 1. Select Github Actions from dropdown and press configure
> 2. Start a commit and merge with main branch (It might show config or not just merge with conflict if any)
