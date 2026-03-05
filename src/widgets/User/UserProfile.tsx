import { useState } from "react";
import userPhoto from "../../assets/User/userDefaultAvatar.png";
import s from "./userProfile.module.scss";
import UserInfoModal from "@/widgets/UserInfoModal/UserInfoModal";
import type { IUserDTO } from "@/entities/user/types/interfaces";
interface Props {
  user: IUserDTO;
}

function UserProfile({ user }: Props) {
  const avatarSrc = user.avatarUrl ?? userPhoto;
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className={s.user}>
      <img className={s.user__img} src={avatarSrc} alt="User avatar" />

      <div>
        <span>{user.username}</span>
        <div onClick={() => setIsCartOpen(true)}>
          <span>User detail</span>
          <UserInfoModal
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
            user={user}
          />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
