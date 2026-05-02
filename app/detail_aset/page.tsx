"use client";

import React from "react";
import { useRouter } from "next/navigation"; // ⬅️ WAJIB

// ================= STYLE =================
const styles: { [key: string]: React.CSSProperties } = {
  page: {
    background: "#f5f7fb",
    padding: 24,
    fontFamily: "sans-serif",
  },

  card: {
    background: "#fff",
    borderRadius: 12,
    padding: 20,
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },

  breadcrumb: {
    fontSize: 13,
    color: "#6b7280",
    marginBottom: 10,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: 600,
  },

  actions: {
    display: "flex",
    gap: 10,
  },

  btn: {
    background: "#1a8fe3",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "8px 14px",
    cursor: "pointer",
    fontSize: 13,
  },

  gallery: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: 12,
    marginBottom: 20,
  },

  mainImage: {
    width: "100%",
    height: 250,
    objectFit: "cover",
    borderRadius: 10,
  },

  sideImages: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
  },

  smallImage: {
    width: "100%",
    height: 120,
    objectFit: "cover",
    borderRadius: 8,
  },

  sectionTitle: {
    fontWeight: 600,
    marginBottom: 12,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
    fontSize: 13,
  },

  field: {
    marginBottom: 10,
  },

  label: {
    color: "#6b7280",
  },

  value: {
    fontWeight: 500,
  },
};

// ================= COMPONENT =================
export default function Page() {
  const router = useRouter(); // ⬅️ INIT ROUTER

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        {/* BREADCRUMB */}
        <div style={styles.breadcrumb}>
          Manajemen Reklame &gt; Detail Aset
        </div>

        {/* HEADER */}
        <div style={styles.header}>
          <div style={styles.title}>
            Reklame Simpang Nagoya (DPMPTSP)
          </div>

          <div style={styles.actions}>
            <button style={styles.btn}>Lihat Peta</button>
            <button style={styles.btn}>Download CSV</button>

            {/* ⬇️ INI YANG DIPENTINGIN */}
            <button
              style={styles.btn}
              onClick={() => router.push("/edit_aset")}
            >
              Edit Informasi Aset
            </button>
          </div>
        </div>

        {/* GALLERY */}
        <div style={styles.gallery}>
          <img
            src="https://via.placeholder.com/600x300"
            style={styles.mainImage}
          />

          <div style={styles.sideImages}>
            <img src="https://via.placeholder.com/300" style={styles.smallImage} />
            <img src="https://via.placeholder.com/300" style={styles.smallImage} />
            <img src="https://via.placeholder.com/300" style={styles.smallImage} />
            <img src="https://via.placeholder.com/300" style={styles.smallImage} />
          </div>
        </div>

        {/* DETAIL */}
        <div>
          <div style={styles.sectionTitle}>Rincian Perizinan</div>

          <div style={styles.grid}>

            {/* KIRI */}
            <div>
              <div style={styles.field}>
                <div style={styles.label}>ID Perizinan</div>
                <div style={styles.value}>1712687</div>
              </div>

              <div style={styles.field}>
                <div style={styles.label}>Nama Pemilik</div>
                <div style={styles.value}>
                  Dinas Penanaman Modal dan Pelayanan Terpadu
                </div>
              </div>

              <div style={styles.field}>
                <div style={styles.label}>Instansi</div>
                <div style={styles.value}>DPMPTSP</div>
              </div>

              <div style={styles.field}>
                <div style={styles.label}>Titik Lokasi</div>
                <div style={styles.value}>29.700 m²</div>
              </div>

              <div style={styles.field}>
                <div style={styles.label}>Alamat</div>
                <div style={styles.value}>
                  Lubuk Baja, Batam City, Riau Islands
                </div>
              </div>

              <div style={styles.field}>
                <div style={styles.label}>Status Perizinan</div>
                <div style={styles.value}>Aktif</div>
              </div>
            </div>

            {/* KANAN */}
            <div>
              <div style={styles.field}>
                <div style={styles.label}>Tanggal Pengajuan</div>
                <div style={styles.value}>-</div>
              </div>

              <div style={styles.field}>
                <div style={styles.label}>Tanggal Keputusan</div>
                <div style={styles.value}>-</div>
              </div>

              <div style={styles.field}>
                <div style={styles.label}>Kondisi</div>
                <div style={styles.value}>Baik</div>
              </div>

              <div style={styles.field}>
                <div style={styles.label}>Masa Berlaku</div>
                <div style={styles.value}>Rp 10.831.500.000</div>
              </div>

              <div style={styles.field}>
                <div style={styles.label}>Dokumen Perizinan</div>
                <div style={{ ...styles.value, color: "#1a8fe3", cursor: "pointer" }}>
                  Download
                </div>
              </div>

              <div style={styles.field}>
                <div style={styles.label}>Deskripsi</div>
                <div style={styles.value}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}