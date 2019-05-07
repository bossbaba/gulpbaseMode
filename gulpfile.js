const gulp = require("gulp"),
  babel = require("gulp-babel"),
  nimifycss = require("gulp-clean-css"),
  htmlmini = require("gulp-htmlmin"),
  uglify = require("gulp-uglify"),
  sass = require("gulp-sass"),
  connect = require("gulp-connect"),
  stylus = require('gulp-stylus')

//定制任务压缩html
gulp.task("html", () => {
  gulp.src("./src/index.html")
    .pipe(htmlmini({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
});
//定制任务压缩css
gulp.task("css", () => {
  gulp.src("./src/css/**/*.css")
    .pipe(nimifycss())
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
});
//定制任务压缩js
gulp.task("js", () => {
  gulp.src("./src/js/**/*.js")
    .pipe(babel({
      presets: ["env"]
    }))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
});
// 定制任务转义stylus
gulp.task('stylus',()=>{
  gulp.src('./src/stylus/**/*.styl')
  .pipe(stylus())
  .pipe(gulp.dest('dist/css'))
  .pipe(connect.reload());
})
//定制任务压缩html文件夹下的html文件
gulp.task("html-html", () => {
  gulp.src("./src/html/**/*.html")
    .pipe(htmlmini({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist/html"))
    .pipe(connect.reload());
});
//定制任务编译sass样式
// gulp.task("sass", () => {
//   gulp.src("./src/sass/**/*.scss")
//     .pipe(sass({ outputStyle: "expanded" }))
//     .pipe(gulp.dest("dist/css"))
//     .pipe(connect.reload());
// });
//定制任务复制图片
gulp.task("imgs-copy", () => {
  gulp.src("./src/imgs/**/*.*")
    .pipe(gulp.dest("dist/imgs"));
});
//定制任务启动websever服务器
gulp.task("conn", () => {
  connect.server({
    root: "dist",
    livereload: true
  });
});
//定制监视任务
gulp.task("watch", () => {
  gulp.watch("./src/index.html", ["html"]);
  gulp.watch("./src/css/**/*.css", ["css"]);
  gulp.watch("./src/js/**/*.js", ["js"]);
  gulp.watch("./src/html/**/*.html", ["html-html"]);
  // gulp.watch("./src/sass/**/*.scss", ["sass"]);
  gulp.watch("./src/imgs/**/*.*", ["imgs-copy"]);
  gulp.watch('./src/stylus/**/*.styl',['stylus']);
});
//定制默认任务
gulp.task("default",
  ["html",
    "css",
    "js",
    "html-html",
    // "sass",
    "imgs-copy",
    "watch",
    "conn",
    "stylus"
  ]
);