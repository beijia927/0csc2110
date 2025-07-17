'use client';
import { useState } from 'react';

export default function Translator() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [loading, setLoading] = useState(false);

  const translateText = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('https://libretranslate.de/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          q: inputText,
          source: 'zh',
          target: 'ja',
          format: 'text'
        })
      });
      const data = await res.json();
      setTranslatedText(data.translatedText);
    } catch (err) {
      setTranslatedText('エラーが発生しました');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded shadow">
      <textarea
        className="w-full border p-2 mb-4"
        rows={4}
        placeholder="中国語を入力してください"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className="w-full bg-blue-500 text-white py-2 rounded mb-4"
        onClick={translateText}
        disabled={loading}
      >
        {loading ? '翻訳中...' : '翻訳する'}
      </button>
      <div className="whitespace-pre-wrap min-h-[4rem] text-gray-800">
        {translatedText}
      </div>
    </div>
  );
}