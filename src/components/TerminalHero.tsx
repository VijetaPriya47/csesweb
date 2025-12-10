import React, { useState, useEffect, useRef } from 'react';
import styles from './TerminalHero.module.css';

const COMMANDS = {
    help: "Available commands: help, whoami, contact, clear, projects",
    whoami: "Vijeta Priya\nBackend & Distributed Systems Engineer\nFocus: High Scale, Low Latency, Distributed Systems",
    contact: "GitHub: github.com/VijetaPriya47\nCodeforces: codeforces.com/profile/vijetapriya",
    projects: "Type 'ls projects' to see list... just kidding, scroll down!",
};

const TerminalHero = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', content: 'System initialized...' },
        { type: 'output', content: 'Loading profile...' },
        { type: 'output', content: 'Welcome to v1.0.0' },
        { type: 'output', content: 'Type "help" to see available commands.' },
    ]);
    const inputRef = useRef<HTMLInputElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);

    const handleCommand = (cmd: string) => {
        const cleanCmd = cmd.trim().toLowerCase();

        if (cleanCmd === 'clear') {
            setHistory([]);
            return;
        }

        const response = COMMANDS[cleanCmd] || `Command not found: ${cleanCmd}. Type "help" for valid commands.`;

        setHistory(prev => [
            ...prev,
            { type: 'command', content: `> ${cmd}` },
            { type: 'output', content: response }
        ]);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [history]);

    return (
        <div className={styles.terminalContainer} onClick={() => inputRef.current?.focus()}>
            <div className={styles.terminalHeader}>
                <div className={styles.circle} style={{ backgroundColor: '#ff5f56' }}></div>
                <div className={styles.circle} style={{ backgroundColor: '#ffbd2e' }}></div>
                <div className={styles.circle} style={{ backgroundColor: '#27c93f' }}></div>
                <div className={styles.title}>vijeta@backend-sys:~</div>
            </div>
            <div className={styles.terminalBody} ref={terminalRef}>
                {history.map((line, i) => (
                    <div key={i} className={`${styles.line} ${styles[line.type]}`}>
                        {line.content}
                    </div>
                ))}
                <div className={styles.inputLine}>
                    <span className={styles.prompt}>{'>'}</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className={styles.input}
                        autoFocus
                    />
                </div>
            </div>
        </div>
    );
};

export default TerminalHero;
