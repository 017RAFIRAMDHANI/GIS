'use client';

interface SidebarToggleProps {
  sidebarCollapsed: boolean;
  mobileSidebarOpen: boolean;
  onToggle: () => void;
}

export default function SidebarToggle({ sidebarCollapsed, mobileSidebarOpen, onToggle }: SidebarToggleProps) {
    
  const cls = [
    'sb-toggle',
    !sidebarCollapsed ? 'shifted' : '',
    mobileSidebarOpen ? 'sidebar-open' : '',
  ].filter(Boolean).join(' ');

  return (
    <button className={cls} onClick={onToggle} title="Toggle Sidebar">
      <svg viewBox="0 0 24 24">
        <rect x="3" y="6" width="7" height="12" rx="1" fill="currentColor" stroke="none" />
        <line x1="14" y1="8" x2="21" y2="8" />
        <line x1="14" y1="12" x2="21" y2="12" />
        <line x1="14" y1="16" x2="21" y2="16" />
      </svg>
    </button>
  );
}