export type ViewMode = "grid" | "list";

export interface IViewMode {
  viewMode: ViewMode;
  onViewChange: (mode: ViewMode) => void;
}
