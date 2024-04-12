"use client";
import styled from "styled-components";

type HeaderProps = {
  description: string;
  title: string;
};

const Header = styled.header`
  background-color: #f4f4f4;
  margin-bottom: 2rem;
  padding: 1rem 1.5rem;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export function NewletterHeader({ title, description }: HeaderProps) {
  return (
    <Header>
      <Title>{title}</Title>
      <span>{description}</span>
    </Header>
  );
}
