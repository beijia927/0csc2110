'use client';
import Translator from '../components/Translator';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">中日翻訳アプリ</h1>
      <Translator />
    </main>
  );
}