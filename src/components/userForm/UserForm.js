const UserForm = () => {
  return (
    <form>
      <label htmlFor="username">Ім'я</label>
      <input id="username" name="username" type="text" minLength="1" />
      <label htmlFor="userphone">Телефон</label>
      <input id="userphone" name="userphone" type="number" minLength={1} maxLength={14} />
    </form>
  );
};

export default UserForm;
