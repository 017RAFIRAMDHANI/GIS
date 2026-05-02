"use client";

import React, { useState } from "react";

export default function Page() {
  const [tab, setTab] = useState("informasi");
  const tabs = [
    { key: "informasi", label: "Informasi", icon: "i" },
    { key: "lokasi", label: "Lokasi", icon: "o" },
    { key: "media", label: "Media", icon: "o" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: 14,
        fontFamily: "'Segoe UI', Tahoma, sans-serif",
        color: "#1f2937",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          background: "#f9fbfd",
          border: "1px solid #edf1f6",
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontSize: 12,
          color: "#7a8699",
          marginBottom: 10,
          borderRadius: 6,
        }}
      >
        <div
          style={{
            width: 22,
            height: 22,
            background: "#e7f3ff",
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#22a3f5",
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          ≡
        </div>
        <span>Manajemen Aset</span>
        <span style={{ color: "#c0cad8" }}>›</span>
        <span>Detail Aset</span>
        <span style={{ color: "#c0cad8" }}>›</span>
        <span style={{ color: "#3aaef7", fontWeight: 600 }}>Edit Aset</span>
      </div>

      {/* CARD */}
      <div style={{ background: "#fff", borderRadius: 8, border: "1px solid #edf1f6", overflow: "hidden" }}>
        {/* CARD HEADER */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 16px 0",
            borderBottom: "1px solid #eef2f7",
            minHeight: 52,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", paddingBottom: 12 }}>
            <button
              style={{
                width: 18,
                height: 18,
                borderRadius: 4,
                border: "none",
                background: "transparent",
                cursor: "pointer",
                marginRight: 8,
                fontSize: 14,
                color: "#7b8798",
                padding: 0,
              }}
            >
              ‹
            </button>
            <span style={{ fontWeight: 600, fontSize: 14, color: "#2f3f53" }}>Edit Asset</span>
          </div>

          {/* TABS */}
          <div style={{ display: "flex", gap: 18, paddingBottom: 0 }}>
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  height: 40,
                  padding: "0 2px",
                  borderRadius: 0,
                  fontSize: 12,
                  cursor: "pointer",
                  fontWeight: tab === t.key ? 600 : 500,
                  border: "none",
                  borderBottom: tab === t.key ? "2px solid #35b3ff" : "2px solid transparent",
                  background: "transparent",
                  color: tab === t.key ? "#35b3ff" : "#6f7f92",
                }}
              >
                <span
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    border: `1px solid ${tab === t.key ? "#35b3ff" : "#98a6b8"}`,
                    color: tab === t.key ? "#35b3ff" : "#98a6b8",
                    fontSize: 9,
                    lineHeight: "12px",
                    textAlign: "center",
                    fontWeight: 700,
                  }}
                >
                  {t.icon}
                </span>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* BODY */}
        {tab === "informasi" && (
          <div style={{ padding: "12px 14px 18px" }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#6e7f93", marginBottom: 10 }}>
              Data Informasi Aset
            </div>

            <Grid4>
              <InputCard label="ID Asset" value="23423432" />
              <InputCard label="Nama Aset" value="Sekretariat Daerah" />
              <InputCard label="Nama Populer" value="Gedung Sate" />
              <InputCard label="Pengguna Barang" value="Dinas Pendidikan" />
            </Grid4>

            <Grid4>
              <InputCard label="Jenis Pemanfaatan" value="Sewa" hasArrow />
              <InputCard label="No Perizinan" value="12312442353252345" />
              <InputCard label="Mitra" value="PT Jaya" hasArrow />
              <InputCard label="Jangka Waktu Pemanfaatan" value="3 Hari" />
            </Grid4>

            <Grid4>
              <InputCard label="Tanggal Mulai" placeholder="mm/dd/yyyy" />
              <InputCard label="Tanggal Berakhir" placeholder="mm/dd/yyyy" />
              <InputCard label="Tipe Kontribusi" value="Tetap" hasArrow />
              <InputCard label="Status Validasi" value="Tervalidasi" hasArrow />
            </Grid4>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <TextareaCard label="Deskripsi Aset" />
              <TextareaCard label="Deskripsi Aset" />
            </div>
          </div>
        )}

        {tab === "lokasi" && <LokasiSection />}
        {tab === "media" && <MediaSection />}

        {/* FOOTER */}
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, padding: "14px 14px", borderTop: "1px solid #eef2f7" }}>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              minWidth: 98,
              height: 34,
              borderRadius: 6,
              border: "1px solid #79cafb",
              background: "#fff",
              color: "#35b3ff",
              fontSize: 12,
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            ↺ Reset
          </button>
          <button
            style={{
              minWidth: 132,
              height: 34,
              borderRadius: 6,
              border: "none",
              background: "#35b3ff",
              color: "#fff",
              fontSize: 12,
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
}

function Grid4({ children }: { children: React.ReactNode }) {
  return <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 8, marginBottom: 8 }}>{children}</div>;
}

function InputCard({ label, value, placeholder, hasArrow }: { label: string; value?: string; placeholder?: string; hasArrow?: boolean }) {
  return (
    <div style={{ border: "1px solid #dfe6ef", borderRadius: 6, padding: "6px 10px", position: "relative", minHeight: 44 }}>
      <div style={{ fontSize: 10, color: "#9aa8b8", marginBottom: 2 }}>{label}</div>
      <input
        defaultValue={value}
        placeholder={placeholder}
        style={{
          width: "100%",
          border: "none",
          outline: "none",
          fontSize: 13,
          fontWeight: 500,
          color: "#3b495b",
          background: "transparent",
          paddingRight: hasArrow ? 16 : 0,
        }}
      />
      {hasArrow && (
        <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-30%)", color: "#35b3ff", fontSize: 15 }}>
          ›
        </span>
      )}
    </div>
  );
}

function TextareaCard({ label }: { label: string }) {
  return (
    <div style={{ border: "1px solid #dfe6ef", borderRadius: 6, padding: "8px 10px" }}>
      <div style={{ fontSize: 10, color: "#9aa8b8", marginBottom: 2 }}>{label}</div>
      <textarea
        placeholder="Tulis Deskripsi"
        rows={3}
        style={{
          width: "100%",
          border: "none",
          outline: "none",
          fontSize: 13,
          color: "#3b495b",
          background: "transparent",
          resize: "none",
          fontFamily: "inherit",
        }}
      />
    </div>
  );
}

function LokasiSection() {
  const [isPolygonEditing, setIsPolygonEditing] = useState(false);
  const coordinateRows = [
    "106.81810, -6.16255",
    "106.81810, -6.16255",
    "106.81810, -6.16255",
    "106.81810, -6.16255",
    "106.81810, -6.16255",
  ];

  return (
    <div style={{ padding: "12px 14px 14px" }}>
      <div style={{ fontSize: 12, fontWeight: 600, color: "#6e7f93", marginBottom: 10 }}>Data Lokasi Aset</div>

      <div style={{ border: "1px solid #dfe6ef", borderRadius: 6, padding: "6px 10px", marginBottom: 10 }}>
        <div style={{ fontSize: 10, color: "#9aa8b8", marginBottom: 2 }}>Alamat Lengkap</div>
        <input
          defaultValue="Tulis Alamat"
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            fontSize: 13,
            color: "#3b495b",
            background: "transparent",
            fontFamily: "inherit",
          }}
        />
      </div>

      {isPolygonEditing && <div style={{ marginBottom: 8, color: "#607086", fontWeight: 600, fontSize: 14 }}>map</div>}

      <MapCard
        topButtons={
          isPolygonEditing ? (
            <div style={{ display: "flex", gap: 8 }}>
              {["Selesai", "Undo", "Reset", "Close Shape"].map((label, index) => (
                <button
                  key={label}
                  onClick={() => {
                    if (label === "Selesai") setIsPolygonEditing(false);
                  }}
                  style={{
                    minWidth: index === 0 ? 116 : 62,
                    height: 30,
                    borderRadius: 6,
                    border: index === 0 ? "none" : "1px solid #95d5fb",
                    background: index === 0 ? "#2db3ff" : "#f8fdff",
                    color: index === 0 ? "#fff" : "#36aff8",
                    fontSize: 11,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {index === 0 ? "‹ " : ""}
                  {label}
                </button>
              ))}
            </div>
          ) : (
            <button
              onClick={() => setIsPolygonEditing(true)}
              style={{
                minWidth: 116,
                height: 30,
                border: "none",
                borderRadius: 6,
                background: "#2db3ff",
                color: "#fff",
                fontSize: 11,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Edit Poligon
            </button>
          )
        }
        coordinateRows={coordinateRows}
      />
    </div>
  );
}

function MapCard({ topButtons, coordinateRows }: { topButtons: React.ReactNode; coordinateRows: string[] }) {
  return (
    <div style={{ border: "1px solid #dfe6ef", borderRadius: 6, padding: 8 }}>
      <div style={{ marginBottom: 8 }}>{topButtons}</div>
      <div
        style={{
          height: 208,
          borderRadius: 4,
          border: "1px solid #e5ebf3",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#eef2f5",
          backgroundImage:
            "linear-gradient(30deg, rgba(255,255,255,0.68) 20%, transparent 20%), linear-gradient(-30deg, rgba(255,255,255,0.56) 20%, transparent 20%), linear-gradient(90deg, rgba(255,255,255,0.4) 14%, transparent 14%)",
          backgroundSize: "120px 90px, 140px 92px, 100px 80px",
          backgroundPosition: "0 0, 0 0, 0 0",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "46%",
            top: "40%",
            width: 110,
            height: 42,
            border: "2px solid #7f3dff",
            background: "rgba(165, 100, 255, 0.35)",
            transform: "rotate(13deg)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: "47%",
            top: "34%",
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#fff",
            border: "3px solid #ffc107",
            boxShadow: "0 0 0 2px #7f3dff",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 8,
            bottom: 8,
            width: 116,
            borderRadius: 4,
            border: "1px solid #d8e0ea",
            background: "rgba(255,255,255,0.95)",
            padding: "6px 8px",
            fontSize: 10.5,
            color: "#5a6777",
            lineHeight: 1.6,
          }}
        >
          <div style={{ color: "#8b97a6", marginBottom: 2 }}>Koordinat Titik</div>
          {coordinateRows.map((row, idx) => (
            <div key={`${row}-${idx}`}>
              {idx + 1}. {row}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MediaSection() {
  const photoItems = [
    { id: 1, tone: "linear-gradient(135deg, #8ca0af 0%, #4e5f6e 100%)" },
    { id: 2, tone: "linear-gradient(135deg, #9da6b1 0%, #697380 100%)" },
    { id: 3, tone: "linear-gradient(135deg, #afa48f 0%, #786f5e 100%)" },
    { id: 4, tone: "linear-gradient(135deg, #9c8e79 0%, #6a5e4c 100%)" },
  ];

  return (
    <div style={{ padding: "12px 14px 14px" }}>
      <div style={{ fontSize: 12, fontWeight: 600, color: "#6e7f93", marginBottom: 10 }}>Data Media</div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 10 }}>
        <div style={{ border: "1px solid #dfe6ef", borderRadius: 6, padding: "6px 10px", minHeight: 44 }}>
          <div style={{ fontSize: 10, color: "#9aa8b8", marginBottom: 2 }}>Unggah Foto</div>
          <button
            style={{
              border: "none",
              background: "transparent",
              color: "#26a8f6",
              padding: 0,
              fontSize: 12.5,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Unggah atau Drag foto Disini
          </button>
        </div>

        <div style={{ border: "1px solid #dfe6ef", borderRadius: 6, padding: "6px 10px", minHeight: 44 }}>
          <div style={{ fontSize: 10, color: "#9aa8b8", marginBottom: 2 }}>Link Youtube</div>
          <input
            defaultValue="https://www.youtube.com/watch?v=2X_GgUhVaBE"
            style={{
              width: "100%",
              border: "none",
              outline: "none",
              fontSize: 12.5,
              color: "#3b495b",
              background: "transparent",
              fontFamily: "inherit",
            }}
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 10, alignItems: "start" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 8 }}>
          {photoItems.map((item) => (
            <div
              key={item.id}
              style={{
                position: "relative",
                borderRadius: 6,
                overflow: "hidden",
                height: 74,
                border: "1px solid #dfe6ef",
                background: item.tone,
              }}
            >
              <button
                style={{
                  position: "absolute",
                  top: 4,
                  right: 4,
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  border: "none",
                  background: "#ea4f4f",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 700,
                  cursor: "pointer",
                  lineHeight: 1,
                }}
              >
                🗑
              </button>
            </div>
          ))}
        </div>

        <div
          style={{
            border: "1px solid #8dd4ff",
            borderRadius: 6,
            padding: 4,
            display: "flex",
            alignItems: "center",
            gap: 10,
            minHeight: 80,
          }}
        >
          <div
            style={{
              width: 120,
              height: 66,
              borderRadius: 4,
              border: "1px solid #d9e2ec",
              background: "linear-gradient(135deg, #95a8b5 0%, #5c6d7c 100%)",
              flexShrink: 0,
            }}
          />
          <div style={{ minWidth: 0 }}>
            <div style={{ color: "#5a6777", fontSize: 12.5, fontWeight: 500, marginBottom: 2 }}>Video Title Here</div>
            <div style={{ color: "#97a4b4", fontSize: 12 }}>Duration: 8:06</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Placeholder({ text }: { text: string }) {
  return <div style={{ padding: 32, textAlign: "center", color: "#9aa8b8", fontSize: 12 }}>{text}</div>;
}