import React from "react";
import "./GoalRoadmap.css";

// PUBLIC_INTERFACE
function GoalRoadmap() {
  /**
   * This component renders the 'My Goal Roadmap' section with a prominent title and
   * a modern, minimalistic horizontal progress path representing roadmap milestones.
   * This is static demo data; actual milestone and progress should come via props or state.
   */
  const milestones = [
    { label: "Start", reached: true },
    { label: "Milestone 1", reached: true },
    { label: "Milestone 2", reached: false },
    { label: "Goal", reached: false },
  ];

  // Calculate progress percentage for bar width
  const reachedCount = milestones.filter(m => m.reached).length;
  const progress =
    milestones.length > 1
      ? ((reachedCount - 1) / (milestones.length - 1)) * 100
      : 0;

  return (
    <section className="goal-roadmap-section shadow-lg">
      <h2 className="goal-roadmap-title">My Goal Roadmap</h2>
      <div className="goal-roadmap-wrapper">
        <div className="goal-roadmap-bar-bg">
          <div
            className="goal-roadmap-bar-fg"
            style={{ width: `${progress}%` }}
            aria-label={`Progress: ${reachedCount - 1} of ${milestones.length - 1}`}
          />
          <div className="goal-roadmap-nodes">
            {milestones.map((m, idx) => (
              <div
                className={`goal-roadmap-node${m.reached ? " reached" : ""}`}
                key={m.label}
                style={{
                  left: `calc(${(idx / (milestones.length - 1)) * 100}% - 12px)`,
                }}
                aria-label={m.label}
              >
                <span className="goal-roadmap-label">{m.label}</span>
                <span className="goal-roadmap-dot" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GoalRoadmap;
