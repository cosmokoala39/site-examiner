"use client";
import React from "react";
import Image from "next/image";

type Team = {
  name: string;
  logo: string;
  rank: string;
};

type MatchCardProps = {
  teamA: Team;
  teamB: Team;
  date: string;
  time: string;
  summary: string[];
};

const MatchCard: React.FC<MatchCardProps> = ({
  teamA,
  teamB,
  date,
  time,
  summary,
}) => {
  return (
    <div className="card shadow-sm border-success border rounded-3 overflow-hidden">
      {/* Top section */}
      <div className="row text-center p-3">
        <div className="col-4 d-flex flex-column align-items-center justify-content-center">
          <Image src={teamA.logo} alt={teamA.name} width={50} height={50} />
          <div className="fw-semibold">{teamA.name}</div>
        </div>

        <div className="col-4 d-flex flex-column justify-content-center align-items-center">
          <div className="text-muted">{date}</div>
          <div className="fw-bold fs-5">{time}</div>
        </div>

        <div className="col-4 d-flex flex-column align-items-center justify-content-center">
          <Image src={teamB.logo} alt={teamB.name} width={50} height={50} />
          <div className="fw-semibold">{teamB.name}</div>
        </div>

        <div className="col-6 text-center pt-2 text-muted fw-semibold">{teamA.rank}</div>
        <div className="col-6 text-center pt-2 text-muted fw-semibold">{teamB.rank}</div>
      </div>

      <hr className="m-0" />

      {/* Bottom section */}
      <div className="p-3">
        <ul className="mb-3 small">
          {summary.map((point, index) => (
            <li key={index} className="mb-2">
              {point}
            </li>
          ))}
        </ul>
     
      </div>
    </div>
  );
};

export default MatchCard;
