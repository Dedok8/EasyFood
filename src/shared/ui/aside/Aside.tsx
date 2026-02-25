import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import LogoString from "@/shared/ui/logo/LogoString";
import UserProfile from "@/widgets/User/UserProfile";
import useMe from "@/entities/user/model/useMe";
import { menuItems } from "@/shared/ui/aside/menuList";
import { NavLink } from "react-router";
import LogOut from "@/widgets/LogOut/LogOut";
import "@/shared/styles/scss/components/aside.scss";

interface ISidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

function Sidebar({ isOpen, closeSidebar }: ISidebarProps) {
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>(
    {}
  );
  const { user, isLoading } = useMe();

  const toggleMenu = (label: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // ВАЖНО: предотвращаем закрытие сайдбара при раскрытии подменю
    setExpandedMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  if (isLoading || !user) return null;

  return (
    <aside className={`sidebar ${isOpen ? "is-open" : ""}`}>
      <div className="sidebar__header">
        <LogoString />
        <UserProfile user={user} />
      </div>

      {/* onClick на nav нужен, чтобы закрывать сайдбар при клике на ССЫЛКИ */}
      <nav className="sidebar__nav" onClick={closeSidebar}>
        {menuItems.map((section, idx) => (
          <div key={idx} className="sidebar__section">
            <span className="sidebar__section-title">{section.section}</span>

            {section.items.map((item, itemIdx) => (
              <div key={itemIdx} className="sidebar__item-wrapper">
                {item.subItems ? (
                  <button
                    className={`sidebar__item ${expandedMenus[item.label] ? "is-expanded" : ""}`}
                    onClick={(e) => toggleMenu(item.label, e)}
                  >
                    <div className="sidebar__item-content">
                      <item.icon className="sidebar__icon" size={20} />
                      <span>{item.label}</span>
                    </div>
                    {expandedMenus[item.label] ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>
                ) : (
                  <NavLink to={item.path || "#"} className="sidebar__item">
                    <div className="sidebar__item-content">
                      <item.icon className="sidebar__icon" size={20} />
                      <span>{item.label}</span>
                    </div>
                  </NavLink>
                )}

                {/* Подменю */}
                {item.subItems && expandedMenus[item.label] && (
                  <div
                    className="sidebar__subitems"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.subItems.map((subItem, subIdx) => (
                      <NavLink
                        key={subIdx}
                        to={subItem.path}
                        className="sidebar__subitem"
                        onClick={closeSidebar} // Закрываем при выборе конечного пункта
                      >
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

      <div className="sidebar__footer">
        <LogOut />
      </div>
    </aside>
  );
}

export default Sidebar;
