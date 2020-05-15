import React from "react";
import styled from "styled-components";

interface Props {
  SvgElement: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  Diameter: number;
}

const SingleMagicCircle: React.FC<Props> = ({
  SvgElement,
  Diameter,
}: Props) => {
  const StyledSVG = styled(SvgElement)`
    position: absolute;
    left: calc(50% - ${Diameter / 2}px);
    top: calc(50% - ${Diameter / 2}px);
  `;

  return (
    <div>
      <StyledSVG width={Diameter} height={Diameter} />
    </div>
  );
};
export default SingleMagicCircle;
