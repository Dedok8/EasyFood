import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { NavLink } from "react-router";
import LogoString from "@/shared/ui/logo/LogoString";
import UserProfile from "@/widgets/User/UserProfile";
import useMe from "@/entities/user/model/useMe";
import { menuItems } from "@/shared/ui/aside/menuList";
import LogOut from "@/widgets/LogOut/LogOut";
import styles from "./aside.module.scss";
// interface ISidebarProps {
//   isOpen: boolean;
//   // closeSidebar: () => void;
// }

function Sidebar() {
  const { user, isLoading } = useMe();
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>(
    {}
  );

  const toggleMenu = (label: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  if (isLoading || !user) return null;

  return (
    <aside className={styles.aside}>
      <div className={styles["aside__user--comp"]}>
        <div className={styles["aside__user--logo"]}>
          <LogoString />
        </div>
        <div>
          <UserProfile user={user} />
        </div>
      </div>

      <nav className={styles.aside__nav}>
        {menuItems.map((section, idx) => (
          <div key={idx} className={styles["aside__nav--menu"]}>
            <span>{section.section}</span>

            {section.items.map((item, itemIdx) => (
              <div key={itemIdx}>
                {item.subItems ? (
                  <button
                    onClick={(e) => toggleMenu(item.label, e)}
                    className={`${styles["aside__nav--section-btn"]} ${
                      expandedMenus[item.label]
                        ? styles["aside__nav--section-btn--active"]
                        : ""
                    }`}
                  >
                    <div className={styles["aside__nav--section-icon"]}>
                      <div className={styles["aside__nav--menu-img"]}>
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
                  <NavLink
                    to={item.path || "#"}
                    className={({ isActive }) =>
                      isActive
                        ? styles["aside__nav--link-active"]
                        : styles["aside__nav--link"]
                    }
                  >
                    <div className={styles["aside__nav--menu-img"]}>
                      <item.icon size={20} />
                    </div>
                    <span>{item.label}</span>
                  </NavLink>
                )}

                {item.subItems && expandedMenus[item.label] && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className={styles["aside__sub-menu"]}
                  >
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

      <div className={styles.aside__logout}>
        <LogOut />
      </div>
    </aside>
  );
}

export default Sidebar;
