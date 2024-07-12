"use client";

import React, {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useMemo,
  useRef,
} from "react";

interface RefsContextType {
  resumeRef: RefObject<HTMLDivElement>;
  aboutRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

const RefsContext = createContext<RefsContextType | undefined>(undefined);

export const useRefs = (): RefsContextType => {
  const context = useContext(RefsContext);
  if (!context) {
    throw new Error("useRefs must be used within a RefsProvider");
  }
  return context;
};

interface RefsProviderProps {
  children: ReactNode;
}

export const RefsProvider: React.FC<RefsProviderProps> = ({ children }) => {
  const resumeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const refs = useMemo(
    () => ({
      resumeRef,
      aboutRef,
      projectsRef,
      contactRef,
    }),
    [resumeRef, aboutRef, projectsRef, contactRef]
  );

  return <RefsContext.Provider value={refs}>{children}</RefsContext.Provider>;
};
