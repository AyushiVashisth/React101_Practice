import styles from "./Greeting.module.css"

// className

function Greetings() {
    console.log(styles);
    return (
      <>
        <h1>Greetings, Earthlings</h1>
        <h3 className={styles.App}>Hola</h3>
      </>
    );
  }

export default Greetings;