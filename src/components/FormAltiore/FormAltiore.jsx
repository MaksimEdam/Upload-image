const handleSubmit = (e) => {
  e.preventDefault();
  const file = e.target[0].files[0];
  console.log("form.values is", file);
};
<form onSubmit={handleSubmit}>
  <input type="file" />
  <button type="submit">Upload</button>
</form>;
