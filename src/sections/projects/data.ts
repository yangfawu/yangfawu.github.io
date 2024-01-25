export enum ProjectLinkType {
    GITHUB,
    DEPLOYMENT,
    OTHER,
}

export interface ProjectLink {
    name: string | null
    url: string
    type: ProjectLinkType
}

export interface ProjectDetails {
    title: string
    description: string
    tags: string[]
    images: any[]
    isComplete: boolean
    note?: string
    links: ProjectLink[]
}

const DATA: ProjectDetails[] = [
    {
        title: "2048 Replica",
        description:
            "I recreated the popular single tile sliding game where the goal is to merge tiles of equal value in a 4 by 4 grid until you create the 2048-value tile. Using a class-based component style and jQuery, I tried to mimic the user experience and game flow. The game has both desktop and mobile support.",
        tags: ["jQuery", "TypeScript", "instapack"],
        images: [],
        isComplete: true,
        links: [
            {
                name: null,
                url: "https://github.com/yangfawu/2048-replica/",
                type: ProjectLinkType.GITHUB,
            },
            {
                name: null,
                url: "https://yangfawu.github.io/2048-replica/",
                type: ProjectLinkType.DEPLOYMENT,
            },
        ],
    },
    {
        title: "UNO: Around the World Food Edition",
        description:
            "I built a simple offline 3-player UNO game centered around food themes. The project features draggable and customizable cards for interactive user experience. It also houses a deterministic computer AI that make smart moves based on the current states and future states of the game.",
        tags: ["Angular", "Angular Material", "Game Engine", "Art"],
        images: [],
        isComplete: true,
        links: [
            {
                name: null,
                url: "https://github.com/yangfawu/demo-uno/",
                type: ProjectLinkType.GITHUB,
            },
            {
                name: null,
                url: "https://yangfawu.github.io/demo-uno/",
                type: ProjectLinkType.DEPLOYMENT,
            },
        ],
    },
    {
        title: "Skribbl.io Replica",
        description:
            "I recreated the popular multiplayer drawing/guessing game from scratch using Angular and the original game assets. It utilizes Firebase to create a seamless multiplayer experience where users can chat and draw on others' screens in realtime.",
        note: "The frontend client is currently being deployed without the Java backend running. My future agenda includes updating the project to support fullstack demos with CodeSandbox.",
        tags: ["Angular", "TypeScript", "Google Firebase", "Java"],
        images: [],
        isComplete: true,
        links: [
            {
                name: null,
                url: "https://github.com/yangfawu/skribblio/",
                type: ProjectLinkType.GITHUB,
            },
            {
                name: null,
                url: "https://yangfawu.github.io/skribblio/",
                type: ProjectLinkType.DEPLOYMENT,
            },
        ],
    },
    {
        title: "GitHub Pages Deployment User Guide",
        description:
            "This was a mini-project where I created a blog-like post describing how to automatically deploy React web apps onto GitHub Pages using GitHub Actions. In fact, this very site is using those instructions for deployment.",
        note: "In the near future, I will create a scalable blog site with Next.js and this mini-project will be one of my first blog pages.",
        tags: ["React", "Material UI", "TypeScript", "Vite"],
        images: [],
        isComplete: true,
        links: [
            {
                name: null,
                url: "https://github.com/yangfawu/deploy-to-gh-pages-user-guide-with-actions/",
                type: ProjectLinkType.GITHUB,
            },
            {
                name: null,
                url: "https://yangfawu.github.io/deploy-to-gh-pages-user-guide-with-actions/",
                type: ProjectLinkType.DEPLOYMENT,
            },
        ],
    },
    {
        title: "WasteNoBites",
        description:
            "My friends and I attended the Morgan Stanley Code to Give Hackathon Alpharetta Hackathon 2023. We worked on prototyping a solution aimed at solving distribution challenges at Atlanta Food Bank. I operated as the Git master and helped flesh out the frontend with authentication, API connections, and transitions.",
        tags: [
            "React",
            "Material UI",
            "Redux Toolkit",
            "Express",
            "Google Firebase",
            "TypeScript",
            "Python",
        ],
        images: [],
        isComplete: true,
        links: [
            {
                name: null,
                url: "https://github.com/skydaz123/MorganStanley-Hackathon",
                type: ProjectLinkType.GITHUB,
            },
            {
                name: "Hackathon Post",
                url: "https://morganstanley.tal.net/vx/mobile-0/brand-2/candidate/so/pm/1/pl/2/opp/15306-Virtual-Hackathon-Code-to-Give-Alpharetta-2023/en-GB",
                type: ProjectLinkType.OTHER,
            },
        ],
    },
    {
        title: "SSM Interpreter",
        description:
            "This is an interpreter that can read Simple Stack Machine (SSM) code centered around manipulating numbers and produce a result at the top of its internal stack. It supports basic operations like adding, subtracting, multiplication, and division. It also supports operations that modifies the stack like top duplication, top swapping, and popping. Finally, it also supports operations that store and load numerical data from a memory table.",
        tags: ["Python", "Interpreter"],
        images: [],
        isComplete: true,
        links: [
            {
                name: null,
                url: "https://github.com/yangfawu/ssm-interpreter/",
                type: ProjectLinkType.GITHUB,
            },
        ],
    },
    {
        title: "Dynamic Memory Allocator",
        description:
            "I wrote my own C implementations of the three most common functions associated with dynamic memory allocation: malloc, free, and realloc. I employed textbook concepts and the explicit free list approach to quickly search for available memory blocks while maintaining high memory utilization with minimal fragmentation.",
        tags: ["C", "Memory", "Algorithms"],
        images: [],
        isComplete: true,
        links: [
            {
                name: null,
                url: "https://github.com/yangfawu/dynamic-memory-allocator/",
                type: ProjectLinkType.GITHUB,
            },
        ],
    },
    {
        title: "Decaf Compiler",
        description:
            "This is a compiler that can compile a Java-like language called Decaf into abstract machine code. It uses the PLY library to tokenize and parse input files. It then employs different strategies to resolve scopes & names, perform type checking, and generating lower level code. The compiler is capable of tackling many concepts that are, but not limited to: scopes, visibility, inheritance, name resolution, and register allocation.",
        tags: ["Python", "Lex-Yacc", "Compiler"],
        images: [],
        isComplete: true,
        links: [
            {
                name: null,
                url: "https://github.com/yangfawu/decaf-compiler/",
                type: ProjectLinkType.GITHUB,
            },
        ],
    },
    {
        title: "Fake Stack Overflow",
        description:
            "I used JavaScript and limited amount of libraries to create a minimum viable replica of Stack Overflow that only supports anonymous posts. I then used TypeScript and less restrictions to create another version that supports authentication, voting, and querying.",
        tags: [
            "React",
            "Axios",
            "Material UI",
            "Express",
            "MongoDB",
            "JavaScript",
            "TypeScript",
        ],
        images: [],
        isComplete: true,
        links: [
            {
                name: "JavaScript Repository",
                url: "https://github.com/yangfawu/fake-stackoverflow-js/",
                type: ProjectLinkType.GITHUB,
            },
            {
                name: "TypeScript Repository",
                url: "https://github.com/yangfawu/fake-stackoverflow-ts/",
                type: ProjectLinkType.GITHUB,
            },
        ],
    },
    {
        title: "Pokedex",
        description:
            "This is a multi-repository project where I am creating frontend wiki on Pokemon creatures using two different frameworks: Next.js and Angular. The overall goal of this project is to explore the features offered by Next.js 14 and Angular 17. The two frameworks have different opioniated views on serving content, so one of the side milestones will be maintaining the same functionalities across the two clients.",
        tags: ["Next.js", "Angular", "Tailwind"],
        images: [],
        isComplete: false,
        links: [
            {
                name: "Next.js Repository",
                url: "https://github.com/yangfawu/pokedex-nextjs/",
                type: ProjectLinkType.GITHUB,
            },
            {
                name: "Angular Repository",
                url: "https://github.com/yangfawu/pokedex-angular/",
                type: ProjectLinkType.GITHUB,
            },
        ],
    },
]

export default DATA
