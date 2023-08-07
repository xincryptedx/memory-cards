import styles from "./CardTable.module.css";
import Card from "./Card.jsx";

function CardTable() {
  return (
    <div className={styles.scrollWrapper}>
      <section className={styles.cardTable}>
        {/* Cards get dynamically added here */}
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </section>
    </div>
  );
}

export default CardTable;
