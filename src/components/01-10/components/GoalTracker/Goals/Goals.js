import GoalsList from "./GoalsList";
import "./Goals.css";

const Goals = (props) => {
  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );
  if (props.items.length > 0) {
    content = (
      <GoalsList items={props.items} onDeleteItem={props.onDeleteItem} />
    );
  }
  return (
    <>
      <section id="goals">{content}</section>
    </>
  );
};

export default Goals;
