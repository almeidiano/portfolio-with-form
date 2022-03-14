import navConfig from './modules/navbar.js';
import sidebarConfig from './modules/sidebar.js';
import listTechs from './modules/listTechs.js';
import * as project from './modules/listProjects.js';

navConfig();
sidebarConfig();
listTechs();
project.listProjects();
project.getProjectInfo();

// document.getProjectInfo = (info) => {
// 	console.log(info);
// }
