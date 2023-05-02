import { TRoute } from "./route";
import { EMtType } from "./mountain";

enum EActivity {
  Certain = "Certain",
  Uncertain = "Uncertain",
}

type TTimeInfo = {
  date: number[];
  gather: number;
  attendee: number[];
};

export type TActivity = {
  id: number;
  name: number;
  type: EActivity;
  mtType: EMtType[];
  routes: TRoute["id"][];
  leader: number;
  timeInfo: TTimeInfo[];
  restriction?: string;
  description?: string;
  imgUrl?: string;
  spent?: string;
  sleepingPlace?: string;
  transportation?: string;
  meal?: string;
};

export type TUnCertainActivity = TActivity & {};
