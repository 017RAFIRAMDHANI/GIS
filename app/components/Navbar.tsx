'use client';

import { useState, useEffect, useRef } from 'react';
import "../styles/header.css";
import { signOut } from "next-auth/react";
import Swal from "sweetalert2";

/* ── SVG Icons ── */
const LogoIcon = () => (
  <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
    <g transform="translate(15,15) rotate(45) translate(-9,-9)">
      <rect x="0" y="0" width="8" height="8" rx="1.2" fill="#27ae60" />
      <rect x="10" y="0" width="8" height="8" rx="1.2" fill="#f39c12" />
      <rect x="0" y="10" width="8" height="8" rx="1.2" fill="#3498db" />
      <rect x="10" y="10" width="8" height="8" rx="1.2" fill="#2ecc71" />
    </g>
  </svg>
);

interface NavbarProps {
  onDrawerOpen: () => void;
}

export default function Navbar({ onDrawerOpen }: NavbarProps) {
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const toggleDrop = (id: string) => {
    setOpenDrop(prev => (prev === id ? null : id));
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setOpenDrop(null);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      {/* Brand */}
      <a className="brand" href="#">
        <LogoIcon />
        <span className="brand-name">SingSet</span>
      </a>

      {/* Desktop nav menu + user */}
      <div className="navbar-right-group">
        <div className="nav-menu">

          {/* Peta Sebaran */}
          <div className="nav-item active">
            <svg className="n-icon" viewBox="0 0 24 24">
              <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
            </svg>
            Peta Sebaran
          </div>

          {/* Pengelola Aset */}
          <div
            className={`nav-item${openDrop === 'aset' ? ' open' : ''}`}
            onClick={() => toggleDrop('aset')}
          >
            <svg className="n-icon" viewBox="0 0 24 24">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
            Pengelola Aset
            <svg className="n-caret" viewBox="0 0 24 24">
              <polyline points="6 9 12 15 18 9" />
            </svg>
            <div className={`dropdown${openDrop === 'aset' ? ' show' : ''}`}>
              <div className="dd-label">Modul Aset</div>
              <div className="dd-item">
                <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                Daftar Aset
              </div>
              <div className="dd-item">
                <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                Dokumen Aset
              </div>
              <div className="dd-item">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                Detail Aset
              </div>
              <div className="dd-divider" />
              <div className="dd-label">Manajemen</div>
              <div className="dd-item">
                <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                Tambah Aset Baru
              </div>
              <div className="dd-item">
                <svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /></svg>
                Hapus Aset
              </div>
            </div>
          </div>

          {/* Infografis */}
          <div className="nav-item">
            <svg className="n-icon" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v4l3 3" />
            </svg>
            Infografis
          </div>

          {/* Laporan Aset */}
          <div className="nav-item">
            <svg className="n-icon" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            Laporan Aset
          </div>
        </div>

        {/* Desktop user */}
        <div className="navbar-right">
          <div
            className={`user-btn${openDrop === 'user' ? ' open' : ''}`}
            onClick={() => toggleDrop('user')}
          >
            <div className="avatar">
              <svg viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            Admin BPKAD
            <svg className="n-caret" viewBox="0 0 24 24">
              <polyline points="6 9 12 15 18 9" />
            </svg>
            <div className={`dropdown right${openDrop === 'user' ? ' show' : ''}`}>
              <div className="dd-item">
                <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                Profil Saya
              </div>
              <div className="dd-item">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /></svg>
                Pengaturan Akun
              </div>
              <div className="dd-item">
                <svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                Ubah Password
              </div>
              <div className="dd-divider" />
              
                <button className='dd-item danger borde-none'  onClick={async () => {
                                const result = await Swal.fire({
                                  title: "Yakin ingin logout?",
                                  text: "Sesi Anda akan diakhiri.",
                                  icon: "warning",
                                  showCancelButton: true,
                                  confirmButtonText: "Ya, logout",
                                  cancelButtonText: "Batal",
                                  reverseButtons: true,
                                });
                
                                if (result.isConfirmed) {
                                  await signOut({
                                    callbackUrl: "/login",
                                  });
                                }
                              }}>

                <svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
                Keluar
                </button>
              
            </div>
          </div>
        </div>
      </div>

      {/* Mobile hamburger */}
      <button className="nav-hamburger" onClick={onDrawerOpen}>
        <svg viewBox="0 0 24 24">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </nav>
  );
}