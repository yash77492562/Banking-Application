import React from 'react';

const DragonLoader = () => {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="relative w-32 h-32 mx-auto">
        {/* Dragon Body */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full animate-[spin_3s_linear_infinite]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Circle */}
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            className="stroke-purple-600 stroke-2 opacity-20"
          />
          
          {/* Animated Arc */}
          <path
            d="M 50 5 A 45 45 0 0 1 95 50"
            className="stroke-purple-600 stroke-2"
            strokeLinecap="round"
          >
            <animate
              attributeName="d"
              dur="1.5s"
              repeatCount="indefinite"
              values="M 50 5 A 45 45 0 0 1 95 50;
                      M 50 5 A 45 45 0 1 1 5 50;
                      M 50 5 A 45 45 0 0 1 95 50"
            />
          </path>

          {/* Dragon Head */}
          <path
            d="M 45 20 
               C 45 20, 55 15, 60 25
               C 60 25, 65 20, 70 30
               L 65 35
               C 65 35, 60 25, 55 30
               C 55 30, 50 25, 45 20"
            className="fill-purple-600 animate-[wiggle_1s_ease-in-out_infinite]"
          >
            <animate
              attributeName="d"
              dur="0.5s"
              repeatCount="indefinite"
              values="M 45 20 C 45 20, 55 15, 60 25 C 60 25, 65 20, 70 30 L 65 35 C 65 35, 60 25, 55 30 C 55 30, 50 25, 45 20;
                      M 45 22 C 45 22, 55 17, 60 27 C 60 27, 65 22, 70 32 L 65 37 C 65 37, 60 27, 55 32 C 55 32, 50 27, 45 22;
                      M 45 20 C 45 20, 55 15, 60 25 C 60 25, 65 20, 70 30 L 65 35 C 65 35, 60 25, 55 30 C 55 30, 50 25, 45 20"
            />
          </path>

          {/* Fire Animation */}
          <g className="animate-[breatheFire_2s_ease-in-out_infinite]">
            <path
              d="M 70 30
                 C 75 25, 80 35, 85 30
                 C 80 40, 75 35, 70 30"
              className="fill-orange-500"
            >
              <animate
                attributeName="d"
                dur="0.3s"
                repeatCount="indefinite"
                values="M 70 30 C 75 25, 80 35, 85 30 C 80 40, 75 35, 70 30;
                        M 70 30 C 75 20, 80 30, 85 25 C 80 35, 75 35, 70 30;
                        M 70 30 C 75 25, 80 35, 85 30 C 80 40, 75 35, 70 30"
              />
            </path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default DragonLoader;