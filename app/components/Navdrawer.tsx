'use client';

import { useState, useEffect } from 'react';

interface NavDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function NavDrawer({ isOpen, onClose }: NavDrawerProps) {
    const [asetOpen, setAsetOpen] = useState(false);

    // Prevent body scroll when drawer open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <>
            {/* Overlay */}
            <div
                className={`nav-overlay${isOpen ? ' show' : ''}`}
                style={{ display: isOpen ? 'block' : 'none' }}
                onClick={onClose}
            />

            {/* Drawer */}
            <div className={`nav-drawer${isOpen ? ' show' : ''}`}>
                {/* Header */}
                <div className="drawer-header">
                    <div className="drawer-brand">
                        <svg width="26" height="26" viewBox="0 0 30 30" fill="none">
                            <g transform="translate(15,15) rotate(45) translate(-9,-9)">
                                <rect x="0" y="0" width="8" height="8" rx="1.2" fill="#27ae60" />
                                <rect x="10" y="0" width="8" height="8" rx="1.2" fill="#f39c12" />
                                <rect x="0" y="10" width="8" height="8" rx="1.2" fill="#3498db" />
                                <rect x="10" y="10" width="8" height="8" rx="1.2" fill="#2ecc71" />
                            </g>
                        </svg>
                        <span>SingSet</span>
                    </div>
                    <div className="drawer-close" onClick={onClose}>
                        <svg viewBox="0 0 24 24">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </div>
                </div>

                <div className="drawer-section-label">Menu</div>

                {/* Peta Sebaran */}
                <div className="drawer-item active" onClick={onClose}>
                    <svg viewBox="0 0 24 24">
                        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                    </svg>
                    Peta Sebaran
                </div>

                {/* Pengelola Aset accordion */}
                <div
                    className={`drawer-item${asetOpen ? ' open' : ''}`}
                    onClick={() => setAsetOpen(prev => !prev)}
                >
                    <svg viewBox="0 0 24 24">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <path d="M8 21h8M12 17v4" />
                    </svg>
                    Pengelola Aset
                    <svg className="di-caret" viewBox="0 0 24 24">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </div>
                <div className={`drawer-sub${asetOpen ? ' open' : ''}`}>
                    <div className="drawer-sub-item">
                        <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                        Daftar Aset
                    </div>
                    <div className="drawer-sub-item">
                        <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                        Dokumen Aset
                    </div>
                    <div className="drawer-sub-item">
                        <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                        Tambah Aset Baru
                    </div>
                </div>

                {/* Infografis */}
                <div className="drawer-item">
                    <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 8v4l3 3" />
                    </svg>
                    Infografis
                </div>

                {/* Laporan Aset */}
                <div className="drawer-item">
                    <svg viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                    Laporan Aset
                </div>

                <div className="drawer-divider" />

                {/* Minimize */}
                <div className="drawer-minimize" onClick={onClose}>
                    <svg viewBox="0 0 24 24">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Minimize
                </div>

                {/* User */}
                <div className="drawer-user">
                    <div className="du-icon">
                        <svg viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    </div>
                    <div className="drawer-user-info">
                        <div className="drawer-user-name">Admin BPKAD</div>
                        <div className="drawer-user-role">Administrator</div>
                    </div>
                    <svg className="du-arr" viewBox="0 0 24 24">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </div>
            </div>
        </>
    );
}