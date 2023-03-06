export default function loading() {
  const btn = document.querySelector(".button__payment");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    btn.firstElementChild.innerHTML = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="
              margin: auto;
              background: none;
              display: block;
              shape-rendering: auto;
              animation-play-state: running;
              animation-delay: 0s;
            "
        width="50px"
        height="50px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          r="32"
          stroke-width="8"
          stroke="#ffffff"
          stroke-dasharray="50.26548245743669 50.26548245743669"
          fill="none"
          stroke-linecap="round"
          style="animation-play-state: running; animation-delay: 0s"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;1"
            values="0 50 50;360 50 50"
            style="animation-play-state: running; animation-delay: 0s"
          ></animateTransform>
        </circle>
      </svg>
    `;
    btn.firstElementChild.setAttribute("disabled", "true");
  });
}
