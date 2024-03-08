"use client";

import { logout } from "@/actions/auth/logout";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useSession } from "next-auth/react";

const SettingsPage = () => {
  const user = useCurrentUser();

  const session = useSession();

  const onClick = () => {
    logout();
  };

  return (
    <div className="bg-white p-10 rounded-xl">
      <button onClick={onClick} type="submit">
        Sign out
      </button>
    </div>
  );
};

export default SettingsPage;
