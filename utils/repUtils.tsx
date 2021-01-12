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
}
