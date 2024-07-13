/** **************************************************************************
 * ForgeButton
 *************************************************************************** */

import type { JSXElementConstructor } from "react";

type Props = Record<string, never>;

const ForgeButton: JSXElementConstructor<Props> = () => {
  const handleClick = async () => {
    try {
      const res = await fetch("http://localhost:3040/test", { method: "GET" });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h1>TEST BUTTON</h1>
      <button onClick={handleClick}>Hit test endpoint</button>
    </div>
  );
};

export default ForgeButton;
