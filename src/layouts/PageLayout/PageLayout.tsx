import type { FC, ReactNode } from "react";
import styles from "./PageLayout.module.css";

interface PageLayoutProps {
  header: ReactNode;
  content: ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ header, content }) => {
  return (
    <div className={styles.root}>
      <div>{header}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
};

export default PageLayout;
