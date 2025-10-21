export interface MockUser {
  userId: string;
  avatar: string;
  username: string;
}

export interface MockRepo {
  id: string;
  name: string;
  url: string;
  lastGenerated?: string;
  autoUpdate?: boolean;
}

export interface MockProject {
  repoName: string;
  lastGenerated: string;
  autoUpdate: boolean;
  repoId: string;
}

export const mockUser: MockUser = {
  userId: "user-123",
  avatar: "https://github.com/github.png",
  username: "developer",
};

export const mockRepos: MockRepo[] = [
  {
    id: "repo-1",
    name: "awesome-project",
    url: "https://github.com/user/awesome-project",
    lastGenerated: "2025-10-20",
    autoUpdate: true,
  },
  {
    id: "repo-2",
    name: "react-components",
    url: "https://github.com/user/react-components",
    lastGenerated: "2025-10-19",
    autoUpdate: false,
  },
  {
    id: "repo-3",
    name: "node-api",
    url: "https://github.com/user/node-api",
  },
];

export const mockProjects: MockProject[] = [
  {
    repoName: "awesome-project",
    lastGenerated: "2025-10-20",
    autoUpdate: true,
    repoId: "repo-1",
  },
  {
    repoName: "react-components",
    lastGenerated: "2025-10-19",
    autoUpdate: false,
    repoId: "repo-2",
  },
];

export const mockReadme = `# Awesome Project

A revolutionary tool for generating beautiful documentation.

## Features

- Auto-generated READMEs
- Real-time updates
- AI-powered content
- Beautiful formatting

## Installation

\`\`\`bash
npm install awesome-project
\`\`\`

## Usage

\`\`\`javascript
import { generate } from 'awesome-project';

generate({
  repo: 'my-repo',
  options: { ai: true }
});
\`\`\`

## License

MIT
`;
