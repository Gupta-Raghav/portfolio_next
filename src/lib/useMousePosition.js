import { useState, useEffect } from "react";

// const useMousePosition = () => {
//   const [mousePosition, setMousePosition] = useState({ x: null, y: null });

//   const updateMousePosition = e => {
//     setMousePosition({ x: e.clientX, y: e.clientY });
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", updateMousePosition);

//     return () => window.removeEventListener("mousemove", updateMousePosition);
//   }, []);

//   return mousePosition;
// };

// export default useMousePosition;




function circleMove() {
  // default values
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
      clearTimeout(timeout);

      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
      yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

      xprev = dets.clientX;
      yprev = dets.clientY;

      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;

      timeout = setTimeout(function () {
          document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
      }, 100);
  });
}

export default circleMove;