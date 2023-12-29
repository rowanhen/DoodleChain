import { FC } from "react";
import styled, { css } from "styled-components";

export const Logo: FC<React.HTMLAttributes<HTMLDivElement>> = ({
  ...props
}) => {
  return (
    <LogoButton>
      <LogoOuter {...props}>
        <LogoInner />
        <LogoInner />
      </LogoOuter>
    </LogoButton>
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

const LogoButton = styled.button`
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;
`;

const LogoOuter = styled.div`
  overflow: hidden;
  background: #0000ff;
  padding: 12px;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  ${pixelatedBg}
`;

const LogoInner = styled.div`
  overflow: hidden;
  background: #ffffff;
  padding: 24px;
  z-index: 4;

  ${pixelatedBg}
`;
