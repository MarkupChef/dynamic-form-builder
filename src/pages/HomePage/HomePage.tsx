import { Button } from "@/components/ui/button.tsx";
import { H1, H2, H3, List, P } from "@/components/ui/typography.tsx";
import { ROUTES } from "@/config/routes.ts";
import PageLayout from "@/layouts/PageLayout";
import { NavLink } from "react-router";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const content = (
    <div className={styles.root}>
      <div className={styles.container}>
        <H2 className={styles.title}>Create your form</H2>
        <P className={styles.description}>
          Create custom forms with text, email, and number fields. Configure
          validation, preview the result, and save forms locally for later use.
        </P>
        <section className={styles.features} aria-labelledby="key-features">
          <H3 id="key-features">Key features</H3>
          <List className={styles.featuresList}>
            <li>Add and configure text, email, and number fields</li>
            <li>Set required, length, and value constraints</li>
            <li>Preview forms before saving</li>
            <li>Store, open, and delete forms locally</li>
          </List>
        </section>
        <div className={styles.actions}>
          <NavLink to={ROUTES.formCreate}>
            <Button size={"lg"} className={styles.button}>
              Create Form
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );

  return <PageLayout header={<H1>Home</H1>} content={content} />;
};

export default HomePage;
