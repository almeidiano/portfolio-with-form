import navConfig from './modules/navbar.js';
import progressBar from './modules/progressBar.js';
import sidebarConfig from './modules/sidebar.js';
import listTechs from './modules/listTechs.js';
import {list} from './modules/allTechnologies.js';
import * as project from './modules/listProjects.js';
import knowMore from './modules/knowMore.js';
import submitForm from './modules/contactForm.js';

navConfig();
progressBar();
sidebarConfig();
listTechs(list);
project.listProjects();
project.getProjectInfo();
knowMore();
submitForm();

