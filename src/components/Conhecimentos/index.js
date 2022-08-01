import "./styles.css";
import ReactTooltip from "react-tooltip";
import { skills } from "../../constants";
import { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

function Conhecimentos() {
  const [tooltip, showTooltip] = useState(true);

  return (
    <div id="containerApprenticeship">
      <div className="wrapper-apprenticeship">
        <div>
          <span className="container-apprenticeship">
            Conhecimentos<span className="container-full-stop">.</span>
          </span>
          <p className="container-p">
            Passe o cursor do mouse, ou clique para ver o nivel do conhecimento,
            e o quanto já foi praticado
          </p>
        </div>
        <div className="wrapper-skills">
          {skills.map((skill) => {
            return (
              <div
                onMouseEnter={() => showTooltip(true)}
                onMouseLeave={() => {
                  showTooltip(false);
                  setTimeout(() => showTooltip(true), 5);
                }}
                data-tip
                data-for={skill.id}
                style={{
                  width: 118,
                  height: 115,
                  background: "#211F23",
                  borderRadius: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img style={{ height: 60 }} src={skill.icon} alt="skill." />

                {tooltip && (
                  <ReactTooltip id={skill.id} place="top" effect="solid">
                    <div>
                      <div style={{ display: "flex" }}>
                        <PieChart
                          animate={true}
                          style={{ height: 50 }}
                          data={[
                            {
                              title: "One",
                              value: skill.level.porcentage,
                              color: "#eebbbb",
                            },
                            {
                              title: "Three",
                              value: 100 - skill.level.porcentage,
                              color: "transparent",
                            },
                          ]}
                        />

                        <PieChart
                          animate={true}
                          style={{ height: 50, marginLeft: 20 }}
                          data={[
                            {
                              title: "Two",
                              value: skill.practice.porcentage,
                              color: "#CD4B87",
                            },
                            {
                              title: "Three",
                              value: 100 - skill.practice.porcentage,
                              color: "transparent",
                            },
                          ]}
                        />
                      </div>
                      <div
                        style={{
                          marginTop: "10px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            height: "10px",
                            width: "10px",
                            backgroundColor: "#eebbbb",
                            borderRadius: "50%",
                            display: "flex",
                            marginRight: "10px",
                          }}
                        ></div>
                        <span> {skill.level.message}</span>
                      </div>
                      <div
                        style={{
                          marginTop: "10px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            height: "10px",
                            width: "10px",
                            backgroundColor: "#CD4B87",
                            borderRadius: "50%",
                            display: "flex",
                            marginRight: "10px",
                          }}
                        ></div>
                        <span> {skill.practice.message}</span>
                      </div>
                    </div>
                  </ReactTooltip>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Conhecimentos;
