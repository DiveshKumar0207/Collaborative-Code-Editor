// import angularSvg from "../../assets/logos/angular.svg";
import chashSvg from "../../assets/logos/cHash.svg";
import cSvg from "../../assets/logos/c.svg";
import cppSvg from "../../assets/logos/cpp.svg";
import cssSvg from "../../assets/logos/css.svg";
import gitSvg from "../../assets/logos/git.svg";
import htmlSvg from "../../assets/logos/html.svg";
import javaSvg from "../../assets/logos/java.svg";
import javascriptSvg from "../../assets/logos/javasript.svg";
import mysqlSvg from "../../assets/logos/mysql.svg";
// import nodejsSvg from "../../assets/logos/nodejs.svg";
import phpSvg from "../../assets/logos/php.svg";
import pythonSvg from "../../assets/logos/python.svg";
import reactSvg from "../../assets/logos/react.svg";
import typescriptSvg from "../../assets/logos/typescript.svg";
// import vueSvg from "../../assets/logos/vue.svg";

const matchLogos = (extention: string): string | undefined => {
  let logo: string | undefined;
  switch (extention) {
    case ".c":
      logo = cSvg;
      break;
    case ".cs":
      logo = chashSvg;
      break;
    case ".cpp":
      logo = cppSvg;
      break;
    case ".css":
      logo = cssSvg;
      break;
    case ".git || .gitignore":
      logo = gitSvg;
      break;
    // case ".go":
    //   logo = goSvg;
    //   break;
    case ".html":
      logo = htmlSvg;
      break;
    case ".java":
      logo = javaSvg;
      break;
    case ".js":
      logo = javascriptSvg;
      break;
    case ".jsx":
      logo = reactSvg;
      break;
    case ".sql":
      logo = mysqlSvg;
      break;
    case ".php":
      logo = phpSvg;
      break;
    case ".py":
      logo = pythonSvg;
      break;
    // case ".rs":
    //   logo = rustSvg;
    //   break;
    case ".ts":
      logo = typescriptSvg;
      break;
  }

  return logo;
};

export default matchLogos;
