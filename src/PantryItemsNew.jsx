export function PantryItemsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.targer);
    props.onCreatePantryItem(params, () => event.target.reset());
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div></div>
      </form>
    </div>
  );
}
