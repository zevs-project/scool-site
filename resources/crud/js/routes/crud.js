const admin = () => import("../components/admin.vue");
const read = () => import("../components/pages/read.vue");

export default [
    {
        path: "/admin",
        component: admin,
        name: "admin",
    },
    {
        path: "/read/:id",
        component: read,
        name: "read",
    },
];
