import { TRoute } from "./route";
// 台灣百岳分級: http://www.tyeg.tw/files/2016/f161127_090757_119.pdf
export enum EDifficulty {
  A = "A",
  B = "B",
  C = "C",
  Cp = "C+",
  D = "D",
  E = "E",
}

export enum EMtType {
  HM = "100Mt", // 100Mountains
  High = "High", // 100Mountains
  Medium = "Mediun", // Medium
  Low = "Low", // Urban
}

export type TMtGroup = {
  id: string;
  update: number;
  name: string;
  location: string;
  mountains: TMountain[];
  description?: string;
  tag?: string[];
};

export type TMountain = {
  id: string;
  update: number;
  name: string;
  number: number;
  height: number;
  location: string;
  series: string[];
  type: EMtType[];
  difficulty?: string;
  tag?: string[];
};

export type TEntry = {
  id: string;
  update: number;
  name: string;
  routes: TRoute["id"][];
  tag?: string[];
};
