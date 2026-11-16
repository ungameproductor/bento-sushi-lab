import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

export function Accordion({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const reactId = useId();
  const panelId = `${reactId}-panel`;
  const buttonId = `${reactId}-button`;

  return (
    <div className={`acc ${open ? "open" : ""}`}>
      <h2>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          {question}
          <ChevronDown aria-hidden="true" />
        </button>
      </h2>
      <div className="acc-panel" id={panelId} role="region" aria-labelledby={buttonId} aria-hidden={!open}>
        <div className="acc-panel-inner">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
