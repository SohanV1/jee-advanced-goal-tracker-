# 🎯 JEE Advanced 2028 Goal Tracker
### Academic Syllabus Velocity, Spaced Repetition & Mock Analytics Engine

An offline-first, client-side academic goal tracking and analytics dashboard engineered to systematically conquer the JEE Advanced syllabus across Physics, Chemistry, and Mathematics through structured 6-stage spaced repetition.

---

## ⚡ Architectural Highlights

- **Offline-First Persistence**: Zero backend dependency required for standard tracking; state automatically syncs to browser `localStorage` (`jee28-tracker-v1`) with instant data recovery.
- **Data Portability**: Full JSON backup export and import functionality ensuring full data ownership across devices without vendor lock-in.
- **6-Stage Mastery Lifecycle**: Eliminates passive re-reading by enforcing a deterministic progression for every chapter:
  1. `Theory`: Conceptual grounding & short formula notes.
  2. `Module`: Coaching module illustrations & standard exercises.
  3. `PYQs`: Past 15+ years chapter-wise JEE Advanced problems under timed conditions.
  4. `Revision 1`: Within 7 days of completion.
  5. `Revision 2`: Within 30 days of completion.
  6. `Revision 3`: Pre-mock simulation revision pass.
- **Multi-Exam Mock Scoreboard**: Dynamic score tracking and custom HTML5 Canvas visualization for JEE Mains, JEE Advanced, and KCET test performance.
- **Teacher & Mentor Access**: Optional cloud synchronization via Firebase Firestore (`firestore.rules`) enabling read-only link sharing for educators and mentors.

---

## 🏗️ System Views & Capabilities

| View | Primary Function | Technical Implementation |
| :--- | :--- | :--- |
| **Dashboard** | Mission control & daily focus queue | Heuristic queue builder suggesting next high-impact chapter action |
| **Chapters Board** | Multi-subject coverage tracker | Dynamic filterable card matrix across Physics, Chemistry & Math |
| **Backlog Cockpit** | Technical debt & stalled topic management | Action-oriented triage modal categorizing next required task |
| **Weekly Planner** | Intentional focus & non-negotiables | Weekly sprint notes and persistent non-negotiable task checklist |
| **Scoreboard** | Mock exam analytics | Real-time dual-resolution canvas plotting score trajectory |

---

## 🚀 Getting Started

### Local Setup (Zero Dependencies)
Because this application is built with standard web technologies, it requires no build tools or package installation:

```bash
# Clone the repository
git clone https://github.com/SohanV1/jee-advanced-goal-tracker-.git
cd jee-advanced-goal-tracker-

# Launch in any modern browser
# On Windows:
start index.html

# On Linux / macOS:
xdg-open index.html || open index.html
```

Or serve via any static HTTP server:
```bash
npx serve .
```

---

## 🔒 Security & Firestore Rules

When Firebase cloud sync is enabled, security rules (`firestore.rules`) enforce strict user-isolation and read-only access for teacher links:
- Only authenticated users can write to their own tracking documents.
- Shared tokens grant read-only projection access without exposing raw write pipelines.

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).
