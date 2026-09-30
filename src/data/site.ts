export interface ProjectItem {
  index: string;
  title: string;
  url: string;
  version?: string;
  status: string;
  statusColor: string;
  description: string;
  highlights: string[];
  tags: string[];
  schemaType: 'SoftwareApplication' | 'SoftwareSourceCode';
  operatingSystem?: string;
  programmingLanguage?: string[];
}

export interface SpecificationItem {
  label: string;
  value: string;
}

export const siteConfig = {
  url: 'https://manuja.dev',
  author: 'Manuja Medhankara',
  shortName: 'Manuja',
  username: 'manuja_me',
  title: 'Manuja Medhankara | Cybersecurity Specialist & Systems Engineer',
  description: 'Cybersecurity specialist and systems engineer focused on penetration testing, Linux infrastructure hardening, and high-performance open-source security engineering.',
  keywords: 'Manuja Medhankara, Cybersecurity Specialist, Penetration Testing, Systems Engineer, Linux Hardening, VulnRadar, CIS Benchmarks, NIST 800-53, Application Security, Ethical Hacking, Rust, Tauri, Security Tooling, Sri Lanka, Colombo, Offensive Security, Network Reconnaissance, Vulnerability Assessment',
  email: 'manuja.public@gmail.com',
  pgp: '0x4E5AB5C',
  location: 'Colombo, Sri Lanka',
  region: 'LK-1',
  geoPosition: '6.9271;79.8612',
  timezone: 'UTC+05:30',
  availability: 'AVAILABLE FOR SECURITY AUDITS',
  socials: {
    github: 'https://github.com/manuja-me',
    linkedin: 'https://www.linkedin.com/in/manuja-medhankara-rc96',
    twitter: 'https://x.com/manuja_me',
  },
} as const;

export const specifications: SpecificationItem[] = [
  { label: 'ROLE', value: 'Cybersecurity Specialist & Systems Engineer' },
  { label: 'PRIMARY OS', value: 'Arch Linux / Custom Hardened Kernel' },
  { label: 'SECURITY OS', value: 'Kali Linux / Qubes OS' },
  { label: 'TOOLCHAIN', value: 'Burp Suite, Metasploit, Wireshark, Nmap' },
  { label: 'LANGUAGES', value: 'Rust, Python, Bash, TypeScript' },
  { label: 'STANDARDS', value: 'CIS Benchmarks & NIST 800-53' },
  { label: 'PLATFORMS', value: 'Hack The Box & TryHackMe' },
];

export const projects: ProjectItem[] = [
  {
    index: '01',
    title: 'VulnRadar Security Scanner',
    url: 'https://github.com/manuja-me/vuln-radar',
    version: '1.0.0',
    status: 'v1.0.0 RELEASED',
    statusColor: 'text-emerald-500 border-emerald-500/30',
    description: 'Desktop security workstation and non-intrusive vulnerability auditor. Evaluates web attack surfaces, cryptographic posture, HTTP security headers, and generates 1-click remediation blueprints.',
    highlights: [
      'Passive audits for SSL/TLS, DMARC/SPF, and HTTP header hygiene',
      'RCE risk heuristics detecting parameter abuse (?cmd=, ?tpl=) & CVE correlation',
      'AI-powered 1-click prompt generator for Antigravity & LLM remediation',
      'High-speed async TCP port discovery & crt.sh subdomain reconnaissance',
    ],
    tags: ['Rust', 'Tauri v2', 'Svelte 5', 'Tailwind v4', 'SQLite WAL'],
    schemaType: 'SoftwareApplication',
    operatingSystem: 'Linux, macOS, Windows',
  },
  {
    index: '02',
    title: 'Linux Hardening Suite',
    url: 'https://github.com/manuja-me',
    status: 'ACTIVE STAGING',
    statusColor: 'text-primary border-primary/30',
    description: 'Automated compliance and hardening engine for Linux infrastructure aligned with CIS Benchmarks and NIST 800-53 baselines.',
    highlights: [
      'Automated compliance evaluation for SSH, kernel sysctl, and firewall posture',
      'Non-destructive dry-run validation with automatic configuration rollbacks',
      'Modular multi-distribution support (Arch, Debian, Ubuntu)',
    ],
    tags: ['Bash', 'Python', 'CIS Benchmarks', 'Kernel Security'],
    schemaType: 'SoftwareSourceCode',
    programmingLanguage: ['Bash', 'Python'],
  },
  {
    index: '03',
    title: 'Network Recon Pro',
    url: 'https://github.com/manuja-me',
    status: 'ROADMAP',
    statusColor: 'text-muted-foreground border-border',
    description: 'Asset discovery and protocol analysis framework featuring service fingerprinting, CVE correlation, and structured security reports.',
    highlights: [
      'Asynchronous service and banner detection across segmented subnets',
      'CVE catalog correlation engine with exportable Markdown & HTML reports',
    ],
    tags: ['Python', 'Scapy', 'Nmap', 'Network Security'],
    schemaType: 'SoftwareSourceCode',
    programmingLanguage: ['Python'],
  },
];
