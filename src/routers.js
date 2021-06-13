import React from 'react'


const Dashboard = React.lazy(() => import('./screens/admin/index'));
// const user = React.lazy(() => import('./views/theme/colors/Colors'));
// const Accordion = React.lazy(() => import('./views/components/base/accordion/Accordion'));

const routes = [
    { path: '/admin', exact: true, name: 'admin' },
    { path: '/admin/dashboard', name: 'Dashboard', component: Dashboard },
]

export default routes
