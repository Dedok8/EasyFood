import type { IUserDTO } from "@/entities/user/types/interfaces";

interface Props {
  user: IUserDTO;
  isCurrent?: boolean;
}

function UserComp({ user, isCurrent }: Props) {
  return (
    <div className="flex items-center border-b border-slate-700 py-2 px-2 gap-2">
      <div className="flex min-w-[140px] max-w-[180px] flex-shrink-0">
        <strong className="truncate text-slate-100">{user.username}</strong>
      </div>
      <div className="flex min-w-[180px] max-w-[240px] flex-shrink-0">
        <span className="truncate text-xs text-slate-400">{user.email}</span>
      </div>
      <div className="flex min-w-[80px] max-w-[100px] flex-shrink-0 justify-center">
        <span className="text-xs text-slate-500 italic">{user.isAdmin}</span>
      </div>
      {isCurrent && (
        <span className="text-xs text-emerald-500 ml-auto">це ви</span>
      )}
    </div>
  );
}

export default UserComp;
