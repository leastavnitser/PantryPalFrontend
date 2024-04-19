export function IngredientsNew() {
  return (
    <div>
      <h1>New Ingredient</h1>
      <form>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Image Url: <input name="image_url" type="text" />
        </div>
        <button type="submit">Create Ingredient</button>
      </form>
    </div>
  );
}
