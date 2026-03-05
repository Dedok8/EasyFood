import { useMenuRestaurant } from "@/entities/restourants/model/useMenuRestaurant";
import { useAppSelector } from "@/shared/hooks/useSelector";
import DishCart from "@/entities/dishes/ui/DishCard";
import HeaderComp from "@/shared/ui/headerComp/HeaderComp";
import MenuComp from "@/widgets/menuComp/MenuComp";
import { useState } from "react";
import type { ViewMode } from "@/widgets/menuComp/viewMode";
import s from "./fullMenu.module.scss";

function FullMenu() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const selectedRestaurantId = useAppSelector(
    (state) => state.restaurant.selectedRestaurantId
  );
  const { dishes, isLoading, isError } = useMenuRestaurant();

  if (!selectedRestaurantId) return <div>Ресторан не обрано</div>;
  if (isLoading) return <div>Loading dishes...</div>;
  if (isError) return <div>Error loading dishes</div>;

  return (
    <div>
      <HeaderComp
        label="Virtual Assistant"
        locationName="Our Smart Assistant Recommendations"
      />
      <MenuComp viewMode={viewMode} onViewChange={setViewMode} />
      <div className={viewMode == "grid" ? s.menu__grid : s.menu__list}>
        {dishes.map((dish) => (
          <DishCart key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
}

export default FullMenu;
