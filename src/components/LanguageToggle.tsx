"use client";

import { useState } from "react";

const labels = {
  en: {
    name: "English",
    demo: "Synthetic demo",
    packet: "Expert-review preparation packet",
    posture: "No real patient data",
  },
  zh: {
    name: "繁體中文",
    demo: "合成示範",
    packet: "專家審閱準備包",
    posture: "不使用真實病人資料",
  },
  ja: {
    name: "日本語",
    demo: "合成デモ",
    packet: "専門家レビュー準備パケット",
    posture: "実在患者データなし",
  },
} as const;

type LanguageKey = keyof typeof labels;

export function LanguageToggle() {
  const [language, setLanguage] = useState<LanguageKey>("en");
  const activeLabels = labels[language];

  return (
    <section className="language-toggle" aria-label="Local UI label language">
      <div className="segmented-control" role="group" aria-label="UI label language">
        {(Object.keys(labels) as LanguageKey[]).map((key) => (
          <button
            aria-pressed={language === key}
            key={key}
            onClick={() => setLanguage(key)}
            type="button"
          >
            {labels[key].name}
          </button>
        ))}
      </div>
      <dl>
        <div>
          <dt>Demo</dt>
          <dd>{activeLabels.demo}</dd>
        </div>
        <div>
          <dt>Packet</dt>
          <dd>{activeLabels.packet}</dd>
        </div>
        <div>
          <dt>Data</dt>
          <dd>{activeLabels.posture}</dd>
        </div>
      </dl>
    </section>
  );
}
