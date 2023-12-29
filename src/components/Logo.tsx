import styled, { css } from "styled-components";

export const Logo = () => {
  return (
    <button>
      <LogoOuter />
      <LogoInner />
    </button>
  );
};

const pixelatedBg = css`
  clip-path: polygon(
    0px calc(100% - 20px),
    4px calc(100% - 20px),
    4px calc(100% - 12px),
    8px calc(100% - 12px),
    8px calc(100% - 8px),
    12px calc(100% - 8px),
    12px calc(100% - 4px),
    20px calc(100% - 4px),
    20px 100%,
    calc(100% - 20px) 100%,
    calc(100% - 20px) calc(100% - 4px),
    calc(100% - 12px) calc(100% - 4px),
    calc(100% - 12px) calc(100% - 8px),
    calc(100% - 8px) calc(100% - 8px),
    calc(100% - 8px) calc(100% - 12px),
    calc(100% - 4px) calc(100% - 12px),
    calc(100% - 4px) calc(100% - 20px),
    100% calc(100% - 20px),
    100% 20px,
    calc(100% - 4px) 20px,
    calc(100% - 4px) 12px,
    calc(100% - 8px) 12px,
    calc(100% - 8px) 8px,
    calc(100% - 12px) 8px,
    calc(100% - 12px) 4px,
    calc(100% - 20px) 4px,
    calc(100% - 20px) 0px,
    20px 0px,
    20px 4px,
    12px 4px,
    12px 8px,
    8px 8px,
    8px 12px,
    4px 12px,
    4px 20px,
    0px 20px
  );
`;

const LogoOuter = styled.div`
  position: absolute;
  top: -24px;
  left: -24px;
  width: 64px;
  height: 64px;
  overflow: hidden;
  background: #000000;
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
  padding: 24px;
  z-index: 4;

  ${pixelatedBg}
`;
