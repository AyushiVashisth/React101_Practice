import styles from "./CountriesCard.module.css";

function CountriesCard() {
  return (
  <div data-testid="country-card" className={styles.container}>
      <div>
        Country: <b data-testid="country-card-name">India</b>
      </div>
      <div>
        Population: <b data-testid="country-card-population">100</b>
      </div>
    </div>
  );
}

export default CountriesCard;
