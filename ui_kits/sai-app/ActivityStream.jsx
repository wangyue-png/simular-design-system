// ActivityStream.jsx — step-by-step log of what the agent did
// Each step has a kind (click, type, browse, terminal, screenshot, plan),
// a short description, and an optional "thumbnail" representing the screen.

function StepIcon({ kind }) {
  const map = { click: Icon.Mouse, type: Icon.Type, browse: Icon.Globe, terminal: Icon.Terminal, plan: Icon.Sparkles };
  const C = map[kind] || Icon.Mouse;
  return <span className="sai-step-icon"><C /></span>;
}

function ActivityStep({ step }) {
  return (
    <div className={"sai-step " + (step.current ? "current" : "")}>
      <div className="sai-step-rail">
        <div className={"sai-step-marker " + step.status} />
      </div>
      <div className="sai-step-body">
        <div className="sai-step-head">
          <StepIcon kind={step.kind} />
          <span className="sai-step-label">{step.label}</span>
          <span className="sai-step-time">{step.time}</span>
        </div>
        {step.detail && <div className="sai-step-detail">{step.detail}</div>}
        {step.code && (
          <pre className="sai-step-code"><code>{step.code}</code></pre>
        )}
      </div>
    </div>
  );
}

function ActivityStream({ steps, plan }) {
  return (
    <div className="sai-activity">
      {/* Plan recap */}
      <div className="sai-plan">
        <div className="sai-plan-head">
          <span style={{ color: "var(--simular-green-deep)" }}><Icon.Sparkles /></span>
          <span>Plan</span>
          <Pill kind="accent" dot={false} style={{ marginLeft: "auto", padding: "2px 8px", fontSize: 10 }}>{plan.length} steps</Pill>
        </div>
        <ol className="sai-plan-list">
          {plan.map((p, i) => (
            <li key={i} className={p.done ? "done" : p.current ? "current" : ""}>
              <span className="sai-plan-marker">{p.done ? <Icon.Check /> : i + 1}</span>
              <span>{p.text}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Step log */}
      <div className="sai-steps">
        {steps.map((s, i) => <ActivityStep key={i} step={s} />)}
      </div>
    </div>
  );
}

window.ActivityStream = ActivityStream;
