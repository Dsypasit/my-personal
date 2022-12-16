import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";

function Experience() {
  return (
    <div className="w-full h-full bg-slate-300 py-20 ">
      <div className="w-full flex justify-center">
        <h1 className="text-7xl font-bold mb-10">Timeline</h1>
      </div>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013-2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Ratwinit Bangkaeo School
          </h3>
          <p>High school</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020-current"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK
          </h3>
          <p>Bachelor's of Computer Engineering</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
