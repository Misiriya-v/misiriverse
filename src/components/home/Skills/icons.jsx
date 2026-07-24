import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaCode,
  FaLaptopCode,
  FaPython,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiReactrouter,
  SiTensorflow,
  SiOpencv,
  SiPostman,
  SiNpm,
  SiVite,
} from "react-icons/si";

/* ===========================================================
   SKILL ICONS
=========================================================== */

const icons = {
  /* ---------- Frontend ---------- */

  react: <FaReact className="text-sky-400" />,

  javascript: <SiJavascript className="text-yellow-400" />,

  html: <FaHtml5 className="text-orange-500" />,

  css: <FaCss3Alt className="text-blue-500" />,

  tailwind: <SiTailwindcss className="text-cyan-400" />,

  reactrouter: <SiReactrouter className="text-red-500" />,

  responsive: <FaLaptopCode className="text-emerald-400" />,

  /* ---------- Backend ---------- */

  node: <FaNodeJs className="text-green-500" />,

  express: <SiExpress className="text-gray-300" />,

  api: <FaCode className="text-cyan-400" />,

  jwt: <FaCode className="text-yellow-400" />,

  middleware: <FaCode className="text-violet-400" />,

  crud: <FaDatabase className="text-emerald-400" />,

  /* ---------- Database ---------- */

  mongodb: <SiMongodb className="text-green-500" />,

  atlas: <SiMongodb className="text-green-400" />,

  mongoose: <SiMongodb className="text-emerald-500" />,

  mysql: <SiMysql className="text-blue-500" />,

  /* ---------- Artificial Intelligence ---------- */

  python: <FaPython className="text-yellow-400" />,

  tensorflow: <SiTensorflow className="text-orange-500" />,

  opencv: <SiOpencv className="text-cyan-400" />,

  ml: <FaCode className="text-pink-400" />,

  ai: <FaCode className="text-violet-400" />,

  dataengineering: <FaDatabase className="text-emerald-400" />,

  /* ---------- Developer Tools ---------- */

  git: <FaGitAlt className="text-orange-500" />,

  github: <FaGithub className="text-white" />,

  // VS Code icon (react-icons doesn't provide a Simple Icons VS Code export)
  vscode: <FaCode className="text-blue-500" />,

  postman: <SiPostman className="text-orange-500" />,

  thunderclient: <FaCode className="text-yellow-400" />,

  npm: <SiNpm className="text-red-500" />,

  vite: <SiVite className="text-violet-400" />,
};

export default icons;