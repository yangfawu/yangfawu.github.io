export interface ToolDetails {
    name: string
    image?: any
    comment?: string
    new?: boolean
    link?: string
}

export const LANGUAGES: ToolDetails[] = [
    {
        name: "TypeScript",
        comment:
            "This is my go-to language for most projects that relies on the npm ecosystem. It makes projects scalable and maintainable.",
    },
    {
        name: "JavaScript",
        comment:
            "This is a subset of TypeScript, so I rarely use it for projects. However, its looser type constraints makes prototyping procedures easier before I take types into consideration.",
    },
    {
        name: "Python",
        comment:
            "Python is my go-to language for seamlessly handling diverse tasks from scripting and compiler development to solving LeetCode problems.",
    },
    {
        name: "Java",
        comment:
            "I use Java selectively for backend projects with Maven, leveraging its efficient dependency management and reliability for specific project requirements.",
    },
    {
        name: "C",
        comment:
            "I use C for school assignments, implementing dynamic memory allocators, and in LeetCode to delve into data structures at the low-level.",
        new: true,
    },
]

export const FRAMEWORKS: ToolDetails[] = [
    { name: "React", link: "https://react.dev/" },
    { name: "Angular", link: "https://angular.io/" },
    { name: "Express.js", link: "https://expressjs.com/" },
    { name: "Next.js", link: "https://nextjs.org/", new: true },
]

export const LIBRARIES: ToolDetails[] = [
    {
        name: "Axios",
        link: "https://axios-http.com/",
    },
    {
        name: "Sass",
        link: "https://sass-lang.com/",
        comment:
            "Whenever I have to write a lot of custom CSS, Sass comes in handy when I need readability and small file sizes.",
    },
    {
        name: "Tailwind",
        link: "https://tailwindcss.com/",
        new: true,
        comment:
            "This is something I recently picked up. It has a very opinionated view on how styling should be done, but I enjoy its usability once you are familiar with the keywords.",
    },
    {
        name: "Material UI",
        link: "https://mui.com/material-ui/",
        comment:
            "I enjoy using this component library because it has a lot to offer out of the bus. Its wide range of components makes prototyping extremely fast.",
    },
    {
        name: "React Hook Form",
        link: "https://react-hook-form.com/",
        comment:
            "Forms are a huge part of frontends - and this library makes forms extremely easy to scale, maintain, and control inside the React framework.",
    },
    {
        name: "Headless UI",
        link: "https://headlessui.com/",
        new: true,
        comment:
            "I recently picked up this library and I enjoy how its primary focus is providing you with the connected parts of a component and having you provide the styles. It is a great replacement for MUI when you want to implement custom styles.",
    },
    {
        name: "Prisma",
        link: "https://www.prisma.io/",
        comment:
            "This is my go-to ORM when I work with SQL-based databases because it allows me to stick to one language without ever having to write any SQL.",
    },
    {
        name: "mongoose",
        link: "https://mongoosejs.com/",
        comment:
            "MongoDB is an awesome NoSQL database and this library makes it super easy to work with inside the Node.js environment.",
    },
    {
        name: "Auth0",
        link: "https://auth0.com/",
    },
]

export const DATABASES: ToolDetails[] = [
    { name: "MySQL" },
    { name: "PostgreSQL" },
    { name: "SQLite" },
    { name: "MongoDB" },
]

export const DEVELOPMENT: ToolDetails[] = [
    { name: "Git" },
    { name: "Visual Studio Code" },
    { name: "IntelliJ IDEA" },
    { name: "Maven" },
    { name: "npm" },
    { name: "ESLint" },
    {
        name: "Jira",
        comment:
            "I used this extensively to some degree at my previous internships for team project management. It is a great progress tracker and lets you visualize task priority.",
    },
    {
        name: "Trello",
        comment:
            "This is my go-to when I am working on a personal group project because I desire some form of organization, but not all the features of Jira.",
    },
    { name: "Slack" },
    {
        name: "Postman",
        comment:
            "When I am working on the backend, I use this extensively to test and document request formats and response data. The documentation support makes frontend integration faster.",
    },
]
