import p1 from "./assets/pg-1.png";
import p2 from "./assets/project-2.png";
import p3 from "./assets/project-3.png";
import p4 from "./assets/project-4.png";
import p5 from "./assets/project-5.png";
import p6 from "./assets/project-6.png";

export const filters = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Decentralised Apps",
        id: "dapps",
    },
    {
        name: "Smart Contracts",
        id: "contract",
    },
    {
        name: "Other",
        id: "other",
    },
];

export const projects = [
    {
        name: "Lending Borrowing Dapp",
        image: p1,
        tags: ["dapps", "contract"],
    },
    {
        name: "OpenSwap - DEX",
        image: p2,
        tags: ["dapps", "contract"],
    },
    {
        name: "ChatGBC - AI Smart Contract Auditor",
        image: p3,
        tags: ["other"],
    },
    {
        name: "Custom Subgraph",
        image: p4,
        tags: ["other"],
    },
    {
        name: "Decoding Txn Log",
        image: p5,
        tags: ["dapps", "other"],
    },
    {
        name: "Wallet Backend",
        image: p6,
        tags: ["other"],
    },
];

export const achievements = [
    {
        id: 1,
        year: 10,
        description: "SUCCESSFULLY<br />COMPLETED<br />PROJECTS",
    },
    {
        id: 2,
        year: 2,
        description: "YEARS OF<br />EXPERIENCE",
    },
    {
        id: 3,
        year: 20,
        description: "TECHNOLOGIES",
    },
    {
        id: 4,
        year: 15,
        description: "COMMUNITY<br />POSTS",
    },
];
