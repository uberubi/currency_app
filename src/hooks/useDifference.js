import { useState } from "react";

const useDifference = (current, prev) => {
  const [diff] = useState((current - prev).toFixed(3));
  if (diff >= 0) {
    return [`+${diff}`, "#00ff00"];
  } else return [diff, "#ff0000"];
};

export default useDifference;
