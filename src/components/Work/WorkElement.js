import styled from "styled-components";

export const WorkContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 2000px;
  }

  @media screen and (max-width: 480px) {
    height: 2100px;
  }
`;

export const Workwrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    max-height: 200px;
  }
`;

export const WorkCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 320px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const WorkIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 8px;
`;

export const WorkH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-top: -1500px;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-top: -1800px;
  }
`;

export const WorkH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const WorkP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
