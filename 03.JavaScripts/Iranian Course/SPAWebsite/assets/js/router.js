const pageTitle = "SPA Site"
const router = {
    404: {
        template:"./404.html",
        title: "پیدا نشد"
    },
    '/': {
        template:"./index.html",
        title: "خانه"
    },
    "/blog":{
        template: "./blog.html",
        title: "بلاگ ها"
    },
    "/courses":{
        template: "./courses.html",
        title: "دوره ها"
    },
    "/product":{
        template: "./product.html",
        title: "محصول"
    },
    "/article":{
        template: "./article.html",
        title: "مقاله"
    },
    "/cart":{
        template: "./cart.html",
        title: "سبد خرید"
    }
};

export default router;

