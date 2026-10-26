import React from 'react';
import {
  Activity, FolderKanban, Code2, BriefcaseBusiness, Mail,
  Terminal, FileText, Sparkles, Smartphone, Layers
} from 'lucide-react';

export function IconFor({ name, size = 18 }) {
  const props = { size, strokeWidth: 1.8 };
  const map = {
    user: <Activity {...props} />,
    projects: <FolderKanban {...props} />,
    code: <Code2 {...props} />,
    work: <BriefcaseBusiness {...props} />,
    mail: <Mail {...props} />,
    terminal: <Terminal {...props} />,
    file: <FileText {...props} />,
    mobile: <Smartphone {...props} />,
    layers: <Layers {...props} />
  };
  return map[name] || <Sparkles {...props} />;
}

export default function AppIcon({ app, onOpen, compact = false }) {
  return (
    <button
      type="button"
      className={`app-icon ${compact ? 'compact' : ''}`}
      onClick={() => onOpen(app.id)}
      title={`${app.name} — ${app.subtitle}`}
      aria-label={`Open ${app.name}`}
    >
      <span className="app-glyph" style={{ '--app-color': app.color || '#40C4FF' }}>
        <IconFor name={app.icon} size={compact ? 19 : 24} />
      </span>
      <span className="app-label">{app.name}</span>
    </button>
  );
}
