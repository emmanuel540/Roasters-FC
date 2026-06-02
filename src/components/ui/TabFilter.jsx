import { useState } from 'react';

export default function TabFilter({ tabs, onTabChange }) {
  const [active, setActive] = useState(tabs[0]);
  return (
    <div className="tab-filter">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={tab === active ? 'tab-active' : ''}
          onClick={() => { setActive(tab); onTabChange?.(tab); }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
