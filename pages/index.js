import Button from "@/components/Button";
import styled from "styled-components";

const FlexContainer = styled.section`
  display: flex;
  flex-direction: ${({ $direction = "row" }) =>
    $direction === "row" ? "row" : "column"};
  flex-wrap: wrap;
  gap: 4px;
`;

export default function HomePage() {
  return (
    <div>
      <h1>Styled component with Props</h1>
      <h2>Props using the ternary</h2>
      <FlexContainer>
        <Button>Button</Button>
        <Button $color="danger">Button Danger</Button>
      </FlexContainer>
      <h2>Using Props: css block / Complex Component</h2>
      <FlexContainer $direction="column">
        <Button $variant="text">Button - Text</Button>
        <Button $variant="outlined">Button - Outlined</Button>
        <Button $variant="contained">Button - Contained</Button>
      </FlexContainer>
    </div>
  );
}
