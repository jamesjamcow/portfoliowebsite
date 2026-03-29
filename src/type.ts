import React from "react";

export type Category = "project" | "hardware" | "community";

export interface Project {
  title: string;
  category: Category;
  image: string;
  tag?: { label: string; color: string };
  description: string;
  link?: { text: string; href: string };
}

export interface Image {
  src: string;
  alt: string;
}

export interface NavItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}