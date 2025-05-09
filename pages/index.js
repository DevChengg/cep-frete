import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import TestaCep from "@/components/TestaCep";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="max-w-xl mx-auto p-4">
      <TestaCep />
    </main>
  );
}