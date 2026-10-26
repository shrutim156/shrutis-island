import React, { useState } from 'react';
import { researchStations } from '../../data/researchStations';
import { mlAlgorithms } from '../../data/mlAlgorithms';

import {
  Database,
  Cpu,
  Code2,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Brain,
  BookOpen,
  Layers
} from 'lucide-react';

const iconMap = {
  Cpu,
  Code2,
  Database
};

export default function ResearchLab() {

  // --------------------------------------------------
  // NAVIGATION STATE
  // --------------------------------------------------

  // Level 1 = Research Lab / Stations
  // Level 2 = ML Station / Algorithms
  // Level 3 = Individual Algorithm / Project
  const [view, setView] = useState('stations');

  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null);


  // ==================================================
  // LEVEL 3
  // INDIVIDUAL ML ALGORITHM / PROJECT
  // ==================================================

  if (view === 'algorithm' && selectedAlgorithm) {

    return (
      <div className="space-y-5 text-[#2c1d0e]">

        {/* Back to ML Station */}
        <button
          onClick={() => {
            setSelectedAlgorithm(null);
            setView('ml');
          }}
          className="
            flex
            items-center
            gap-2
            text-xs
            font-semibold
            text-[#7a5a3a]
            hover:text-[#2c1d0e]
            transition
          "
        >
          <ArrowLeft className="w-4 h-4" />
          Back to ML Station
        </button>


        {/* ------------------------------------------
            PROJECT HEADER
        ------------------------------------------ */}

        <div
          className="
            p-5
            rounded-xl
            bg-[#ebdcb9]/50
            border-2
            border-[#b88d4b]
          "
        >

          <div className="flex items-start gap-3">

            <div
              className="
                p-2.5
                rounded-lg
                bg-[#b88d4b]
                text-[#f5efeb]
                shrink-0
              "
            >
              <Brain className="w-6 h-6" />
            </div>

            <div>

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-widest
                  text-[#9a7137]
                  font-semibold
                  mb-1
                "
              >
                Machine Learning Project
              </p>

              <h4
                className="
                  font-serif-title
                  font-bold
                  text-xl
                  text-[#2c1d0e]
                "
              >
                {selectedAlgorithm.name}
              </h4>

              <p
                className="
                  text-xs
                  text-[#6b5035]
                  mt-1
                "
              >
                {selectedAlgorithm.category}
              </p>

            </div>

          </div>

        </div>


        {/* ------------------------------------------
            OVERVIEW
        ------------------------------------------ */}

        <div
          className="
            p-5
            rounded-xl
            bg-[#f5efeb]
            border-2
            border-[#b88d4b]
            shadow-sm
          "
        >

          <div className="flex items-center gap-2 mb-3">

            <BookOpen className="w-4 h-4 text-[#b88d4b]" />

            <h5
              className="
                font-serif-title
                font-bold
                text-sm
                text-[#2c1d0e]
              "
            >
              Overview
            </h5>

          </div>

          <p
            className="
              text-xs
              text-[#36220f]
              leading-relaxed
            "
          >
            {selectedAlgorithm.overview}
          </p>

        </div>


        {/* ------------------------------------------
            KEY CONCEPTS
        ------------------------------------------ */}

        <div>

          <h5
            className="
              font-serif
              text-xs
              font-bold
              text-[#b88d4b]
              uppercase
              mb-2
            "
          >
            Key Concepts
          </h5>

          <div className="flex flex-wrap gap-1.5">

            {selectedAlgorithm.concepts.map((concept, index) => (

              <span
                key={index}
                className="
                  px-2.5
                  py-1
                  rounded
                  bg-[#ebdcb9]
                  text-[11px]
                  font-semibold
                  text-[#2c1d0e]
                "
              >
                {concept}
              </span>

            ))}

          </div>

        </div>


        {/* ------------------------------------------
            TOOLS & TECHNOLOGIES
        ------------------------------------------ */}

        <div>

          <h5
            className="
              font-serif
              text-xs
              font-bold
              text-[#b88d4b]
              uppercase
              mb-2
            "
          >
            Tools & Technologies
          </h5>

          <div className="flex flex-wrap gap-1.5">

            {selectedAlgorithm.tools.map((tool, index) => (

              <span
                key={index}
                className="
                  px-2.5
                  py-1
                  rounded
                  border
                  border-[#b88d4b]/40
                  bg-[#ebdcb9]/40
                  text-[11px]
                  text-[#5c4329]
                "
              >
                {tool}
              </span>

            ))}

          </div>

        </div>


        {/* ------------------------------------------
            PROJECT REPOSITORY
        ------------------------------------------ */}

        <div
          className="
            p-5
            rounded-xl
            bg-[#b88d4b]
            text-[#f5efeb]
            shadow-md
          "
        >

          <div className="flex items-start gap-3">

            <div
              className="
                p-2
                rounded-lg
                bg-[#f5efeb]/15
                shrink-0
              "
            >
              <Github className="w-5 h-5" />
            </div>


            <div className="flex-1">

              <h5
                className="
                  font-serif-title
                  font-bold
                  text-sm
                "
              >
                Project Repository
              </h5>

              <p
                className="
                  text-[11px]
                  text-[#f5efeb]/80
                  leading-relaxed
                  mt-1
                  mb-4
                "
              >
                Explore the complete implementation, notebooks,
                datasets, and project files in the GitHub repository.
              </p>


              <button
                onClick={() =>
                  window.open(
                    selectedAlgorithm.repositoryUrl,
                    '_blank',
                    'noopener,noreferrer'
                  )
                }
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-lg
                  bg-[#f5efeb]
                  text-[#2c1d0e]
                  text-xs
                  font-bold
                  hover:bg-[#ebdcb9]
                  transition
                "
              >

                Go to Repository

                <ExternalLink className="w-3.5 h-3.5" />

              </button>

            </div>

          </div>

        </div>

      </div>
    );
  }


  // ==================================================
  // LEVEL 2
  // ML STATION → ML ALGORITHMS
  // ==================================================

  if (view === 'ml') {

    return (
      <div className="space-y-5 text-[#2c1d0e]">

        {/* Back to Research Lab */}
        <button
          onClick={() => setView('stations')}
          className="
            flex
            items-center
            gap-2
            text-xs
            font-semibold
            text-[#7a5a3a]
            hover:text-[#2c1d0e]
            transition
          "
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Research Lab
        </button>


        {/* ------------------------------------------
            ML STATION HEADING
        ------------------------------------------ */}

        <div>

          <div className="flex items-center gap-3">

            {/* Icon */}

            <div
              className="
                p-2.5
                rounded-lg
                bg-[#b88d4b]
                text-[#f5efeb]
                shrink-0
              "
            >
              <Cpu className="w-6 h-6" />
            </div>


            {/* Heading */}

            <div>

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-widest
                  text-[#9a7137]
                  font-semibold
                "
              >
                Research Station
              </p>

              <h4
                className="
                  font-serif-title
                  font-bold
                  text-xl
                  text-[#2c1d0e]
                "
              >
                ML Station
              </h4>

              <p
                className="
                  text-xs
                  text-[#6b5035]
                  mt-1
                "
              >
                Explore machine learning algorithms and projects.
              </p>

            </div>

          </div>

        </div>


        {/* ------------------------------------------
            SECOND HEADING
        ------------------------------------------ */}

        <div className="flex items-center gap-2 pt-1">

          <Layers className="w-4 h-4 text-[#b88d4b]" />

          <h5
            className="
              font-serif
              text-xs
              font-bold
              text-[#b88d4b]
              uppercase
            "
          >
            Algorithms & Projects
          </h5>

        </div>


        {/* ------------------------------------------
            ALGORITHM LIST
        ------------------------------------------ */}

        <div className="space-y-2">

          {mlAlgorithms.map((algorithm, index) => (

            <button
              key={algorithm.id}
              onClick={() => {
                setSelectedAlgorithm(algorithm);
                setView('algorithm');
              }}
              className="
                w-full
                p-4
                rounded-xl
                border-2
                border-[#b88d4b]/40
                bg-[#ebdcb9]/35
                text-left
                hover:bg-[#ebdcb9]
                hover:border-[#b88d4b]
                hover:-translate-y-0.5
                transition-all
                duration-200
                group
              "
            >

              <div className="flex items-center gap-3">

                {/* Number */}

                <div
                  className="
                    w-8
                    h-8
                    rounded-full
                    bg-[#b88d4b]
                    text-[#f5efeb]
                    flex
                    items-center
                    justify-center
                    text-xs
                    font-bold
                    shrink-0
                  "
                >
                  {String(index + 1).padStart(2, '0')}
                </div>


                {/* Algorithm Information */}

                <div className="flex-1">

                  <div
                    className="
                      font-serif-title
                      font-bold
                      text-sm
                      text-[#2c1d0e]
                    "
                  >
                    {algorithm.name}
                  </div>

                  <div
                    className="
                      text-[10px]
                      text-[#7a5a3a]
                      mt-0.5
                    "
                  >
                    {algorithm.category}
                  </div>

                  <p
                    className="
                      text-[11px]
                      text-[#5c4329]
                      mt-1
                      leading-relaxed
                    "
                  >
                    {algorithm.shortDescription}
                  </p>

                </div>


                {/* Arrow */}

                <ArrowRight
                  className="
                    w-4
                    h-4
                    text-[#b88d4b]
                    group-hover:translate-x-1
                    transition-transform
                    shrink-0
                  "
                />

              </div>

            </button>

          ))}

        </div>

      </div>
    );
  }


  // ==================================================
  // LEVEL 1
  // RESEARCH LAB → ALL RESEARCH STATIONS
  // ==================================================

  return (
    <div className="space-y-5 text-[#2c1d0e]">

      {/* ------------------------------------------
          INTRODUCTION
      ------------------------------------------ */}

      <p className="text-xs text-[#5c4329]">
        Welcome to the Laboratory. Select a station to explore the knowledge
        gathered along the journey.
      </p>


      {/* ------------------------------------------
          RESEARCH STATIONS
      ------------------------------------------ */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

        {researchStations.map((station) => {

          const IconComponent = iconMap[station.icon];

          return (
            <button
              key={station.id}
              onClick={() => {

                // ML Station → Level 2
                if (station.id === 'ml') {
                  setView('ml');
                }

                // OOPS and DBMS will be implemented later.
              }}
              className="
                p-4
                rounded-xl
                border-2
                text-left
                transition-all
                duration-300
                flex
                flex-col
                justify-between
                min-h-[120px]
                cursor-pointer
                bg-[#ebdcb9]/40
                border-[#b88d4b]/40
                text-[#2c1d0e]
                hover:bg-[#ebdcb9]
                hover:border-[#b88d4b]
                hover:-translate-y-0.5
                hover:shadow-md
              "
            >

              {/* Icon */}

              <IconComponent
                className="
                  w-6
                  h-6
                  mb-3
                  text-[#b88d4b]
                "
              />


              {/* Station Information */}

              <div>

                <div
                  className="
                    font-serif-title
                    text-sm
                    font-bold
                    leading-snug
                  "
                >
                  {station.name}
                </div>

                <div
                  className="
                    text-[10px]
                    mt-1
                    text-[#5c4329]
                  "
                >
                  {station.category}
                </div>

              </div>

            </button>

          );

        })}

      </div>


      {/* ------------------------------------------
          RESEARCH LAB INFORMATION
      ------------------------------------------ */}

      <div
        className="
          p-5
          rounded-xl
          bg-[#f5efeb]
          border-2
          border-[#b88d4b]
          shadow-sm
        "
      >

        <div className="flex items-start gap-3">

          <div
            className="
              p-2
              rounded-lg
              bg-[#ebdcb9]
              text-[#b88d4b]
              shrink-0
            "
          >
            <BookOpen className="w-5 h-5" />
          </div>


          <div>

            <h4
              className="
                font-serif-title
                font-bold
                text-base
                text-[#2c1d0e]
                mb-1
              "
            >
              Research Stations
            </h4>

            <p
              className="
                text-xs
                text-[#36220f]
                leading-relaxed
              "
            >
              Each station represents a different area of knowledge.
              Enter a station to explore its concepts, algorithms,
              implementations, and projects.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}