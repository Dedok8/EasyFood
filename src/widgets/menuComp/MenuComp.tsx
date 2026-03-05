import { btnItems } from "@/widgets/menuComp/btnItems";
import s from "./menuComp.module.scss";

import type { IViewMode } from "@/widgets/menuComp/viewMode";
import { useState } from "react";

function MenuComp({ viewMode, onViewChange }: IViewMode) {
  const [activeBtn, setActiveBtn] = useState<string | null>(null);

  return (
    <>
      <div className={s.menu}>
        <div className={s["menu__container-btns"]}>
          {btnItems.map((item) => (
            <div key={item.label} className={s["menu__container-btns"]}>
              <button
                type="button"
                className={`${s.menu__btn} ${activeBtn === item.label ? s.active : ""}`}
                onClick={() => setActiveBtn(item.label)}
              >
                <span>{item.label}</span>
              </button>
            </div>
          ))}
        </div>
        <div className={s.menu__logic}>
          <div className={s.menu__view}>
            <button
              type="button"
              className={`${s.menu__viewBtn} ${viewMode === "list" ? s.active : ""}`}
              onClick={() => onViewChange("list")}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect
                  x="2"
                  y="4"
                  width="16"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  x="2"
                  y="9"
                  width="16"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  x="2"
                  y="14"
                  width="16"
                  height="2"
                  rx="1"
                  fill="currentColor"
                />
              </svg>
            </button>

            <button
              type="button"
              className={`${s.menu__viewBtn} ${viewMode === "grid" ? s.active : ""}`}
              onClick={() => onViewChange("grid")}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect
                  x="2"
                  y="2"
                  width="7"
                  height="7"
                  rx="1.5"
                  fill="currentColor"
                />
                <rect
                  x="11"
                  y="2"
                  width="7"
                  height="7"
                  rx="1.5"
                  fill="currentColor"
                />
                <rect
                  x="2"
                  y="11"
                  width="7"
                  height="7"
                  rx="1.5"
                  fill="currentColor"
                />
                <rect
                  x="11"
                  y="11"
                  width="7"
                  height="7"
                  rx="1.5"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div>
            <div></div>
            <div>
              <button className={s["menu__proposals-btn"]} type="submit">
                Ask for new proposals
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuComp;
