import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Send } from 'lucide-react';
import GlitchText from '../ui/GlitchText';
import { terminalCommands } from '../../data/terminal';
import '../../styles/terminal.css';

export default function TerminalSection({ onPlaySound }) {
  const [history, setHistory] = useState([
    { type: 'system', text: '🕷️ SPIDER-VERSE OS [Version 3.5.24]' },
    { type: 'system', text: 'Initializing neural link to Rahul Rajput developer dossier...' },
    { type: 'system', text: 'Type "help" to inspect available command routines.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (onPlaySound) onPlaySound('glitch');

    // Add user command to history
    const newEntry = { type: 'input', text: `rahul@spiderverse:~$ ${rawCmd}` };

    if (cmd === 'clear') {
      setHistory([]);
      setCmdHistory(prev => [cmd, ...prev]);
      setInputValue('');
      return;
    }

    const response = terminalCommands[cmd];
    let responseEntries = [];

    if (response) {
      responseEntries = response.map(line => ({ type: 'response', text: line }));
    } else {
      responseEntries = [
        { type: 'error', text: `Command not recognized: "${rawCmd}". Type "help" for active frequencies.` }
      ];
    }

    setHistory(prev => [...prev, newEntry, ...responseEntries]);
    setCmdHistory(prev => [cmd, ...prev]);
    setHistoryIndex(-1);
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputValue);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0 && historyIndex < cmdHistory.length - 1) {
        const nextIdx = historyIndex + 1;
        setHistoryIndex(nextIdx);
        setInputValue(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const prevIdx = historyIndex - 1;
        setHistoryIndex(prevIdx);
        setInputValue(cmdHistory[prevIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputValue('');
      }
    }
  };

  const executeQuickCmd = (cmd) => {
    setInputValue(cmd);
    handleCommand(cmd);
  };

  return (
    <section className="sv-terminal-section" id="terminal">
      <div className="sv-terminal-inner">
        {/* Section Heading */}
        <div className="sv-section-header">
          <span className="sv-section-kicker">CHAPTER 05 // NEURAL TERMINAL</span>
          <GlitchText 
            text="INTERACTIVE TERMINAL." 
            as="h2" 
            className="sv-section-title"
            glow="cyan"
          />
        </div>

        {/* Terminal Window Container */}
        <div className="sv-terminal-window" onClick={() => inputRef.current?.focus()}>
          {/* Top Title Bar */}
          <div className="sv-terminal-topbar">
            <div className="sv-terminal-buttons">
              <span className="sv-term-btn red" />
              <span className="sv-term-btn yellow" />
              <span className="sv-term-btn green" />
            </div>
            <span className="sv-terminal-title">rahul@spiderverse: ~ (zsh)</span>
            <span className="sv-terminal-meta">TTY // UTF-8</span>
          </div>

          {/* Terminal Body */}
          <div className="sv-terminal-body">
            {history.map((line, idx) => (
              <div 
                key={idx} 
                className={`terminal-line ${line.type === 'input' ? 'cmd-input' : line.type === 'error' ? 'text-red' : 'cmd-response'}`}
              >
                {line.text}
              </div>
            ))}

            {/* Input Prompt Row */}
            <div className="sv-terminal-input-row">
              <span className="sv-prompt-prefix">rahul@spiderverse:~$</span>
              <input
                ref={inputRef}
                type="text"
                className="sv-terminal-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                spellCheck={false}
                autoComplete="off"
                placeholder="type a command (help, skills, projects)..."
              />
            </div>
            <div ref={terminalEndRef} />
          </div>
        </div>

        {/* Quick Command Pills for mobile & quick clicking */}
        <div className="sv-terminal-quick-cmds">
          <span style={{ fontSize: '11px', color: 'var(--sv-gray-muted)', fontFamily: 'var(--font-mono)', alignSelf: 'center' }}>
            QUICK PROTOCOLS:
          </span>
          {['help', 'about', 'skills', 'projects', 'experience', 'spider-sense', 'clear'].map((cmd) => (
            <button
              key={cmd}
              className="quick-cmd-btn"
              onClick={() => executeQuickCmd(cmd)}
            >
              ${cmd}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

