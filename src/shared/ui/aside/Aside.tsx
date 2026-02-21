import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import LogoString from "@/shared/ui/logo/LogoString";
import UserProfile from "@/widgets/User/UserProfile";
import useMe from "@/entities/user/model/useMe";
import { menuItems } from "@/shared/ui/aside/menuList";

import { NavLink } from "react-router";
import LogOut from "@/widgets/LogOut/LogOut";
// import AdminPage from "@/pages/default/AdminPage";

function FoodMenuSidebar() {
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>(
    {}
  );

  const { user, isLoading } = useMe();

  const toggleMenu = (label: string, e: React.MouseEvent) => {
    e.preventDefault();
    setExpandedMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  if (isLoading || !user) return null;

  return (
    <aside>
      <LogoString />
      <UserProfile user={user} />

      <nav>
        {menuItems.map((section, idx) => (
          <div key={idx}>
            <div></div>
            {section.items.map((item, itemIdx) => (
              <div key={itemIdx}>
                {item.subItems ? (
                  <button onClick={(e) => toggleMenu(item.label, e)}>
                    <div>
                      <div>
                        <item.icon size={20} />
                      </div>
                      <span>{item.label}</span>
                    </div>
                    {expandedMenus[item.label] ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>
                ) : (
                  <NavLink to={item.path || "#"}>
                    <div>
                      <div>
                        <item.icon size={20} />
                      </div>
                      <span>{item.label}</span>
                    </div>
                  </NavLink>
                )}

                {item.subItems && expandedMenus[item.label] && (
                  <div>
                    {item.subItems.map((subItem, subIdx) => (
                      <NavLink key={subIdx} to={subItem.path}>
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </nav>

      <div>
        <LogOut />
      </div>
      {/* <div>
        <AdminPage />
      </div> */}
    </aside>
  );
}

export default FoodMenuSidebar;
