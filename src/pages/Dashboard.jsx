import { motion } from "motion/react";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Clock3,
  Code2,
  Database,
  Network,
  Play,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    label: "Skills to master",
    value: "12",
    icon: Brain,
  },
  {
    label: "Learning hours",
    value: "120+",
    icon: Clock3,
  },
  {
    label: "Core subjects",
    value: "05",
    icon: Code2,
  },
];

const subjects = [
  {
    name: "Data Structures & Algorithms",
    short: "DSA",
    progress: 72,
    icon: Code2,
  },
  {
    name: "Database Management",
    short: "DBMS",
    progress: 38,
    icon: Database,
  },
  {
    name: "Computer Networks",
    short: "Networks",
    progress: 24,
    icon: Network,
  },
];

function Dashboard({ careerData, onStart }) {
  return (
    <div className="dashboard-modern">

      {/* HERO */}

      <motion.section
        className="dashboard-hero"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <div className="hero-copy">

          <motion.div
            className="ai-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
          >
            <Sparkles size={15} />
            AI Career Planner
          </motion.div>

          <h1>
            Hey
            <span>👋</span>
          </h1>

          <p>
            Let's turn your career goal into a clear,
            personalized learning path.
          </p>

          <motion.button
            className="hero-button"
            onClick={onStart}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {careerData
              ? "Update My Roadmap"
              : "Build My Roadmap"}

            <ArrowRight size={18} />
          </motion.button>

        </div>


        {/* AI ORBIT CARD */}

        <motion.div
          className="ai-orbit-card"
          initial={{ opacity: 0, scale: 0.8, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <motion.div
            className="orbit-core"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles size={28} />
          </motion.div>

          <span className="orbit-text">
            AI
          </span>
        </motion.div>

      </motion.section>


      {/* CURRENT TARGET */}

      <motion.section
        className="target-card-modern"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >

        <div className="target-left">

          <div className="target-icon">
            <Target size={23} />
          </div>

          <div>

            <span className="section-label">
              YOUR TARGET
            </span>

            <h2>
              {careerData?.company || "Google"}
              {" "}
              <span>→</span>
              {" "}
              {careerData?.role || "Software Engineer"}
            </h2>

            <p>
              Your roadmap is designed around your
              target role and current skill level.
            </p>

          </div>

        </div>


        <div className="target-progress">

          <div className="progress-ring">
            <span>0%</span>
          </div>

          <div>
            <strong>Getting started</strong>
            <small>Complete your first skill</small>
          </div>

        </div>

      </motion.section>


      {/* STATS */}

      <motion.section
        className="stats-modern"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >

        {stats.map((stat) => {

          const Icon = stat.icon;

          return (
            <motion.div
              className="modern-stat"
              key={stat.label}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 15,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              whileHover={{
                y: -4,
              }}
            >

              <div className="stat-icon">
                <Icon size={19} />
              </div>

              <div>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>

            </motion.div>
          );
        })}

      </motion.section>


      {/* CONTINUE LEARNING */}

      <section className="learning-section">

        <div className="section-heading">

          <div>
            <span className="section-label">
              KEEP MOVING
            </span>

            <h2>
              Continue learning
            </h2>
          </div>

          <TrendingUp size={22} />

        </div>


        <motion.div
          className="subject-grid"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >

          {subjects.map((subject) => {

            const Icon = subject.icon;

            return (
              <motion.div
                className="subject-card"
                key={subject.name}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                whileHover={{
                  y: -5,
                }}
              >

                <div className="subject-top">

                  <div className="subject-icon">
                    <Icon size={20} />
                  </div>

                  <span>
                    {subject.short}
                  </span>

                </div>

                <h3>
                  {subject.name}
                </h3>

                <div className="subject-progress">

                  <div>
                    <span>
                      {subject.progress}% complete
                    </span>

                    <span>
                      {subject.progress === 0
                        ? "Start"
                        : "Continue"}
                    </span>
                  </div>

                  <div className="progress-track">
                    <motion.div
                      className="progress-fill"
                      initial={{ width: 0 }}
                      animate={{
                        width: `${subject.progress}%`,
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.5,
                      }}
                    />
                  </div>

                </div>

                <button className="continue-button">
                  <Play size={15} fill="currentColor" />
                  Continue
                </button>

              </motion.div>
            );
          })}

        </motion.div>

      </section>


      {/* ROADMAP CTA */}

      <motion.section
        className="roadmap-cta"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >

        <div className="cta-icon">
          <CheckCircle2 size={24} />
        </div>

        <div>
          <span className="section-label">
            READY WHEN YOU ARE
          </span>

          <h2>
            Build a roadmap that actually fits you.
          </h2>

          <p>
            Tell the AI what you know, what you want,
            and how much time you have.
          </p>
        </div>

        <button
          className="cta-button"
          onClick={onStart}
        >
          Start Planning
          <ArrowRight size={17} />
        </button>

      </motion.section>

    </div>
  );
}

export default Dashboard;