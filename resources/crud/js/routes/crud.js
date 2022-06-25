const admin = () => import("../components/admin.vue");

export default [
    {
        path: "/admin",
        component: admin,
        name: "admin",
    },
];
