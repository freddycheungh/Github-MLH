var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function() {
    return gulp.src(["rclient/styles/scss/*/*.scss","client/styles/scss/**/*.scss"])
        .pipe(sass())
        .pipe(gulp.dest("dist"));
});

gulp.task("sass-watch", function(){
    gulp.watch(["client/styles/scss/*/*.scss","client/styles/scss/**/*.scss"], ["sass"]);
});
