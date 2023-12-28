import styled from "styled-components";
import { pixelatedBg } from "../styles";

export const Logo = () => {
  return (
    <div>
      <LogoOuter />
      <LogoInner />
    </div>
  );
};

const LogoOuter = styled.div`
  position: absolute;
  top: -24px;
  left: -24px;
  width: 64px;
  height: 64px;
  overflow: hidden;
  background: #0000ff;
  padding: 32px;
  z-index: 4;

  ${pixelatedBg}
`;

const LogoInner = styled.div`
  position: absolute;
  top: -16px;
  left: -16px;
  width: 64px;
  height: 64px;
  overflow: hidden;
  background: #ffffff;
  padding: 12px;
  z-index: 4;

  ${pixelatedBg}
`;
