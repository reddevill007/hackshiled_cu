import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Know how you can <br className="sm:block hidden" /> form your team easily
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Click on the team formation button to get a detailed guide pdf to help you form your team.
      </p>

      <Button styles={`mt-10`} text='Team formation' />
    </div>

    <div className={layout.sectionImg}>
      <img src='/team.png' alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
