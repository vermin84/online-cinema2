import { styled } from 'styled-components'

const CustomLoader = styled.div`
  width: 69px;
  height: 36px;
  --c: radial-gradient(farthest-side, var(--pastel-green-600) 90%, #0000);
  background: var(--c), var(--c), var(--c), var(--c);

  background-size: 12px 12px;
  background-repeat: no-repeat;
  animation: d3 1s infinite linear;
  @keyframes d3 {
    0% {
      background-position: calc(0 * 100% / 3) 50%, calc(1 * 100% / 3) 50%,
        calc(2 * 100% / 3) 50%, calc(3 * 100% / 3) 50%;
    }
    16.67% {
      background-position: calc(0 * 100% / 3) 0, calc(1 * 100% / 3) 50%,
        calc(2 * 100% / 3) 50%, calc(3 * 100% / 3) 50%;
    }
    33.33% {
      background-position: calc(0 * 100% / 3) 100%, calc(1 * 100% / 3) 0,
        calc(2 * 100% / 3) 50%, calc(3 * 100% / 3) 50%;
    }
    50% {
      background-position: calc(0 * 100% / 3) 50%, calc(1 * 100% / 3) 100%,
        calc(2 * 100% / 3) 0, calc(3 * 100% / 3) 50%;
    }
    66.67% {
      background-position: calc(0 * 100% / 3) 50%, calc(1 * 100% / 3) 50%,
        calc(2 * 100% / 3) 100%, calc(3 * 100% / 3) 0;
    }
    83.33% {
      background-position: calc(0 * 100% / 3) 50%, calc(1 * 100% / 3) 50%,
        calc(2 * 100% / 3) 50%, calc(3 * 100% / 3) 100%;
    }
    100% {
      background-position: calc(0 * 100% / 3) 50%, calc(1 * 100% / 3) 50%,
        calc(2 * 100% / 3) 50%, calc(3 * 100% / 3) 50%;
    }
  }
`
const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export default function Loader() {
  return (
    <StyledWrapper>
      <CustomLoader />
    </StyledWrapper>
  )
}
