import { Button } from "@/components/ui/button.tsx";
import { H1, H2 } from "@/components/ui/typography.tsx";
import { ROUTES } from "@/config/routes.ts";
import PageLayout from "@/layouts/PageLayout";
import { NavLink } from "react-router";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const content = (
    <div className={styles.root}>
      <div className={styles.container}>
        <H2>Create your form</H2>
        <NavLink to={ROUTES.formCreate}>
          <Button size={"lg"} className={styles.button}>
            Create Form
          </Button>
        </NavLink>
      </div>
    </div>
  );

  return <PageLayout header={<H1>Home page</H1>} content={content} />;
};

export default HomePage;
