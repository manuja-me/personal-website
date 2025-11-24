import { ShaderAnimation } from "@/components/ui/shader-animation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Github, Linkedin, Mail, Terminal, Shield, Code, Lock, Server, Globe, Database, Keyboard } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  return <main className="min-h-screen bg-background">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section with Shader Animation */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ShaderAnimation />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background z-10" />
        
        <div className="relative z-20 container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 rounded-md terminal-border bg-background/50 backdrop-blur-sm">
              <span className="text-primary text-sm font-mono font-medium">$ whoami</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
              Manuja Medhankara
            </h1>
            
            <p className="text-2xl md:text-3xl gradient-text font-semibold mb-6">
              @manuja_me
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-mono">
              Cybersecurity Specialist & Linux Enthusiast <span className="animate-terminal-blink">_</span>
              <br />
              <span className="text-primary">Securing systems, one line of code at a time</span>
            </p>
            
            <div className="flex flex-wrap gap-3 justify-center items-center mb-10">
              <Badge variant="outline" className="text-primary border-primary/50 bg-primary/10 px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                Penetration Testing
              </Badge>
              <Badge variant="outline" className="text-primary border-primary/50 bg-primary/10 px-4 py-2">
                <Terminal className="w-4 h-4 mr-2" />
                Linux Administration
              </Badge>
              <Badge variant="outline" className="text-primary border-primary/50 bg-primary/10 px-4 py-2">
                <Lock className="w-4 h-4 mr-2" />
                Security Research
              </Badge>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base glow-terminal transition-all duration-300">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              
              <div className="flex gap-3">
                <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 font-semibold px-6 py-6 backdrop-blur-sm transition-all duration-300">
                  <Github className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 font-semibold px-6 py-6 backdrop-blur-sm transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
          <button 
            onClick={() => {
              const aboutSection = document.querySelectorAll("section")[1];
              aboutSection?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="animate-bounce cursor-pointer hover:scale-110 transition-transform"
            aria-label="Scroll to next section"
          >
            <Keyboard className="w-8 h-8 text-primary" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen py-24 px-6 relative flex items-center">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <div className="inline-block mb-4">
              <span className="text-primary font-mono text-sm">$ cat about.txt</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-foreground/90 leading-relaxed mb-6 font-mono">
                Passionate about exploring the depths of cybersecurity and the endless possibilities of Linux systems. 
                I specialize in identifying vulnerabilities, hardening systems, and building secure infrastructure.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-mono">
                When I'm not breaking into systems (ethically, of course), you'll find me contributing to open-source 
                projects, writing security tools, or deep-diving into kernel exploits and reverse engineering.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Kali Linux", "Metasploit", "Burp Suite", "Wireshark", "Python", "Bash", "Docker", "AWS"].map(skill => <span key={skill} className="px-3 py-1 text-sm font-mono bg-primary/10 text-primary border border-primary/30 rounded">
                    {skill}
                  </span>)}
              </div>
            </div>

            <Card className="p-8 bg-card/50 backdrop-blur-sm terminal-border">
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-primary">→</span>
                  <div>
                    <span className="text-muted-foreground">Role:</span>
                    <span className="text-foreground ml-2">Security Researcher</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">→</span>
                  <div>
                    <span className="text-muted-foreground">Focus:</span>
                    <span className="text-foreground ml-2">Offensive Security</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">→</span>
                  <div>
                    <span className="text-muted-foreground">OS:</span>
                    <span className="text-foreground ml-2">Arch Linux / Kali</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary">→</span>
                  <div>
                    <span className="text-muted-foreground">Editor:</span>
                    <span className="text-foreground ml-2">Neovim</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="min-h-screen py-24 px-6 relative bg-gradient-to-b from-transparent via-primary/5 to-transparent flex items-center">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-primary font-mono text-sm">$ ls -la /skills</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Core <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-mono">
              Building secure systems and breaking insecure ones
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 terminal-border">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Penetration Testing</h3>
              <p className="text-muted-foreground leading-relaxed font-mono text-sm">
                Web app security assessments, network pentesting, and vulnerability analysis using industry-standard tools
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 terminal-border">
                <Terminal className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Linux Systems</h3>
              <p className="text-muted-foreground leading-relaxed font-mono text-sm">
                System administration, shell scripting, kernel customization, and server hardening across distributions
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 terminal-border">
                <Code className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Security Tools</h3>
              <p className="text-muted-foreground leading-relaxed font-mono text-sm">
                Developing custom exploitation tools, automation scripts, and security utilities in Python and Bash
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 terminal-border">
                <Globe className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Network Security</h3>
              <p className="text-muted-foreground leading-relaxed font-mono text-sm">
                Traffic analysis, IDS/IPS configuration, firewall management, and wireless security assessments
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 terminal-border">
                <Server className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cloud Security</h3>
              <p className="text-muted-foreground leading-relaxed font-mono text-sm">
                Securing cloud infrastructure, container security, CI/CD pipeline hardening, and IAM configuration
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 terminal-border">
                <Database className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Incident Response</h3>
              <p className="text-muted-foreground leading-relaxed font-mono text-sm">
                Digital forensics, malware analysis, log analysis, and threat hunting to identify and mitigate attacks
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen py-24 px-6 flex items-center">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-16">
            <div className="inline-block mb-4">
              <span className="text-primary font-mono text-sm">$ git log --oneline</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm terminal-border hover:border-primary transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">Network Scanner Pro</h3>
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground mb-6 font-mono text-sm leading-relaxed">
                Advanced network reconnaissance tool with service detection, vulnerability scanning, and automated reporting capabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-mono">Python</span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-mono">Nmap</span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-mono">Scapy</span>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm terminal-border hover:border-primary transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">Linux Hardening Script</h3>
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground mb-6 font-mono text-sm leading-relaxed">
                Automated security hardening suite for Linux servers following CIS benchmarks with customizable rule sets.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-mono">Bash</span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-mono">Security</span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-mono">Automation</span>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm terminal-border hover:border-primary transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">Web Vulnerability Scanner</h3>
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground mb-6 font-mono text-sm leading-relaxed">
                Custom web application security scanner detecting XSS, SQL injection, CSRF, and other common vulnerabilities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-mono">Python</span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-mono">BeautifulSoup</span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-mono">Requests</span>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm terminal-border hover:border-primary transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">CTF Writeups</h3>
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground mb-6 font-mono text-sm leading-relaxed">
                Detailed writeups and solutions for various CTF challenges, covering web, binary exploitation, and cryptography.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-mono">CTF</span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-mono">Writeups</span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded font-mono">Tutorials</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen py-24 px-6 flex items-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.15),transparent_70%)]" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <Card className="relative overflow-hidden border-0 terminal-border bg-gradient-to-br from-primary/10 via-background/95 to-background/95 backdrop-blur-xl shadow-[0_0_80px_-20px_hsl(var(--primary)/0.3)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.2),transparent)]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <div className="relative p-12 md:p-16 text-center">
              <div className="inline-block mb-6">
                <span className="text-primary font-mono text-sm">$ echo "Let's connect"</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Build Something
                <span className="block gradient-text mt-2">Secure Together</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-mono">
                Open for collaborations, security research, and interesting projects
              </p>
              <div className="flex justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 text-lg glow-terminal">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-6">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground font-mono text-sm mb-4">
            $ sudo rm -rf /vulnerabilities
          </p>
          <p className="text-muted-foreground text-sm">
            © 2024 Manuja Medhankara (@manuja_me) - Crafted with <span className="text-primary">{"</>"}</span> and security in mind
          </p>
        </div>
      </footer>
    </main>;
};
export default Index;