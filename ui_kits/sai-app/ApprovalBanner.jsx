// ApprovalBanner.jsx — inline interrupt asking the human to approve
// before the agent does something consequential (send email, run terminal,
// charge a card, etc.). Lives inside the activity stream column.

function ApprovalBanner({ action, target, onApprove, onDeny }) {
  return (
    <div className="sai-approval">
      <div className="sai-approval-head">
        <span className="sai-approval-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 9v4M12 17h.01"/>
            <path d="M10.3 3.86a2 2 0 0 1 3.4 0l8.1 13.5a2 2 0 0 1-1.7 3.04H3.9a2 2 0 0 1-1.7-3.04l8.1-13.5z"/>
          </svg>
        </span>
        <div>
          <div className="sai-approval-title">Approval required</div>
          <div className="sai-approval-sub">Sai paused before a consequential action — your call.</div>
        </div>
      </div>

      <div className="sai-approval-action">
        <div className="sai-approval-row"><span className="sai-approval-key">Action</span><span>{action}</span></div>
        <div className="sai-approval-row"><span className="sai-approval-key">Target</span><span>{target}</span></div>
      </div>

      <div className="sai-approval-buttons">
        <button className="sai-btn sai-btn-secondary" onClick={onDeny}>
          <Icon.X /> <span>Deny</span>
        </button>
        <button className="sai-btn sai-btn-accent" onClick={onApprove}>
          <Icon.Check /> <span>Approve & continue</span>
        </button>
      </div>
    </div>
  );
}

window.ApprovalBanner = ApprovalBanner;
