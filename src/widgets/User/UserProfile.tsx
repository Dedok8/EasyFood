import userPhoto from "../../assets/User/userDefaultAvatar.png";

interface Props {
  user: {
    avatarUrl: string;
    username: string;
  };
}

function UserProfile({ user }: Props) {
  const avatarSrc = user.avatarUrl ?? userPhoto;

  return (
    <div className="flex items-center gap-2 px-2 py-2 border-b border-slate-700">
      <img
        src={avatarSrc}
        alt="User avatar"
        className="w-10 h-10 rounded-full object-cover"
      />

      <span className="truncate text-xs text-slate-400">{user.username}</span>
    </div>
  );
}

export default UserProfile;
