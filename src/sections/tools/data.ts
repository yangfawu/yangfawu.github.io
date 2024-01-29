export interface ToolDetails {
    id: string
    name: string
    link: string
    comment?: string
    new?: boolean
}

const TOOLBOOK: Record<string, ToolDetails> = {
    ts: {
        id: "ts",
        name: "TypeScript",
        comment:
            "This is my go-to language for most projects that relies on the npm ecosystem. It makes projects scalable and maintainable.",
        link: "https://www.typescriptlang.org/",
    },
    js: {
        id: "js",
        name: "JavaScript",
        comment:
            "This is a subset of TypeScript, so I rarely use it for projects. However, its looser type constraints makes prototyping procedures easier before I take types into consideration.",
        link: "https://www.javascript.com/",
    },
    py: {
        id: "py",
        name: "Python",
        comment:
            "Python is my go-to language for seamlessly handling diverse tasks from scripting and compiler development to solving LeetCode problems.",
        link: "https://www.python.org/",
    },
    java: {
        id: "java",
        name: "Java",
        comment:
            "I use Java selectively for backend projects with Maven, leveraging its efficient dependency management and reliability for specific project requirements.",
        link: "https://www.java.com/",
    },
    c: {
        id: "c",
        name: "C",
        comment:
            "I use C for school assignments, implementing dynamic memory allocators, and in LeetCode to delve into data structures at the low-level.",
        link: "https://www.cprogramming.com/",
    },
    react: {
        id: "react",
        name: "React",
        comment:
            "This is my go-to frontend framework for most projects. It is easy to pick up and has a lot of community support.",
        link: "https://react.dev/",
    },
    angular: {
        id: "angular",
        name: "Angular",
        comment:
            "This was the first frontend framework I learned before I switched over to React. I still plan on using it for future projects to explore the changes brought by version 18.",
        link: "https://angular.io/",
    },
    express: {
        id: "express",
        name: "Express.js",
        comment:
            "This is my go-to backend framework for most projects. It is easy to pick up and has a lot of community support.",
        link: "https://expressjs.com/",
    },
    next: {
        id: "next",
        name: "Next.js",
        comment:
            "This is a framework that I have always been eyeing because of its unique approach to closing the gap between frontend and backend development. I plan on using it to create a personal blog in the future.",
        link: "https://nextjs.org/",
        new: true,
    },
    axios: {
        id: "axios",
        name: "Axios",
        comment:
            "This is my go-to HTTP client for most projects. It is very easy to use compared to the built-in fetch API.",
        link: "https://axios-http.com/",
    },
    sass: {
        id: "sass",
        name: "Sass",
        comment:
            "Whenever I have to write a lot of custom CSS, Sass comes in handy when I need readability and small file sizes.",
        link: "https://sass-lang.com/",
    },
    tailwind: {
        id: "tailwind",
        name: "Tailwind",
        comment:
            "This is something I recently picked up. It has a very opinionated view on how styling should be done, but I enjoy its usability once you are familiar with the keywords.",
        link: "https://tailwindcss.com/",
        new: true,
    },
    mui: {
        id: "mui",
        name: "Material UI",
        comment:
            "I enjoy using this component library because it has a lot to offer out of the bus. Its wide range of components makes prototyping extremely fast.",
        link: "https://mui.com/material-ui/",
    },
    rhf: {
        id: "rhf",
        name: "React Hook Form",
        comment:
            "Forms are a huge part of frontends - and this library makes forms extremely easy to scale, maintain, and control inside the React framework.",
        link: "https://react-hook-form.com/",
    },
    headlessui: {
        id: "headlessui",
        name: "Headless UI",
        comment:
            "I recently picked up this library and I enjoy how its primary focus is providing you with the connected parts of a component and having you provide the styles. It is a great replacement for MUI when you want to implement custom styles.",
        link: "https://headlessui.com/",
        new: true,
    },
    prisma: {
        id: "prisma",
        name: "Prisma",
        comment:
            "This is my go-to ORM when I work with SQL-based databases because it allows me to stick to one language without ever having to write any SQL.",
        link: "https://www.prisma.io/",
    },
    mongoose: {
        id: "mongoose",
        name: "mongoose",
        comment:
            "MongoDB is an awesome NoSQL database and this library makes it super easy to work with inside the Node.js environment.",
        link: "https://mongoosejs.com/",
    },
    auth0: {
        id: "auth0",
        name: "Auth0",
        comment:
            "I have used the authentication service at my previous internships and I enjoy its React integration.",
        link: "https://auth0.com/",
    },
    git: {
        id: "git",
        name: "Git",
        link: "https://git-scm.com/",
    },
    vsc: {
        id: "vsc",
        name: "Visual Studio Code",
        comment:
            "This is my go-to IDE for most projects. It is very lightweight and easily customizable.",
        link: "https://code.visualstudio.com/",
    },
    idea: {
        id: "idea",
        name: "IntelliJ IDEA",
        comment:
            "This is my go-to IDE for Java projects. It comes with a lot of features and a great UI that make Java development easier.",
        link: "https://www.jetbrains.com/idea/",
    },
    maven: {
        id: "maven",
        name: "Maven",
        link: "https://maven.apache.org/",
    },
    npm: {
        id: "npm",
        name: "npm",
        link: "https://www.npmjs.com/",
    },
    eslint: {
        id: "eslint",
        name: "ESLint",
        link: "https://eslint.org/",
    },
    jira: {
        id: "jira",
        name: "Jira",
        comment:
            "I used this extensively to some degree at my previous internships for team project management. It is a great progress tracker and lets you visualize task priority.",
        link: "https://www.atlassian.com/software/jira",
    },
    trello: {
        id: "trello",
        name: "Trello",
        comment:
            "This is my go-to planner when I am working on a personal group project and I desire some form of organization, but not all the features of Jira.",
        link: "https://trello.com/",
    },
    slack: {
        id: "slack",
        name: "Slack",
        link: "https://slack.com/",
    },
    postman: {
        id: "postman",
        name: "Postman",
        comment:
            "When I am working on the backend, I use this extensively to test and document request formats and response data. The documentation support makes frontend integration faster.",
        link: "https://www.postman.com/",
    },
    mysql: {
        id: "mysql",
        name: "MySQL",
        link: "https://www.mysql.com/",
    },
    postgresql: {
        id: "postgresql",
        name: "PostgreSQL",
        link: "https://www.postgresql.org/",
    },
    sqlite: {
        id: "sqlite",
        name: "SQLite",
        link: "https://www.sqlite.org/",
    },
    mongodb: {
        id: "mongodb",
        name: "MongoDB",
        link: "https://www.mongodb.com/",
    },
}

export const DATA = (() => {
    const assets = import.meta.glob("/src/assets/tools/*.{svg,png,jpg}", {
        eager: true,
        as: "url",
    })

    const out = []
    for (const entry of Object.entries(assets)) {
        const filename = entry[0].split("/").at(-1)
        if (!filename) continue

        const key = filename.split(".", 2)[0].split("-", 2)[0]
        const value = TOOLBOOK[key] ?? {
            id: key,
            name: key,
        }
        out.push({
            meta: value,
            image: entry[1],
        })
    }

    return out
})()

export const ID_TO_INDEX = (() => {
    const out: Record<string, number> = {}
    for (let i = 0; i < DATA.length; i++) {
        out[DATA[i].meta.id] = i
    }
    return out
})()
