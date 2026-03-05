import type { IUserDTO } from "@/entities/user/types/interfaces";
import { useEffect } from "react";

interface IUserInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: IUserDTO;
}

function UserInfoModal({ isOpen, onClose, user }: IUserInfoModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div>
      <div>
        <h2>User Information</h2>
        <button onClick={onClose}>X</button>
        <p>This modal displays user information.</p>
        <p>Name: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>User photo: {user.avatarUrl}</p>
        <p>Point: {user.points}</p>
      </div>
    </div>
  );
}

export default UserInfoModal;
