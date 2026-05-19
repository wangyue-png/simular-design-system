// Composer.jsx — plain-English task composer + skill picker

function SkillSuggestion({ icon: I, label, hot, onClick }) {
  return (
    <button className="sai-skill" onClick={onClick}>
      <span className="sai-skill-icon"><I /></span>
      <span className="sai-skill-label">{label}</span>
      {hot && <span className="sai-skill-hot">popular</span>}
    </button>
  );
}

function Composer({ value, setValue, onSubmit, disabled }) {
  return (
    <div className="sai-composer">
      <div className="sai-composer-head">
        <span className="sai-composer-eyebrow">New task</span>
        <span className="sai-composer-hint">Describe the outcome you want, in plain English.</span>
      </div>

      <div className="sai-composer-field">
        <textarea
          rows={2}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="e.g. find 5 YouTube creators in the personal-finance niche, put their stats in a Google Sheet"
        />
        <div className="sai-composer-row">
          <div className="sai-composer-pills">
            <span className="sai-mini-pill"><Icon.Globe /> Browser</span>
            <span className="sai-mini-pill"><Icon.Mouse /> Desktop</span>
            <span className="sai-mini-pill"><Icon.Terminal /> Terminal</span>
          </div>
          <button className="sai-btn sai-btn-accent" disabled={disabled || !value.trim()} onClick={onSubmit}>
            <span>Delegate to Sai</span><Icon.Send />
          </button>
        </div>
      </div>

      <div className="sai-skills-row">
        <SkillSuggestion icon={Icon.Sparkles} label="Tailor resume to job posting" hot />
        <SkillSuggestion icon={Icon.Sparkles} label="LinkedIn engagement queue" />
        <SkillSuggestion icon={Icon.Sparkles} label="Weekly investor digest" />
        <SkillSuggestion icon={Icon.Plus}     label="Browse all skills" />
      </div>
    </div>
  );
}

window.Composer = Composer;
