import navConfig from './modules/navbar.js';
import progressBar from './modules/progressBar.js';
import sidebarConfig from './modules/sidebar.js';
import listTechs from './modules/listTechs.js';
import * as project from './modules/listProjects.js';
import submitForm from './modules/contactForm.js';

navConfig();
progressBar();
sidebarConfig();
listTechs();
project.listProjects();
project.getProjectInfo();
submitForm();

