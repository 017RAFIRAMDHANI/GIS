"use client";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";


export default function Header() {
  const pathname = usePathname();

  if (pathname != "/login") {
    import("../globals.css");
  }
  if (pathname === "/login") return null;

  return (
    <nav className="bg-white shadow-md border-b">

      <div className="max-w-6xl mx-auto px-4">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">
            Web GIS Mahasiswa
          </div>

          {/* Menu */}
          <div className="flex items-center gap-8">

            <Link
              href="/"
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              Home
            </Link>

            <Link
              href="/mahasiswa"
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              Mahasiswa
            </Link>

            {/* <Link
              href="/create"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Tambah Data
            </Link> */}
            <button
              onClick={() => {
                const confirmed = window.confirm("Yakin ingin logout?");
                if (confirmed) {
                  signOut({
                    callbackUrl: "/login",
                  });
                }
              }}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>

          </div>

        </div>

      </div>

    </nav>
  );
}