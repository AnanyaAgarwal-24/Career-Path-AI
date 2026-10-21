import {
  ExternalLink,
  PlayCircle,
  Sparkles,
} from "lucide-react";

import resources from "../data/resources";

function Resources({ careerData }) {

  return (
    <div className="resources-page">

      <div className="page-heading">

        <div className="eyebrow">
          <Sparkles size={16} />
          CURATED LEARNING HUB
        </div>

        <h1>
          Resources for your journey
        </h1>

        <p>
          Hand-picked learning resources mapped to
          the skills you'll need for your target career.
        </p>

      </div>


      {careerData && (
        <div className="resource-context">

          <strong>
            Your target
          </strong>

          <span>
            {careerData.company}
            {" → "}
            {careerData.role}
          </span>

        </div>
      )}


      <div className="resource-grid">

        {resources.map((resource) => (

          <div
            className="resource-card"
            key={resource.title}
          >

            <div className="resource-icon">
              <PlayCircle size={30} />
            </div>


            <div className="resource-content">

              <span className="resource-category">
                {resource.category}
              </span>

              <h3>
                {resource.title}
              </h3>

              <p>
                {resource.description}
              </p>


              <a
                href={resource.url}
                target="_blank"
                rel="noreferrer"
                className="resource-link"
              >

                Watch Resource

                <ExternalLink size={15} />

              </a>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Resources;