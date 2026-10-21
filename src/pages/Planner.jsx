import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Target,
  User,
  Clock,
} from "lucide-react";

function Planner({ onComplete }) {

  const [company, setCompany] = useState("");
  const [customCompany, setCustomCompany] = useState("");

  const [role, setRole] = useState("");
  const [customRole, setCustomRole] = useState("");

  const [experience, setExperience] = useState("Beginner");
  const [hours, setHours] = useState("2");
  const [weeks, setWeeks] = useState("12");

  const [skills, setSkills] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    const finalCompany =
      company === "Other"
        ? customCompany
        : company;

    const finalRole =
      role === "Other"
        ? customRole
        : role;

    if (!finalCompany || !finalRole) {
      alert("Please select your company and desired role.");
      return;
    }

    const data = {
      company: finalCompany,
      role: finalRole,
      experience,
      hoursPerDay: Number(hours),
      targetWeeks: Number(weeks),
      currentSkills: skills,
      description,

      // Temporary AI-generated structure.
      // We will replace this with Gemini shortly.
      skillGaps: [],
      roadmap: [],
    };

    onComplete(data);
  };


  return (
    <div className="planner-page">

      <div className="page-heading">

        <div className="eyebrow">
          <Sparkles size={16} />
          AI ROADMAP GENERATOR
        </div>

        <h1>
          Let's understand your goal.
        </h1>

        <p>
          Give us a little context about where you are
          and where you want to go.
        </p>

      </div>


      <form
        className="planner-card"
        onSubmit={handleSubmit}
      >

        <div className="form-section">

          <label>
            <Target size={15} />
            Which company are you targeting?
          </label>

          <select
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          >

            <option value="">
              Select company
            </option>

            <option>Google</option>
            <option>Microsoft</option>
            <option>Amazon</option>
            <option>Meta</option>
            <option>Apple</option>
            <option>HCL</option>
            <option>TCS</option>
            <option>Infosys</option>
            <option>Other</option>

          </select>

          {company === "Other" && (
            <input
              type="text"
              placeholder="Enter company name"
              value={customCompany}
              onChange={(e) =>
                setCustomCompany(e.target.value)
              }
            />
          )}

        </div>


        <div className="form-section">

          <label>
            <Target size={15} />
            What do you want to become?
          </label>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >

            <option value="">
              Select desired role
            </option>

            <option>Software Engineer</option>
            <option>Data Analyst</option>
            <option>Data Scientist</option>
            <option>Machine Learning Engineer</option>
            <option>AI Engineer</option>
            <option>Full Stack Developer</option>
            <option>Backend Developer</option>
            <option>Frontend Developer</option>
            <option>DevOps Engineer</option>
            <option>Cloud Engineer</option>
            <option>Cybersecurity Engineer</option>
            <option>Product Engineer</option>
            <option>Other</option>

          </select>

          {role === "Other" && (
            <input
              type="text"
              placeholder="Enter your desired role"
              value={customRole}
              onChange={(e) =>
                setCustomRole(e.target.value)
              }
            />
          )}

        </div>


        <div className="form-row">

          <div className="form-section">

            <label>
              <User size={15} />
              Current experience
            </label>

            <select
              value={experience}
              onChange={(e) =>
                setExperience(e.target.value)
              }
            >

              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>

            </select>

          </div>


          <div className="form-section">

            <label>
              <Clock size={15} />
              Learning time per day
            </label>

            <select
              value={hours}
              onChange={(e) =>
                setHours(e.target.value)
              }
            >

              <option value="1">1 hour</option>
              <option value="2">2 hours</option>
              <option value="3">3 hours</option>
              <option value="4">4 hours</option>
              <option value="5">5+ hours</option>

            </select>

          </div>

        </div>


        <div className="form-section">

          <label>
            Target preparation time
          </label>

          <select
            value={weeks}
            onChange={(e) =>
              setWeeks(e.target.value)
            }
          >

            <option value="4">4 weeks</option>
            <option value="8">8 weeks</option>
            <option value="12">12 weeks</option>
            <option value="16">16 weeks</option>
            <option value="24">24 weeks</option>

          </select>

        </div>


        <div className="form-section">

          <label>
            What do you already know?
          </label>

          <input
            type="text"
            value={skills}
            onChange={(e) =>
              setSkills(e.target.value)
            }
            placeholder="Example: Java, Python, HTML, basic DSA"
          />

        </div>


        <div className="form-section">

          <label>
            Tell the AI about yourself
            <span> optional but recommended</span>
          </label>

          <textarea
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
            placeholder="Example: I am a 2nd year engineering student. I know basic Java and Python but my DSA is weak. I have built two small web projects and can study for 2 hours every day..."
          />

        </div>


        <button
          className="primary-btn planner-submit"
          type="submit"
        >

          Analyze My Career Path

          <ArrowRight size={18} />

        </button>

      </form>

    </div>
  );
}

export default Planner;