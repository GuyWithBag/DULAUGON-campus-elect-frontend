export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
};

function User({id, name, username, email, website}: UserType) {
  return (
    <div
      className={
        "bg-gray-200  p-2 w-fit rounded-md solid  m-5 text-neutral-500"
      }
    >
      <p>{id}</p>
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
      <p>{website}</p>
    </div>
  );
}

export default User;
