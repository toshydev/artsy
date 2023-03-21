import styled from "styled-components";
import Navigation from "@/components/Navigation";

const StyledLayout = styled.div``;

const Content = styled.div`
  background: green;
`;

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <Content>{children}</Content>
      <Navigation />
    </StyledLayout>
  );
}
