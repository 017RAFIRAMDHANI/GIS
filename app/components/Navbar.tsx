'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import "../styles/header.css";
import { signOut } from "next-auth/react";
import Swal from "sweetalert2";

/* ── SVG Icons ── */
const LogoIcon = () => (
  <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.0321 25.8041L0.726323 14.4983C0.3256 14.0976 0.326724 13.4475 0.728829 13.0482L12.0322 1.82269L23.0845 12.8751C23.664 13.4546 23.664 14.3941 23.0845 14.9736L12.0321 25.8041Z" fill="#FFCC29" />
    <path fillRule="evenodd" clipRule="evenodd" d="M0.510815 10.4723C-0.0436564 9.90474 -0.0330424 8.99515 0.534522 8.44068L8.75586 0.409008C9.32342 -0.145463 10.233 -0.134849 10.7875 0.432716L18.8192 8.65405C19.3736 9.22161 19.363 10.1312 18.7954 10.6857L15.2883 14.1119C15.3283 13.8552 15.251 13.5834 15.0554 13.3832L10.2813 8.49639C9.95177 8.15903 9.41111 8.15272 9.07375 8.4823L4.18698 13.2563C3.98676 13.4519 3.90315 13.7219 3.93715 13.9796L0.510815 10.4723Z" fill="#00A859" />
    <path fillRule="evenodd" clipRule="evenodd" d="M0.432716 17.1625C-0.134849 17.717 -0.145463 18.6266 0.409008 19.1941L8.44068 27.4155C8.99515 27.983 9.90474 27.9936 10.4723 27.4392L18.6936 19.4075C19.2612 18.853 19.2718 17.9434 18.7173 17.3759L15.2913 13.8689C15.3248 14.1262 15.2412 14.3956 15.0413 14.5909L9.54366 19.9617L4.17287 14.4641C3.97755 14.2641 3.9002 13.9928 3.93982 13.7363L0.432716 17.1625ZM9.5592 8.24656C9.63963 8.23606 9.72123 8.237 9.80139 8.24938L9.68172 8.12688L9.5592 8.24656Z" fill="#2D9CDB" />
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
      <Link className="brand" href="/">
        <LogoIcon />
        <span className="brand-name">SingSet</span>
      </Link>

      {/* Desktop nav menu + user */}
      <div className="navbar-right-group">
        <div className="nav-menu">

          {/* Peta Sebaran */}
          <Link className="nav-item" href="/">
            <svg className="n-icon" viewBox="0 0 24 24">
              <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
            </svg>
            Peta Sebaran
          </Link>

          {/* Pengelola Aset dropdown */}
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

              <Link className="dd-item" href="/daftar_aset" onClick={() => setOpenDrop(null)}>
                <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                Daftar Aset
              </Link>

              <Link className="dd-item" href="/dokumen_aset" onClick={() => setOpenDrop(null)}>
                <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                Dokumen Aset
              </Link>

              <Link className="dd-item" href="/detail_aset" onClick={() => setOpenDrop(null)}>
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                Detail Aset
              </Link>

              <div className="dd-divider" />
              <div className="dd-label">Manajemen</div>

              <Link className="dd-item" href="/tambah_aset" onClick={() => setOpenDrop(null)}>
                <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                Tambah Aset Baru
              </Link>

              <Link className="dd-item" href="/validasi_data" onClick={() => setOpenDrop(null)}>
                <svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /></svg>
                Validasi Data
              </Link>
            </div>
          </div>

          {/* Infografis */}
          <Link className="nav-item" href="/infografis">
            <svg className="n-icon" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v4l3 3" />
            </svg>
            Infografis
          </Link>

          {/* Laporan Aset */}
          <Link className="nav-item" href="/laporan_aset">
            <svg className="n-icon" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            Laporan Aset
          </Link>
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
              <button className='dd-item danger borde-none' onClick={async () => {
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
                  await signOut({ callbackUrl: "/login" });
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