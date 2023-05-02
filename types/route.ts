import { TMountain, TEntry } from "./mountain";
// import { TGear } from "./gear";
// import { TUser } from "./user";

export type TWindy = {
  center: number[];
  zoom: number;
  time: number;
};

export type THikingInfo = {
  distance: number;
  accUp: number;
  accDown: number;
  spentTime: number;
  speed: number;
  diffHeight: number;
};

export type TRoute = {
  id: string;
  update: number;
  name: string;
  hikingInfo: THikingInfo;
  mountains: TMountain["id"][];
  // gears: TGear["id"];
  entries: TEntry["id"][];
  windyParams: TWindy;
  gpxUrl: string;
  videoUrl: string;
  tag?: string[];
};
