import { useState } from "react";
import {
  CheckCircle2,
  Circle,
  Sparkles,
  BookOpen,
} from "lucide-react";

function Roadmap({ careerData, onResources }) {

  const [completed, setCompleted] = useState([]);

  const roadmap = [
    {
      title: "Programming Fundamentals",
      duration: "Week 1–2",
      description:
        "Strengthen programming fundamentals and object-oriented thinking.",
      skills: [
        "Programming Basics",
        "OOP",
        "Problem Solving",
      ],
    },

    {
      title: "Data Structures & Algorithms",
      duration: "Week 3–6",
      description:
        "Build strong problem-solving and coding interview skills.",
      skills: [
        "Arrays",
        "Strings",
        "Linked Lists",
        "Trees",
        "Graphs",
        "Dynamic Programming",
      ],
    },

    {
      title: "Core Computer Science",
      duration: "Week 7–8",
      description:
        "Learn the fundamentals commonly tested in technical interviews.",
      skills: [
        "DBMS",
        "Operating Systems",
        "Computer Networks",
      ],
    },

    {
      title: "Development Skills",
      duration: "Week 9–10",
      description:
        "Build practical development experience through projects.",
      skills: [
        "Web Development",
        "APIs",
        "Git & GitHub",
      ],
    },

    {
      title: "Interview Preparation",
      duration: "Week 11–12",
      description:
        "Convert your preparation into interview readiness.",
      skills: [
        "Aptitude",
        "Coding Practice",
        "Mock Interviews",
      ],
    },
  ];


  const toggleSkill = (skill) => {

    setCompleted((prev) =>
      prev.includes(skill)
        ? prev.filter((item) => item !== skill)
        : [...prev, skill]
    );

  };


  const totalSkills = roadmap.reduce(
    (sum, phase) => sum + phase.skills.length,
    0
  );

  const percentage = Math.round(
    (completed.length / totalSkills) * 100
  );


  return (
    <div className="roadmap-page">

      <div className="roadmap-header">

        <div>

          <div className="eyebrow">
            <Sparkles size={16} />
            AI GENERATED ROADMAP
          </div>

          <h1>
            {careerData?.role}
          </h1>

          <p>
            {careerData?.company}
            {" · "}
            {careerData?.experience}
            {" · "}
            {careerData?.hoursPerDay} hours/day
          </p>

        </div>


        <div className="progress-box">

          <strong>
            {percentage}%
          </strong>

          <span>
            Complete
          </span>

        </div>

      </div>


      <div className="progress-bar">

        <div
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>


      <div className="ai-summary">

        <Sparkles size={20} />

        <div>

          <strong>
            Your personalized path
          </strong>

          <p>
            Based on your target role, experience level
            and available learning time, this roadmap
            focuses on the skills that matter most.
          </p>

        </div>

      </div>


      <div className="timeline">

        {roadmap.map((phase, index) => (

          <div
            className="phase"
            key={phase.title}
          >

            <div className="phase-number">
              {index + 1}
            </div>


            <div className="phase-content">

              <div className="phase-title">

                <h2>
                  {phase.title}
                </h2>

                <span>
                  {phase.duration}
                </span>

                <p>
                  {phase.description}
                </p>

              </div>


              <div className="skill-list">

                {phase.skills.map((skill) => {

                  const isDone =
                    completed.includes(skill);

                  return (

                    <button
                      className={`skill-item ${
                        isDone
                          ? "completed"
                          : ""
                      }`}
                      key={skill}
                      onClick={() =>
                        toggleSkill(skill)
                      }
                    >

                      {isDone ? (
                        <CheckCircle2 size={19} />
                      ) : (
                        <Circle size={19} />
                      )}

                      <span>
                        {skill}
                      </span>

                    </button>

                  );

                })}

              </div>

            </div>

          </div>

        ))}

      </div>


      <button
        className="primary-btn resources-btn"
        onClick={onResources}
      >

        <BookOpen size={18} />

        Explore Learning Resources

      </button>

    </div>
  );
}

export default Roadmap;