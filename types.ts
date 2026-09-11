import { ReactNode, CSSProperties } from 'react';

export interface SectionContent {
  title?: string;
  subtitle?: string;
  [key: string]: any;
}

export interface SectionTemplate {
  id: string;
  name: string;
  icon?: ReactNode;
}

export interface Section extends SectionTemplate {
  instanceId: number;
  content: SectionContent;
  children?: Section[];
  styles?: CSSProperties;
  isContainer?: boolean;
}

export interface Page {
  id: string;
  name: string;
  path: string;
  type: string;
  sections: Section[];
}

export interface BackgroundStyle {
  id: string;
  name: string;
  class: string;
}

export interface Project {
  id: string;
  name: string;
  updated?: string;
  bgStyle?: BackgroundStyle;
  pages?: Page[];
  themeColor?: string;
}

export interface ElementItem {
    id: string;
    name: string;
    icon: ReactNode;
}

export interface ElementLibrary {
    [key: string]: ElementItem[];
}