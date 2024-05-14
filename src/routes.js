import React from 'react';

// Dashboard
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
// Country
const EmployeeList = React.lazy(() => import('./views/Employee/EmployeeList'));
const EmployeeAdd = React.lazy(() => import('./views/Employee/EmployeeAdd'));
const EmployeeDetail = React.lazy(() => import('./views/Employee/EmployeeDetail'));
const EmployeeEdit = React.lazy(() => import('./views/Employee/EmployeeEdit'));

// Thana
//const ThanaList = React.lazy(() => import('./views/thana/ThanaList'));
// const CountryAdd = React.lazy(() => import('./views/country/CountryAdd'));
// const CountryDetail = React.lazy(() => import('./views/country/CountryDetail'));
// const CountryEdit = React.lazy(() => import('./views/country/CountryEdit'));

const routes = [

	{path: '/', exact: true, name: 'Home', component: Dashboard},
	{path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard},

	// country
	{path: '/employee', exact: true, name: 'EmployeeList', component: EmployeeList},
	{path: '/employee/add', exact: true, name: 'EmployeeAdd', component: EmployeeAdd},
	{path: '/employee/:id', exact: true, name: 'EmployeeDetail', component: EmployeeDetail},
	{path: '/employee/:id/edit', exact: true, name: 'EmployeeEdit', component: EmployeeEdit},


	// thana
	// {path: '/thana', exact: true, name: 'ThanaList', component: ThanaList},
	// {path: '/country/add', exact: true, name: 'CountryAdd', component: CountryAdd},
	// {path: '/country/:id', exact: true, name: 'CountryDetail', component: CountryDetail},
	// {path: '/country/:id/edit', exact: true, name: 'CountryEdit', component: CountryEdit},
];

export default routes;
