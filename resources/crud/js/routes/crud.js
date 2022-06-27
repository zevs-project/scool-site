const admin = () => import("../components/admin.vue");
const read = () => import("../components/pages/read.vue");
const create = () => import("../components/pages/create.vue");
const update = () => import("../components/pages/update.vue");

export default [
    {
        path: "/admin/update/:table/:rowId",
        component: update,
        name: "update",
    },
    {
        path: "/admin/create",
        component: create,
        name: "create",
    },
    {
        path: "/admin/read/:table",
        component: read,
        name: "read",
    },
    {
        path: "/admin",
        component: admin,
        name: "admin",
    },
];
