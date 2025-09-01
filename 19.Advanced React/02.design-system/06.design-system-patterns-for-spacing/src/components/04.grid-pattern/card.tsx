import styled from "styled-components";
import { spaceSchema } from "../common/spaces";
import { Layers } from "../01-layers-pattern/start";
import { Split } from "../02-split-pattern/start";

const justifyAlignMap = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
};

const InlineBundle = styled.div`
  --gutter: ${(props) => spaceSchema[props.gutter] ?? spaceSchema.l};
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter);

  justify-content: ${(props) =>
    justifyAlignMap[props.justify] ?? justifyAlignMap.start};

  align-items: ${(props) =>
    justifyAlignMap[props.align] ?? justifyAlignMap.start};
`;

const Pad = styled.div`
  padding: ${(props) => {
    return []
      .concat(props.padding)
      .map((padKey) => spaceSchema[padKey])
      .join(" ");
  }};
`;

const MediaWrapper = styled.div`
  --n: ${(props) => (props.ratio ? props.ratio[0] : 1)};
  --d: ${(props) => (props.ratio ? props.ratio[1] : 1)};

  ${(props) =>
    props.ratio &&
    `
  aspect-ratio: var(--n) / var(--d);
  @supports not (aspect-ratio: 1/1) {
    padding-block-end: calc(var(--d) / var(--n) * 100%);
  }
`}

  position: relative;

  > * {
    position: absolute;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > img,
  > video {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
`;

const Avatar = styled(MediaWrapper).attrs(() => ({ ratio: [1, 1] }))`
  border-radius: 50%;
  background: linear-gradient(135deg, #ffca28, #ff7043);
`;

const Wrapper = styled.div`
  border: 2px solid #d3c09e;
  border-radius: 0.75rem;
  background-color: #f4f1e5;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-width: min-content;
  transition: border-color 0.3s, background-color 0.3s;

  &:hover {
    border-color: #a39470;
    background-color: #eae5cc;
  }
`;

const ButtonsContainer = styled(Split).attrs(() => ({ gutter: "none" }))`
  > * {
    border-block-start: 1px solid black;
  }

  > * + * {
    border-inline-start: 1px solid black;
  }
`;

const CurvedSpan = styled(Pad).attrs(() => ({
  as: "span",
  padding: ["xs", "m"],
}))`
  border-radius: 1rem;
  color: white;
  background: #c00600;
  font-size: 0.7rem;
`;

const DetailsContainer = styled(Pad).attrs(() => ({
  as: Split,
  gutter: "l",
  padding: "xl",
  fraction: "auto-end",
}))`
  > figure > ${Avatar} {
    inline-size: 3rem;
    min-inline-size: 100%;
  }
`;

const CallMessageButton = styled.button`
  background-color: #0068a1;
  color: white;
  border: none;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #004e7c;
    transform: scale(1.05);
  }
`;

const Card = () => {
  return (
    <Wrapper>
      <DetailsContainer>
        <Layers gutter="xs">
          <InlineBundle gutter="l" align="start">
            <strong>CodeLicks Academy</strong>
            <CurvedSpan>Teacher</CurvedSpan>
          </InlineBundle>
          <span>Master CS with us</span>
        </Layers>
        <figure>
          <Avatar />
        </figure>
      </DetailsContainer>
      <ButtonsContainer gutter="none">
        <Pad padding="l">
          <InlineBundle gutter="l" justify="center" align="center">
            <CallMessageButton>CALL</CallMessageButton>
          </InlineBundle>
        </Pad>
        <Pad padding="l">
          <InlineBundle gutter="l" justify="center" align="center">
            <CallMessageButton>TEXT</CallMessageButton>
          </InlineBundle>
        </Pad>
      </ButtonsContainer>
    </Wrapper>
  );
};

export default Card;
