import { Representative } from "./data";

export default class RepUtils {
  public static roleDescription(rep: Representative) {
    switch (rep.type) {
      case "House":
        return "House Representative";
      case "Senate":
        return "Senator";
    }
  }

  public static getWinMargin(rep: Representative) {
    if (rep.win_margin < 0.01) return `< 1%`;

    return `${Math.floor(rep.win_margin * 100)}%`;
  }
}
